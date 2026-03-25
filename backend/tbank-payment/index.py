"""
Инициализация платежа через Т-банк (Tinkoff Acquiring API).
Возвращает URL страницы оплаты для перенаправления клиента.
"""
import os
import json
import hashlib
import requests


CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}


def generate_token(params: dict, password: str) -> str:
    filtered = {k: v for k, v in params.items() if k not in ("Token", "Receipt", "DATA")}
    filtered["Password"] = password
    sorted_values = "".join(str(v) for k, v in sorted(filtered.items()))
    return hashlib.sha256(sorted_values.encode("utf-8")).hexdigest()


def handler(event: dict, context) -> dict:
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": ""}

    body = json.loads(event.get("body") or "{}")

    terminal_key = os.environ["TBANK_TERMINAL_KEY"]
    secret_key = os.environ["TBANK_SECRET_KEY"]

    order_id = body.get("orderId")
    amount = int(body.get("amount", 0))
    description = body.get("description", "Юридическая консультация")
    customer_name = body.get("name", "")
    customer_phone = body.get("phone", "")
    success_url = body.get("successUrl", "")
    fail_url = body.get("failUrl", "")

    if not order_id or amount <= 0:
        return {
            "statusCode": 400,
            "headers": CORS_HEADERS,
            "body": json.dumps({"error": "Необходимы orderId и amount"}, ensure_ascii=False),
        }

    params = {
        "TerminalKey": terminal_key,
        "Amount": amount,
        "OrderId": order_id,
        "Description": description,
        "SuccessURL": success_url,
        "FailURL": fail_url,
    }

    params["Token"] = generate_token(params, secret_key)

    params["DATA"] = {
        "Name": customer_name,
        "Phone": customer_phone,
    }

    response = requests.post(
        "https://securepay.tinkoff.ru/v2/Init",
        json=params,
        timeout=15,
    )
    result = response.json()

    if not result.get("Success"):
        return {
            "statusCode": 502,
            "headers": CORS_HEADERS,
            "body": json.dumps(
                {"error": result.get("Message", "Ошибка при создании платежа")},
                ensure_ascii=False,
            ),
        }

    return {
        "statusCode": 200,
        "headers": CORS_HEADERS,
        "body": json.dumps(
            {"paymentUrl": result["PaymentURL"], "paymentId": result["PaymentId"]},
            ensure_ascii=False,
        ),
    }

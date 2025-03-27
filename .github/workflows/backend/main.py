# backend/main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/customer")
def get_customer():
    return {"name": "John Doe", "transactions": ["Deposit $500", "Withdraw $200"]}

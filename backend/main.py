from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sample dynamic predictions (replace later with real data)
@app.get("/predictions")
def get_predictions():
    matches = [
        ("Alcaraz", "Zverev"),
        ("Medvedev", "Rublev"),
        ("Tsitsipas", "Rune"),
    ]

    results = []

    for a, b in matches:
        prob = random.randint(55, 80)

        results.append({
            "playerA": a,
            "playerB": b,
            "probability": prob,
            "confidence": "High" if prob > 70 else "Medium",
            "tag": "Safe Pick" if prob > 72 else ("Underdog Value" if prob < 60 else "")
        })

    return results

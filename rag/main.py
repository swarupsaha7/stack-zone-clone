import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from services import RAGService
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
rag_service = RAGService()

# Optional: Enable CORS for frontend integration
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}


@app.get("/models")
def get_models():
    return rag_service.get_ollama_models()


@app.post("/find")
def find(details: dict):
    try:
        result = rag_service.find_tech_stack(
            type=details["type"], 
            description=details["description"], 
            features=details["features"], 
            target_users=details["target_users"], 
            experience_level=details["experience_level"], 
            preferences=details["preferences"]
        )
        print("--- Service call complete. Returning result. ---")
        return { "result" : result }
    except Exception as e:
        print(f"Error in /find: {e}")
        return {"error": str(e)}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=5000, reload=True)
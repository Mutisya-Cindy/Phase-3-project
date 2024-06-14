from fastapi import FastAPI
from pydantic import BaseModel
from models.plumbers import Plumber  # Update import statement

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get('/plumbers')
def get_plumbers():
    return [{"name": ['John', 'Jane', 'Jack']}]

@app.post('/plumbers')
def save_plumbers(data: dict):  # Add type annotation for data
    print(data)


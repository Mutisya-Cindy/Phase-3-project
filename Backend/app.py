from fastapi import FastAPI
from pydantic import BaseModel
from fastapi import FastAPI
from models.plumbers import Plumber
from models.users import User
from models.bookings import Booking  

app = FastAPI()

class PlumbersRequest(BaseModel):
    name: str

class UsersRequest(BaseModel):
    username: str

#
dummy_plumbers = [{"name": 'John'}, {"name": 'Jane'}, {"name": 'Jack'}]

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get('/plumbers')
def get_plumbers():
    return dummy_plumbers

@app.post('/plumbers')
def save_plumbers(data: PlumbersRequest):
    
    print(data.dict())

@app.get('/users')
def get_users():
    
    dummy_users = ["Adan", "Tess", "Tet"]
    return dummy_users

@app.post('/users')
def save_users(data: UsersRequest):
    
    print(data.dict())

version: '3'
services:
backend:
build:
context: ./api
ports: - "3001:3001"
depends_on: - mongo

frontend:
build:
context: ./ui
ports: - "3000:3000"

mongo:
image: "mongo:latest"
ports: - "27017:27017"

# Go Movies

A three-tier web application to display movies. The tiers are containerized and configured using docker compose.

## Tech stack
- Front End: React
- Back End: Go
- Database: Postgres
- Container: Docker

## Features
1. Create, read, update and delete movies (CRUD) in admin page
2. Authentication with JWT
3. Containerized stack using docker compose

## Pre-requisite:
- Docker & docker-compose installed
- Docker daemon is running

## How to use
- Clone this repository: `git clone https://github.com/quranyamal/gomovies`
- Go to the project directory: `cd gomovies`
- Rename ".env.example" to ".env": `mv .env.example .env`
- Create and start containers: `docker compose up`

The web page is served on port 3000 and the API on port 4000 (by default). Please go to http://localhost:3000/ or http://[hostname]:3000/ from your browser after starting the containers.
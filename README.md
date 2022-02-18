# Go Movies

This is a source code of containerized three-tier web application to display movies.
## Tech stack
- Front End: React
- Back End: Go
- Database: Postgres
- Container: Docker

## Features
1. Create, read, update and delete movies (CRUD) in admin page
2. Authentication with JWT
3. Containerized stack using docker compose

Pre-requisite: Docker & docker-compose installed

## How to use
- Clone this repository:
    `git clone https://github.com/quranyamal/gomovies`
- Go to the project directory:
    `cd gomovies`
- Create and start containers:
    `docker compose up`

The web page is served on port 3000 and the API on port 3000 (by default).
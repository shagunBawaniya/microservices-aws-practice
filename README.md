# Node.js Microservices Backend Architecture

This project is a hands-on practice implementation of a **Microservices-based backend architecture** using **Node.js**, **Express**, and **Docker**.

The main goal of this project is to understand how independent backend services work together through an **API Gateway**, and how they can be **containerized and deployed using Docker and Docker Compose**.

---

## Project Architecture

The system is divided into multiple independent services:

- **API Gateway** – Central entry point that routes client requests to respective services
- **User Service** – Handles user-related APIs
- **Product Service** – Manages product-related operations
- **Profile Service** – Handles profile-related data

Each service runs independently and is containerized using **Docker**.

## Architecture Diagram

Client Request  
↓  
API Gateway  
↓  

-----------------------------------------

User Service | Product Service | Profile Service  

(Node.js) | (Node.js) | (Node.js)

-----------------------------------------

↓  

Docker Containers (Docker Compose)

---

## Tech Stack

- Node.js
- Express.js
- Microservices Architecture
- API Gateway Pattern
- Docker
- Docker Compose
- GitHub
- DockerHub

---

## Project Structure

```
microservices-aws-practice
│
├── api-gateway
├── user-service
├── product-service
├── profile-service
│
├── docker-compose.yml
└── README.md
```

---

## Running the Project with Docker

### Clone the repository

```
git clone https://github.com/shagunBawaniya/microservices-aws-practice
```

### Navigate to project directory

```
cd microservices-aws-practice
```

### Start all services

```
docker compose up --build
```

This command will build Docker images and start all services.

---

## Docker Images

Docker images for all services are available on DockerHub:

https://hub.docker.com/u/shagunbawaniya19

---

## Learning Objective

This project was built as a **hands-on practice project** to understand modern backend architecture concepts including:

- Microservices architecture
- API Gateway pattern
- Service-to-service communication
- Containerization using Docker
- Multi-container orchestration with Docker Compose
- Publishing Docker images to DockerHub
- Version control using GitHub

---

## Author

**Shagun Bawaniya**

Backend Node.js Developer  
Experienced in building scalable backend APIs using Node.js, Express, Docker and Microservices architecture.

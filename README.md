# Backend Todo App

## Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Node.js installed on your machine

---

## Installation Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/backend-todo-app.git
   cd backend-todo-app

2. **Generate Prisma Client**
   ```bash
   npx prisma generate

3. **Build Docker Images:**
   ```bash
   docker compose build
   
4. **Create PostgreSQL Migrations and Apply Them:**
   ```bash
   docker compose run app npx prisma migrate dev --name init

5. **Boot Up Docker Containers:**
   ```bash
   docker compose up

6. **Access the App**
   Open your browser and go to  http://localhost:4500 (or the port you configured).

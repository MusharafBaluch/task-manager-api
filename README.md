# 🧠 Task Manager API

A simple and efficient RESTful API built with **Node.js**, **Express.js**, and **MongoDB** for managing daily tasks.

## 🔧 Features

- Add, update, delete, and retrieve tasks (CRUD)
- Track task priority (High, Medium, Low)
- Auto timestamps for created and updated tasks
- Proper error handling and input validation
- Clean and modular code structure

## 📦 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- Postman (for API testing)
- dotenv (for environment config)

## 📁 Project Structure

task-manager-api/
│
├── controllers/
│ └── taskController.js
├── database/
│ └── db.js
├── models/
│ └── taskModel.js
├── routes/
│ └── route.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md


🔌 API Endpoints
Method	Endpoint	Description
GET	/api/task/get	Get all tasks
GET	/api/task/get/:id	Get task by ID
POST	/api/task/post	Create a new task
PUT	/api/task/put/:id	Update task by ID
DELETE	/api/task/delete/:id	Delete task by ID

🧪 Tested with Postman


📬 Contact
Developed by Musharaf Baluch
Let's connect and grow together! 🌱

# TASK MANAGER - MERN 

 The task manager app is a versatile productivity tool that combines task management, to-do lists, and note-taking functionalities. Users can efficiently organize, prioritize, and track their tasks, create to-do lists for better task categorization, and take notes for important information. The user-friendly interface, synchronization across devices, reminders, and optional collaboration features make it a comprehensive solution for streamlined productivity.

# Intrtoduction

 Welcome to our Task Manager App – your all-in-one solution for efficient task management, seamless to-do list organization, and convenient note-taking. This application is designed to enhance your productivity by providing a unified platform for managing your daily activities. Whether you're an individual striving for personal organization or part of a collaborative team, our app is here to simplify your workflow.
# Features
# Task Management :

Create, edit, and delete tasks with ease.

Specify due dates, priorities, and track task status effortlessly.

Categorize and filter tasks for a customized and organized view.

Get notify through the app on bell icon

# To-Do :

Create lists to organize tasks based on projects, categories, or any criteria.

Break down tasks into manageable sections for focused execution.

# Notes - Functionality :

Capture ideas, thoughts, and important information effortlessly.

Edit and organize notes with rich text formatting and multimedia attachments.

# DEMO
![Screenshot (123)](https://github.com/user-attachments/assets/5fa1bdf8-1ef2-447c-ba8d-3ce5245a6361)
![Screenshot (122)](https://github.com/user-attachments/assets/2c86092e-26e0-41c4-bba7-e10a235c9ff8)
![Screenshot (121)](https://github.com/user-attachments/assets/45219b20-66b9-4206-aab0-e3e79478df45)
![Screenshot (120)](https://github.com/user-attachments/assets/d10f3846-3ccc-4b3c-afbe-8c16be293ace)
![Screenshot (118)](https://github.com/user-attachments/assets/973a49c0-a840-453c-aadc-60a815e5a353)


## Technologies Used

- **Frontend:**
  - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
  - [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [React.js](https://reactjs.org/)

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)

- **Database:**
  - [MongoDB](https://www.mongodb.com/)

- **Other Tools:**
  - [Git](https://git-scm.com/)
  - [GitHub](https://github.com/)
  - [VSCode](https://code.visualstudio.com/)
    
# Getting Started
## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js; npm v6.14.6 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (v4.0 or higher)
- [Your preferred web browser](https://www.google.com/chrome/)

> Note: Make sure to install the specified versions or higher to avoid compatibility issues.

To check if you have Node.js and npm installed, run the following commands in your terminal:

```bash
node --version
npm --version
```
## How To Run
Create the file `BackEnd/.env` with your Atlas URI and the server port:

**FrontEnd**
```
REACT_APP_API_URL = your backend api with port
```
**BackEnd**
```
MONGO_URL = your mongoDb url either from atlas or from localhost shell
```
If you are going Authenticate with Facebook and Google Through PassportJs Stratgy...
```
GOOGLE_CLIENT_ID = your google app clint id
GOOGLE_CLIENT_SECRET = your google app client secret
FACEBOOK_CLIENT_ID = your facebook app clint id
FACEBOOK_CLIENT_SECRET = your facebook app client secret
FRONTEND_DOMAIN = you react app url with port
SESSION_SECRET = anything you want
JWT_SECRET_KEY = anything you want
```
Start server i.e., BackEnd:
```
cd Task-Manager--First-MERN/BackEnd
npm install
npm start
```
Start Client i.e., FrontEnd:
```
cd Task-Manager--First-MERN/FrontEnd
npm install
npm start or npm run dev
```

# Thank You

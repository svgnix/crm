
# Contact Management App

Effortlessly manage your contacts with our simple and sleek Contact Management App. Add, edit, and organize your contacts in one place with a beautiful UI and robust backend.

---

## 🚀 About the Project

This app is your go-to solution for managing contacts efficiently. It lets you:
- Add new contacts with details like name, email, phone, company, and job title.
- Edit existing contacts with just a click.
- Delete contacts you no longer need.

It’s built using modern web technologies for a fast, reliable, and responsive experience.

### Tech Stack:
- **Frontend:** React.js + Material-UI
- **Backend:** Node.js + Express.js
- **Database:** MongoDB
- **API Communication:** Axios

---

## 🛠️ Getting Started

Here’s how to set it up:

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v16+)
- **MongoDB** (running locally or on the cloud)
- **npm** (or yarn)

---

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install the required packages:
   ```bash
   npm install
   ```

3. Add an environment file:
   Create a `.env` file in the `frontend` folder and add:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the React app:
   ```bash
   npm start
   ```

   🎉 Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the app live.

---

### Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Add another environment file:
   Create a `.env` file in the `backend` folder and add:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/contact-manager
   ```

4. Start the backend server:
   ```bash
   node server.js
   ```

   🚀 The backend is now running at [http://localhost:5000](http://localhost:5000).

---

## 🗂️ Database Design

We keep things clean and simple. Here’s the structure of a contact in our database:

| Field      | Type     | Description                |
|------------|----------|----------------------------|
| firstName  | String   | The contact's first name   |
| lastName   | String   | The contact's last name    |
| email      | String   | Unique email address       |
| phone      | String   | Contact phone number       |
| company    | String   | Company name               |
| jobTitle   | String   | Job title                  |

---

## 💡 Why We Built It This Way

1. **React for the UI:** It’s fast, component-based, and makes building dynamic interfaces a breeze.
2. **Material-UI:** Styled components save time and ensure a polished look.
3. **Node.js + Express for APIs:** It’s lightweight and great for building RESTful APIs.
4. **MongoDB for the Database:** Perfect for storing JSON-like data and scaling as the app grows.

---

## 🎯 How It Works

- **Frontend:** Displays your contacts in a user-friendly table. You can add, edit, or delete contacts using simple forms.
- **Backend:** Handles requests to fetch, save, update, or delete contact data.
- **Database:** Stores your contacts and ensures data consistency.

---

## 🚧 Challenges We Solved

1. **Validation Everywhere:** We made sure data is validated on both the frontend and backend to avoid errors.
2. **Preventing Duplicate Emails:** Added a unique constraint in the database schema for emails.
3. **Error Feedback:** Errors are caught and shown to users in an understandable way.

---

## ❤️ Thank You for Checking Out the App!

We built this to simplify contact management while learning and implementing modern web technologies. Let us know if you have ideas for improvements!

---

### Developer

Developed by **[Sagnik](https://github.com/svgnix)**  
Explore more about me [here](https://svgnix.co)!

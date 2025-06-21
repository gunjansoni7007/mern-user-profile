# 🧑‍💻 MERN User Profile Form

A full-stack Multi-Step User Profile Form built with the MERN stack (MongoDB, Express, React, Node.js). The form collects and validates user data, supports dynamic behavior, real-time validations, image upload, and saves user information to MongoDB.

---

## 🚀 Live Demo

🔗 [Click here to view the live site](#)  
(Add your live demo link after deployment)

---

## ✨ Features

### 🔐 Step 1: Personal Info
- Upload profile photo (max 2MB, JPG/PNG) with preview  
- Username with real-time availability check  
- Password update section with strength meter  
- Gender selection with dynamic "Other" input  
- Date of birth (future dates disabled)  

### 🏢 Step 2: Professional Details
- Dynamic company input based on profession  

### ⚙️ Step 3: Preferences
- Address input with country-based reset logic  
- Subscription plan and newsletter opt-in  

### 🧾 Step 4: Summary
- Displays all collected information  
- Profile is saved to MongoDB on submit  

---

## 🛠️ Tech Stack

- **Frontend**: React, CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Validation**: Custom validation (no external libraries)  
- **File Upload**: Multer

---

## 📂 Project Structure

```bash
mern-user-profile/
├── client/                # React Frontend
│   ├── components/        # Form Components
│   ├── App.js
│   └── ...
├── server/                # Express Backend
│   ├── routes/
│   ├── models/
│   └── server.js
├── .env                   # Environment variables
├── README.md
└── package.json

```
--- 

## 📦 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/mern-user-profile.git
cd mern-user-profile

# Install backend dependencies
npm install

# Start backend
npm start

# Open a new terminal for frontend
cd client
npm install
npm start

```
---

## 🌐 Deployment

- Frontend: Netlify (Free Tier)

- Backend: Render (Free Tier)

- Database: MongoDB Atlas (Free Cluster)

---

## 🧪 Validation Checklist

✅ Frontend + Backend Validation (No third-party libraries)

✅ Username availability check via API

✅ Password strength meter

✅ File upload with preview (JPG/PNG only)

✅ Reset address fields if country changes

✅ Disable future dates in DOB

✅ Dynamic gender field (Other → custom input)

✅ MongoDB integration for final data save

---

## 📬 Contact
Made with ❤️ by Gunjan Soni
Feel free to connect or raise an issue!

```yaml

---

### ✅ To Add It to Your Project:

1. Create a file named `README.md` (if not already present) at the root of your project.
2. Copy the content above and paste it there.
3. Save the file.
4. Then run:

```bash
git add README.md
git commit -m "📄 Added complete README with features and instructions"
git push origin main

```
---



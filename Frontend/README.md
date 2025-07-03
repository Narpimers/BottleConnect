# ♻️ BottleConnect — Bottle Recycling Through Volunteers

## 🧠 Project Idea

Many people want to recycle plastic bottles, but they don’t have time or a car to take them to a recycling center. **BottleConnect** helps by connecting **people who want to recycle** with **volunteers** who are ready to pick up the bottles and deliver them.

---

## 🎯 Goal

The main goal is to make a simple and useful app where:

- People can submit a form with their bottle recycling request.
- Volunteers can see the list of people and choose who they want to help.
- After a volunteer clicks “Contact”, they will see full contact info.
- The request is then removed from the public list.

---

## 👥 User Roles

### 1. Person who wants to recycle

- Fills out a form: name, phone, district, number of bottles.
- Waits until a volunteer contacts them.
- After that, their request disappears from the list.

### 2. Volunteer

- Opens a page with a list of requests.
- Sees cards with basic info (no phone).
- Clicks “Contact” to help → redirected to a page with contact info.
- The request disappears from the public list.

---

## 🔧 Technical Details

### Frontend

- **React** (functional components only)
- **React Router** — for navigation between pages
- **Context API + custom hooks** — for global state

### Backend

- **Node.js + Express** — REST API
- **UUID** — to generate unique request IDs
- Temporary storage in an array (can be replaced with a database later)

### Pages

- `/home-page` - main page to select between `/submit` or `/pickup-list`
- `/submit` — form for submitting a request
- `/pickup-list` — list of requests for volunteers
- `/details/:id` — page with full contact details after clicking "Contact"

---

📁 Project Structure

---

<br>bottleconnect/
<br>├── backend/
<br>│   └── server.js
<br>├── frontend/
<br>│   └── src/
<br>│       ├── components/
<br>│       ├── pages/
<br>│       ├── context/
<br>│       ├── hooks/
<br>│       └── App.js
<br>└── README.md


## 📋 Example Request

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "Anna",
  "phone": "+0123456789",
  "district": "Central",
  "bottles": 15
}


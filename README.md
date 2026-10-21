# 🚀 ReserveHub

### Book Smarter. Experience More.

**[🌐 Live Demo — Explore ReserveHub](https://reserve-hub-frontend.vercel.app/)**

**ReserveHub** is a modern, full-stack service booking platform that makes discovering services, scheduling appointments, and managing reservations simple and seamless.

This repository contains the **Vue 3 frontend**, featuring a responsive customer experience and a dedicated administration dashboard.

![Vue.js](https://img.shields.io/badge/Vue.js-3-42B883?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-FFD859?style=for-the-badge&logo=vue.js&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CD6799?style=for-the-badge&logo=sass&logoColor=white)

---

## ✨ Key Features

ReserveHub offers two dedicated experiences: one for customers and another for administrators.

### 👤 Customer Experience

| Feature | Description |
|---|---|
| 🔐 Authentication | Registration, login, email verification, and password recovery |
| 🔎 Explore Services | Browse, search, filter, and sort available services |
| 📅 Appointment Booking | Select available time slots and make reservations |
| 📋 My Bookings | Track appointments and cancel eligible bookings |
| ⚙️ Profile Management | Update personal information and profile picture |

### 🛡️ Admin Dashboard

| Feature | Description |
|---|---|
| 📊 Dashboard Overview | Monitor users, services, and booking statistics |
| 🛠️ Service Management | Create, edit, activate, and deactivate services |
| 📆 Booking Management | Review bookings and manage appointment statuses |
| 👥 User Management | View registered users and manage user roles |
| 🔒 Access Control | Restrict administration features to authorized users |

### 🎨 UI & User Experience

- Responsive layouts for desktop, tablet, and mobile
- Modern blue-themed interface with reusable components
- Loading skeletons, empty states, and toast notifications
- Form validation and clear error feedback
- Protected navigation and role-based interfaces

---

## 🧰 Technology Stack

| Category | Technologies |
|---|---|
| **Frontend** | Vue 3, JavaScript, Vite |
| **State Management** | Pinia |
| **Routing** | Vue Router |
| **API Integration** | Axios |
| **UI & Styling** | Bootstrap 5, SCSS, Bootstrap Icons |
| **Backend Integration** | REST API powered by Node.js, Express, and MongoDB |

---

## 📂 Project Structure

```text
src/
├── assets/         # Images and static resources
├── components/     # Reusable UI components
├── router/         # Routes and navigation guards
├── services/       # Axios and API requests
├── stores/         # Pinia state management
└── views/          # Customer and admin pages
```

The application separates UI components, API communication, authentication state, and routing to keep the codebase organized and maintainable.

---

## ⚡ Getting Started

### 1. Requirements

Make sure you have:

- Node.js and npm installed
- The ReserveHub backend API running

### 2. Install Dependencies

Download or clone this repository, open its directory, and run:

```bash
npm install
```

### 3. Configure Environment

Create a `.env` file in the project root and configure the environment variables required by the application's API services.

For locally hosted user and service images:

```env
VITE_API_URL_IMAGE=http://localhost:8000/
```

The application also requires the correct backend API configuration to perform authentication, bookings, and data management.

### 4. Start Development Server

```bash
npm run dev
```

### 5. Production Build

```bash
npm run build
```

---

## 🔑 Demo Admin Access

For an **isolated demo environment** using sample data, the following account can be used to explore the administration dashboard.

| Credential | Value |
|---|---|
| **Email** | `usertest@gmail.com` |
| **Password** | `a123123123` |
| **Role** | Administrator |

> **Important:** These credentials are for a dedicated demo environment only. The account must exist in the connected backend and must not have access to real users or production data.

---

## 🔗 Backend Integration

ReserveHub uses a separate backend application responsible for:

- Authentication and JWT session management
- User accounts and role-based authorization
- Services and appointment availability
- Booking creation and status updates
- Profile images and file uploads

**This repository contains the frontend only.** A running backend and database are required for full functionality.

---

## 🎯 Project Highlights

This project demonstrates practical experience in:

**Vue 3 Development** · **REST API Integration** · **Authentication** · **State Management** · **Responsive UI** · **Admin Dashboards** · **Full-Stack Architecture**

---

## 🌐 Live Demo

**Explore ReserveHub:** [https://reserve-hub-frontend.vercel.app/](https://reserve-hub-frontend.vercel.app/)

---

**ReserveHub** — *Book Smarter. Experience More.*

Built with Vue 3 and a focus on clean interfaces, practical functionality, and user experience.

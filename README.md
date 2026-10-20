ReserveHub — Frontend

A modern, responsive service booking and management platform built with Vue.js.

ReserveHub provides a simple and intuitive experience for discovering services, scheduling appointments, managing personal bookings, and administering services and users through a dedicated dashboard.

This repository contains the frontend application of ReserveHub, which communicates with a RESTful backend API.

Features

Authentication & User Accounts

User registration and login

Email verification

Password recovery and reset

JWT-based authentication with session refresh

Profile management with avatar uploads

Role-based access control

Service Booking

Browse available services

Search, filter, and sort services

View service details and availability

Book available appointment slots

Track personal bookings

Cancel eligible bookings

Admin Dashboard

Overview of users, services, and bookings

Create, edit, activate, and deactivate services

Manage bookings and update their statuses

View booking details

View registered users and manage user roles

Monitor booking status summaries

User Interface

Fully responsive layouts

Clean, modern dashboard design

Loading skeletons and empty states

Form validation and error feedback

Reusable Vue components

Privacy Policy and Terms of Service pages

Tech Stack

Technology

Purpose

Vue 3

Frontend framework

JavaScript

Application logic

Vite

Development and build tool

Vue Router

Client-side navigation

Pinia

State management

Axios

HTTP requests and API integration

Bootstrap 5

Responsive layout and UI components

SCSS

Custom styling

Bootstrap Icons

Interface icons

Getting Started

Prerequisites

Node.js

npm

A running ReserveHub backend API

Installation

Clone the repository and install dependencies:

Alternatively, download the repository directly from GitHub and open it in your terminal.

npm install

Environment Configuration

The frontend requires access to the ReserveHub backend API.

Configure the local environment settings for your backend connection. Environment files are excluded from version control to protect sensitive configuration.

For locally hosted uploaded images, the image base URL is:

VITE_API_URL_IMAGE=http://localhost:8000/

Ensure the backend is running and the remaining API configuration matches your environment.

Run the Application

Start the development server:

npm run dev

Production Build

Generate an optimized production build:

npm run build

Demo Admin Account

The following credentials are intended only for an isolated demonstration environment containing sample data.

Field

Value

Email

usertest@gmail.com

Password

a123123123

Role

Admin

The demo account must exist in the connected backend database. These credentials do not provide access without a configured backend.

Project Architecture

The frontend follows a component-based structure with separation between presentation, routing, application state, and API communication.

Views: Application pages and dashboard screens

Components: Reusable UI elements

Router: Navigation and protected routes

Stores: Authentication and shared application state

Services: Backend API communication

Assets: Images and other static resources

Backend Integration

ReserveHub uses a separate backend application built with Node.js, Express.js, and MongoDB.

The backend handles authentication, user management, service management, booking operations, image uploads, and authorization.

This frontend requires the backend for dynamic functionality.

Project Purpose

ReserveHub was developed as a full-stack web development project to demonstrate practical experience with:

Building responsive single-page applications

Integrating RESTful APIs

Managing authentication and user sessions

Implementing role-based interfaces

Handling forms, validation, and file uploads

Developing administrative dashboards

Organizing scalable frontend code

License

No open-source license has been specified for this repository.

ReserveHub — Book smarter. Experience more.

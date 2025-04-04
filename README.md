<div align="center"><strong><h1>AI-CADEMY</h1></strong></div>

## Table of Contents
- [Introduction](#introduction)
- [Current Features](#current-features)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Team Members](#team-members)
- [Future Plans](#future-plans)


## Introduction
Welcome to the **AI-CADEMY** repository!  
This project creates a platform for learners to **generate their own study material using AI**.  
The primary technologies used include **JavaScript**, **CSS**, **HTML**, and **React**.

## Current Features
- 🚀 **Dynamic Course Generation**: Create AI-powered courses tailored to specific needs.
- 🧑‍💻 **User-Friendly Interface**: Clean and intuitive UI.
- 📱 **Responsive Design**: Fully responsive across all screen sizes.
- 📺 **YouTube Integration**: Embeds relevant YouTube videos for visual learning.

## Dependencies
```bash
@clerk/clerk-react: ^5.25.5  
@clerk/react-router: ^1.1.11  
@google/generative-ai: ^0.24.0  
@neondatabase/serverless: ^1.0.0  
@radix-ui/react-alert-dialog: ^1.1.6  
@radix-ui/react-dialog: ^1.1.6  
@radix-ui/react-dropdown-menu: ^2.1.6  
@radix-ui/react-popover: ^1.1.6  
@radix-ui/react-select: ^2.1.6  
@radix-ui/react-slot: ^1.1.2  
@tailwindcss/vite: ^4.0.17  
axios: ^1.8.4  
class-variance-authority: ^0.7.1  
clsx: ^2.1.1  
drizzle-orm: ^0.41.0  
firebase: ^11.5.0  
lucide-react: ^0.484.0  
react: ^19.0.0  
react-dom: ^19.0.0  
react-icons: ^5.5.0  
react-markdown: ^10.1.0  
react-router-dom: ^7.4.1  
react-youtube: ^10.1.0  
tailwind-merge: ^3.0.2  
tailwindcss: ^4.0.17  
tw-animate-css: ^1.2.5  
uuid: ^11.1.0  
```

## Installation

To get started with the AI Course Generator, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/vabs-2004/ai-course-gen.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ai-course-gen
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add the following environment variables:
    ```plaintext
    VITE_CLERK_PUBLISHABLE_KEY=<Your Clerk Publishable Key>
    CLERK_SECRET_KEY=<Your Clerk Secret Key>
    VITE_GEMINI_API_KEY=<Your Gemini API Key>
    VITE_PUBLIC_DB_CONNECTION_STRING=<Your PostgreSQL Drizzle Connection String>
    VITE_FIREBASE_KEY=<Your Firebase Key>
    VITE_YOUTUBE_KEY=<Your YouTube API Key>
    ```

## Usage

After installing the dependencies, you can start the development server using the following command:

```bash
npm start dev
```

## Team Members

    👨‍💻 Vaibhav Singh

    👨‍💻 Vansh Bindal

    👨‍💻 Aman

    👨‍💻 Ansh Dhingra

##Future Plans

    💬 Live Q&A with AI: Real-time question and answer sessions with AI.

    📝 Save Notes: Let users save generated content for future reference.

    🌍 Multi-lingual Support: Make the platform accessible to non-English speakers.

    ❓ Quizzes & Assessments: Add tests to help users review and retain content.





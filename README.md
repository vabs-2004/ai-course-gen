## <div align="center"><strong>AI-CADEMY</strong></div>


## Table of Contents

- [Introduction](#introduction)
- [Current Features](#features)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
  

## Introduction
Welcome to the AI-CADEMY repository! This project aims to create a platform for learners so that they can generate their study material through AI. The primary languages used in this project are J...

## Current Features

- **Dynamic Course Generation**: Create AI courses tailored to specific needs.
- **User-Friendly Interface**: Easy-to-use and intuitive interface.
- **Responsive Design**: Accessible on various devices and screen sizes.
- **Youtube Videos**: (Optional)Accessible on various devices and screen sizes.

## Dependencies
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

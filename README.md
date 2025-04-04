# AI Course Generator

Welcome to the AI Course Generator repository! This project aims to create a platform for learners so that they can generate their study material through AI. The primary languages used in this project are JavaScript, CSS, and HTML.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

AI Course Generator is a web-based application that helps users create AI courses by dynamically generating content based on user preferences. This project leverages Generative AI and modern web technologies to provide a seamless and interactive experience.

## Features

- **Dynamic Course Generation**: Create AI courses tailored to specific needs.
- **User-Friendly Interface**: Easy-to-use and intuitive interface.
- **Responsive Design**: Accessible on various devices and screen sizes.

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
npm start

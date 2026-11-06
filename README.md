# E-Shop | E-Commerce Website

A responsive, frontend e-commerce demonstration project with separate customer and admin areas. The project is built with **React and Vite** while retaining the original HTML pages, CSS, JavaScript workflows, and browser Local Storage approach.

> **Project status:** Deployed to Vercel. Add the final public deployment URL below once you copy it from your Vercel project dashboard.

## Live Demo

- **Live website:** [Add your Vercel deployment URL here]
- **GitHub repository:** https://github.com/Ayaz-31778/E-Commerce-Website-

## Overview

E-Shop demonstrates a basic online shopping workflow, including customer account pages, product browsing, cart and checkout pages, order history, and administration pages.

The React entry point is provided through Vite. Existing page-specific HTML/CSS/JavaScript is retained and continues to handle the original workflows; this is not a full rewrite of every screen into React components.

## Features

### Customer area
- Home page and account entry points
- Signup and login pages
- Product browsing
- Shopping cart and checkout pages
- Order history and profile pages

### Admin area
- Admin dashboard
- Product management pages
- User and order management pages

### Application
- React application entry point
- Vite development server and production build
- Existing CSS and JavaScript retained
- Browser Local Storage for demo data
- Separate customer and admin page areas

> Feature availability depends on the original page scripts and browser data. Test each workflow in the deployed build before presenting it.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Application entry point |
| Vite | Development server and build tool |
| HTML5 | Page structure |
| CSS3 | Styling and layout |
| JavaScript | Existing application interactions |
| Local Storage | Browser-side demo data |
| Git & GitHub | Version control and source hosting |
| Vercel | Production deployment |

## Getting Started

### Prerequisites

Install:
- [Node.js (LTS)](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Ayaz-31778/E-Commerce-Website-.git
cd E-Commerce-Website-
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

### 4. Create a production build

```bash
npm run build
```

Vite creates the production output in the `dist/` directory.

### 5. Preview the production build locally

```bash
npm run preview
```

## Deployment

This repository is configured for a Vite deployment on Vercel.

1. Import this GitHub repository into Vercel.
2. Select **Vite** as the framework preset.
3. Set the root directory to the repository root (`./`).
4. Use the following build settings:

| Vercel setting | Value |
|---|---|
| Install command | `npm install` |
| Build command | `npm run build` |
| Output directory | `dist` |

5. Deploy and test the generated website URL.

## Project Structure

```text
E-Commerce-Website-/
├── admin/              # Original admin pages
├── user/               # Original customer pages
├── css/                # Original stylesheets
├── js/                 # Original JavaScript files
├── public/             # Static assets served by Vite
├── src/
│   ├── main.jsx        # React entry point
│   └── styles.css      # React helper styles
├── index.html          # Vite HTML entry
├── login.html          # Login page
├── signup.html         # Signup page
├── package.json        # Dependencies and npm scripts
├── package-lock.json   # Locked dependency versions
├── vite.config.js      # Vite configuration
├── vercel.json         # Vercel configuration
├── .gitignore          # Ignored generated/local files
└── README.md           # Project documentation
```

## Data and Security Notes

- This is a **frontend demonstration project**. Data stored in Local Storage belongs to the current browser and is not shared across devices or users.
- Local Storage is not a secure authentication system. Do not use this implementation to protect real customer accounts or sensitive information.
- Do not store real passwords, payment details, API secrets, or other sensitive data in frontend code or Local Storage.
- A production e-commerce service requires a secure backend, database, server-side authentication, authorization, input validation, and a trusted payment provider.
- Clear browser Local Storage when you want to reset demo data.

## Development Workflow

After making changes:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

If the GitHub repository is connected to Vercel, pushing to the production branch can trigger a new deployment automatically.

## Author

**Ayaz Dadavali**  
GitHub: [@Ayaz-31778](https://github.com/Ayaz-31778)

---

If you find an issue, reproduce it in the local development environment and include the affected page and steps when reporting it.

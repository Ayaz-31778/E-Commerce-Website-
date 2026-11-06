<!-- E-SHOP README | GitHub profile-friendly project documentation -->

<div align="center">

# 🛍️ E-Shop — E-Commerce Website

### A simple, smart shopping experience with dedicated customer and admin areas.

<p>
  <a href="https://team-ecommerce-store.vercel.app/">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_E--Shop-635BFF?style=for-the-badge" alt="Live Demo" />
  </a>
  <a href="https://github.com/Ayaz-31778/E-Commerce-Website-">
    <img src="https://img.shields.io/badge/GitHub-Source_Code-181717?style=for-the-badge&logo=github" alt="GitHub Repository" />
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/React-UI_Entry-61DAFB?style=flat-square&logo=react&logoColor=20232A" alt="React" />
  <img src="https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=222" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-Styling-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
</p>

**[🚀 Open Live Website](https://team-ecommerce-store.vercel.app/) · [💻 Explore Source Code](https://github.com/Ayaz-31778/E-Commerce-Website-)**

</div>

---

## ✨ About the Project

**E-Shop** is a frontend e-commerce project created to demonstrate the core flow of an online shopping platform. It brings together customer-facing shopping pages and an administration area for managing store information.

The project has been configured with **React and Vite** while retaining the original HTML pages, CSS styling, JavaScript behavior, and Local Storage-based demo workflows. React provides the application entry point and loads the preserved pages; the individual screens have not been fully rewritten as React components.

> 🎯 **Project focus:** Bringing an existing multi-page e-commerce website into a React + Vite workflow while keeping its original page structure and behavior.

## 🌐 Live Preview

<div align="center">

### [team-ecommerce-store.vercel.app](https://team-ecommerce-store.vercel.app/)

**The project is deployed on Vercel.** Open the live demo to explore the available pages and test the workflows.

<a href="https://team-ecommerce-store.vercel.app/">
  <img src="https://img.shields.io/badge/CLICK_TO_VISIT-LIVE_WEBSITE-635BFF?style=for-the-badge&logo=vercel&logoColor=white" alt="Visit live website" />
</a>

</div>

## 🧩 Main Modules

| 🛒 Customer Module | 🛠️ Admin Module |
|---|---|
| Signup and login pages | Admin dashboard |
| Product browsing | Product management pages |
| Shopping cart | User management pages |
| Checkout flow | Order management pages |
| Order history | Administration workflows |
| Profile page | Store overview |

*The exact actions available depend on the original page scripts and the data present in the browser.*

## ⭐ Highlights

- **Two application areas** — separate customer and admin page groups.
- **Preserved project structure** — original HTML, CSS, and JavaScript files are retained.
- **React + Vite setup** — modern development server and production build workflow.
- **Local Storage demo data** — browser-side storage for the existing frontend workflows.
- **Production deployment** — hosted on Vercel.
- **GitHub version control** — source code and project history maintained in GitHub.

## 🧰 Tech Stack

| Technology | How it is used |
|---|---|
| ⚛️ React | Application entry point and page host |
| ⚡ Vite | Local development and production build |
| 🧱 HTML5 | Original page markup |
| 🎨 CSS3 | Original styling and layouts |
| 🟨 JavaScript | Existing page interactions and workflows |
| 💾 Browser Local Storage | Demo data persistence in the current browser |
| 🐙 Git & GitHub | Source control and repository hosting |
| ▲ Vercel | Production hosting |

## 📁 Project Structure

```text
E-Commerce-Website-/
│
├── admin/                  # Original admin pages
├── user/                   # Original customer pages
├── css/                    # Original CSS files
├── js/                     # Original JavaScript files
│
├── public/                 # Static files served by Vite
│
├── src/
│   ├── main.jsx            # React entry point and original-page loader
│   └── styles.css          # React helper styles
│
├── index.html              # Vite application entry
├── login.html              # Login page
├── signup.html             # Signup page
│
├── package.json            # Dependencies and npm scripts
├── package-lock.json       # Locked dependency versions
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel routing configuration
├── .gitignore              # Ignored files and folders
└── README.md               # Project documentation
```

## 🚀 Run Locally

Want to explore or work on the code? Follow these steps.

### 1. Prerequisites

Install the following tools:

- [Node.js (LTS)](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

### 2. Clone the repository

```bash
git clone https://github.com/Ayaz-31778/E-Commerce-Website-.git
cd E-Commerce-Website-
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL printed in your terminal. Vite commonly uses:

```text
http://localhost:5173
```

### 5. Build for production

```bash
npm run build
```

The production files are generated in the `dist/` folder.

### 6. Preview the production build

```bash
npm run preview
```

## ▲ Deployment on Vercel

This repository is configured for Vite deployment.

| Vercel Setting | Value |
|---|---|
| Framework Preset | Vite |
| Root Directory | `./` |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Production Branch | `main` |

To deploy:
1. Import the GitHub repository into Vercel.
2. Confirm the settings in the table above.
3. Click **Deploy**.
4. Open the deployment URL and test the pages.

When the GitHub repository is connected to Vercel, new commits pushed to the configured production branch can trigger a deployment.

## 🔄 Push Future Updates

After editing the project, run:

```bash
git add .
git commit -m "Describe your update"
git push origin main
```

## 🔐 Important: Data & Security

This project is a **frontend demonstration**, not a production-ready commerce backend.

- Local Storage data is saved only in the current browser profile. It is not synchronized across users or devices.
- Local Storage is not secure authentication. Do not use it to protect real accounts or sensitive information.
- Never store real passwords, payment details, private API keys, or secrets in frontend code.
- A real e-commerce launch requires a secure backend, database, server-side authentication and authorization, validation, and a trusted payment provider.
- Browser storage can be cleared by the user, which may remove the demo data.

## 🧪 Suggested Testing Checklist

Before presenting or demonstrating the project, check the relevant pages in the live deployment:

- [ ] Home page loads
- [ ] Signup page opens
- [ ] Login page opens
- [ ] Customer pages load
- [ ] Product browsing works
- [ ] Cart and checkout flow work
- [ ] Order history page loads
- [ ] Admin pages load
- [ ] Product, user, and order management pages load
- [ ] Navigation and refresh behavior work

## 👨‍💻 Author

<div align="center">

### **Ayaz Dadavali**

B.Tech Computer Science & Engineering Student

<a href="https://github.com/Ayaz-31778">
  <img src="https://img.shields.io/badge/GitHub-Ayaz--31778-181717?style=for-the-badge&logo=github" alt="Ayaz on GitHub" />
</a>

</div>

---

<div align="center">

**Thanks for visiting E-Shop!** 💜

If you find the project interesting, feel free to explore the code and share feedback.

**[🌐 Visit Live Demo](https://team-ecommerce-store.vercel.app/) · [⭐ View GitHub Repository](https://github.com/Ayaz-31778/E-Commerce-Website-)**

</div>

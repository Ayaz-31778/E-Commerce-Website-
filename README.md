# E-Shop — React + Vite Edition

This version adds React and Vite while retaining the original E-Shop pages, CSS, JavaScript logic, Local Storage keys, and user/admin workflows.

## 1. Requirements

- Install Node.js (LTS): https://nodejs.org/
- Install Visual Studio Code.
- Extract this project ZIP to a folder on your computer.

## 2. Open the project

1. Open VS Code.
2. Select **File → Open Folder**.
3. Select the extracted `admin` project folder (the folder containing `package.json`).
4. Open **Terminal → New Terminal**.

## 3. Install dependencies

Run this command once:

```bash
npm install
```

Wait until installation finishes.

## 4. Run the project locally

Run:

```bash
npm run dev
```

Vite will show a local address, usually `http://localhost:5173/`.
Open that address in your browser. Use the app's existing navigation to move between pages.

## 5. Test the production build

Run:

```bash
npm run build
```

If successful, Vite creates the production-ready `dist` folder.

To preview that build locally:

```bash
npm run preview
```

## 6. Deploy on Vercel

1. Push the complete project to a GitHub repository. Include `package.json`, `vite.config.js`, `index.html`, `src`, and `public`.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Use these settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Select **Deploy**.
6. Open the generated deployment URL and test the home, signup, login, user and admin pages.

## 7. Deploy on Netlify (alternative)

1. Push the project to GitHub.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Select the repository.
4. Set Build Command to `npm run build` and Publish Directory to `dist`.
5. Deploy the site.

## Existing admin login

- Email: `admin@eshop.com`
- Password: `admin123`

## Project structure

```text
admin/                 Original admin HTML pages
user/                  Original user HTML pages
css/style.css           Original stylesheet
js/                     Original JavaScript files
public/                 Files served by Vite
  original/              Preserved original HTML pages
    admin/
    user/
    index.html
    login.html
    signup.html
  css/                   Original stylesheet
  js/                    Original JavaScript files
  _redirects             Netlify SPA fallback
src/
  main.jsx               React application entry point
  styles.css             React helper styles
index.html               Vite entry page
package.json             Dependencies and commands
vite.config.js            Vite configuration
README.md                 Setup and deployment guide
```

## Important notes

- The original page files and CSS/JavaScript are preserved; their layouts and existing Local Storage functionality are not intentionally redesigned.
- React is used as the application entry point and page host. The original page-specific JavaScript continues to power the existing features.
- This is a frontend-only project. Data is stored in each visitor's browser Local Storage; it is not shared between users or devices.
- For a real public e-commerce service, add a secure backend, database, authentication and payment integration before launch.

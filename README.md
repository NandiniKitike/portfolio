# 💻 Nandini Kitike - Full Stack Developer Portfolio

Welcome to my personal developer portfolio website. This project is built using modern web development standards to showcase my professional work experience, featured projects, skill set, and allow potential clients or recruiters to easily get in touch.

The portfolio is fully responsive, interactive, and powered by **Next.js**, **Tailwind CSS**, and **Motion (Framer Motion)** for rich micro-animations.

---

## 🚀 Key Features

- **Dynamic Work Experience Timeline**: Interactive professional journey highlighting my role at Towner Solution, Bangalore, building ride-hailing app solutions.
- **Projects Showcase**: Interactive grid highlighting major full-stack and frontend projects, such as the *AI Recipe & Pantry App*, *Ecommerce Platform*, and *Expense Tracker*.
- **Interactive Contact Form**: A fully integrated contact form powered by **Web3Forms** allowing direct message delivery.
- **Theme Support**: Prepared dark theme styling to ensure comfortable viewing.
- **Smooth Animations**: Polished user experience with viewport-based entry transitions and hover effects using Framer Motion (`motion/react`).
- **Responsive Layout**: Mobile-first design that looks beautiful on all devices (mobile, tablet, desktop).

---

## 🛠️ Tech Stack

### Core Frameworks & Libraries
* **Frontend**: [React 19](https://react.dev/) & [Next.js 16 (App Router)](https://nextjs.org/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
* **Animations**: [Motion (Framer Motion)](https://motion.dev/)
* **Contact Integration**: [Web3Forms API](https://web3forms.com/)

---

## 📂 Project Structure

Here is an overview of the directory structure:

```text
my-portfolio/
├── app/                  # Next.js App Router root
│   ├── components/       # Reusable components
│   │   ├── Aboutme.jsx   # Info cards and tool icons
│   │   ├── Contact.jsx   # Contact form with Web3Forms Integration
│   │   ├── Footer.jsx    # Footer with email and social links
│   │   ├── Header.jsx    # Hero section with introduction & resume download
│   │   ├── Navbar.jsx    # Sticky navigation bar with mobile support & theme switch
│   │   ├── Services.jsx  # Rendered projects section
│   │   └── Work.jsx      # Work experience timeline
│   ├── favicon.ico       # Page favicon
│   ├── globals.css       # Core Tailwind CSS imports and custom root variables
│   ├── layout.js         # Root layout with Google Fonts (Outfit & Ovo)
│   └── page.js           # Home page assembling all portfolio sections
├── assets/               # Local static images, SVGs, and data configurations
│   ├── assets.js         # Exported assets mapping and structured JSON data arrays
│   └── *.png, *.jpg      # Profile pictures, project thumbnails, and vector icons
├── public/               # Public static assets directory
├── package.json          # Node dependencies and build scripts
├── tailwind.config.mjs   # Tailwind configuration
└── next.config.mjs       # Next.js configurations
```

---

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 1. Clone the repository
```bash
git clone https://github.com/NandiniKitike/portfolio.git
cd my-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
Start the local development server with Turbopack support enabled:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
To build the optimized static asset bundle:
```bash
npm run build
```

---

## 🧑‍💻 Featured Projects

* **AI Recipe & Pantry App**: A full‑stack AI recipe & pantry application where users track kitchen ingredients and receive customized recipe ideas powered by **Google Gemini AI**.
* **Ecommerce Shopping Platform**: Seamless catalog browsing, shopping cart, admin management dashboard, and secure inventory tracking.
* **Blogging Platform**: Multi-category blog content manager with modern responsive grids.
* **Expense Tracker**: Financial helper to record, split, and categorize expenses with automated statistics.

---

## 💼 Work Experience Summary

### Full Stack Developer at **Towner Solution, Bangalore** (2023 - Present)
* Architected and delivered full-featured B2B and B2C web applications from scratch using React.js, Next.js, and TypeScript.
* Implemented real-time ride tracking interfaces using WebSockets, supporting 17,000+ drivers and 20,000+ riders concurrently.
* Integrated Role-Based Access Control (RBAC) with dynamic route guards and permission-based UI rendering.
* Developed Distributor Panels, Channel Partner Dashboards, and lead-generation portals.

---

## 📬 Contact & Links

* **Email**: [kitikenandini6@gmail.com](mailto:kitikenandini6@gmail.com)
* **LinkedIn**: [Nandini Kitike](https://www.linkedin.com/in/nandini-kitike/)
* **GitHub**: [@NandiniKitike](https://github.com/NandiniKitike)

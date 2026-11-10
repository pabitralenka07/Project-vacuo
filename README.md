# VACUO — Precision Vacuum Sealing & Freshness Technology

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Next-generation, ultra-sleek web experience for VACUO — industrial precision vacuum sealing, cold chain distribution, and extended shelf-life preservation.**

[Live Demo](#-getting-started) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure)

</div>

---

## 🌟 Overview

**VACUO** delivers cutting-edge freshness preservation packaging with proprietary multi-layer barrier film and industrial-grade vacuum sealing. This repository houses the flagship web landing experience showcasing VACUO's technology, product ecosystem, metrics, and interactive presentation.

Designed with a high-end, futuristic dark-mode aesthetic featuring deep glassmorphism, fluid physics-based animations, and responsive micro-interactions.

---

## ✨ Features

- **💎 Glassmorphic Dark UI**: Deep backdrop filters, subtle translucent borders, and ambient dark aesthetic optimized for modern displays.
- **🎥 Atmospheric Media**: Immersive ambient video background with smooth overlay transitions.
- **⚡ Framer Motion Dynamics**: Staggered fade-ins, spring-based hover states, and smooth layout transitions.
- **📈 Real-Time Impact Metrics**: Key performance indicators including 98% freshness retention, 24-hour metro delivery, 2M+ packages delivered, and a 0.04% seal failure rate.
- **🔄 Process Breakdown (01 - 04)**: Visual walkthrough of the supply cycle — *Source*, *Seal*, *Ship*, and *Savor*.
- **❓ Interactive FAQ Accordion**: Expandable Q&A with animated state transitions powered by `AnimatePresence`.
- **📱 Fully Responsive**: Fluid typography and flex/grid layouts adapting seamlessly from mobile phones to ultra-wide monitors.

---

## 🛠 Tech Stack

| Layer | Technology | Description |
|---|---|---|
| **Core** | [React 18](https://react.dev/) | Component-driven UI development |
| **Bundler** | [Vite 5](https://vitejs.dev/) | Instant HMR and high-performance builds |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Next-gen utility-first styling engine |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Declarative physics-based animation library |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, modern iconography |
| **Fonts** | Space Grotesk & Inter | Editorial display typography paired with clean sans |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) installed:

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pabitralenka07/Project-vacuo.git
   cd Project-vacuo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit `http://localhost:5173` to explore the experience.

---

## 📦 Scripts

- `npm run dev`: Launch the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Compile and bundle production-optimized assets into `dist/`.
- `npm run preview`: Locally preview the production build.

---

## 📁 Project Structure

```text
Project-vacuo/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images, media, and branding assets
│   ├── vacuo-landing.jsx   # Core landing page experience & sections
│   ├── main.jsx            # React root mount and entry point
│   └── index.css           # Global Tailwind and font styles
├── index.html              # HTML template entry
├── vite.config.js          # Vite configuration with Tailwind & React plugins
├── package.json            # Project dependencies and npm scripts
└── README.md               # Project documentation
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/pabitralenka07/Project-vacuo/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

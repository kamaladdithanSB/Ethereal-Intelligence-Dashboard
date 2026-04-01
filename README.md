# 🌌 Ethereal Intelligence Dashboard
### *Unsupervised Machine Learning meets Dimensionality Design.*

[![Live Demo](https://img.shields.io/badge/Demo-Live_Now-FF0080?style=for-the-badge&logo=netlify)](https://etherealdashboard.netlify.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![ML-KMeans](https://img.shields.io/badge/Engine-ML--KMeans_v6-blueviolet?style=for-the-badge)](https://www.npmjs.com/package/ml-kmeans)

**Ethereal Intelligence** is a futuristic "Dimensionality Hub" designed for e-commerce architects. It transforms raw, messy customer data into actionable business DNA using unsupervised machine learning. No guesswork—just pure mathematical clustering wrapped in a glassmorphic, high-fidelity interface.

🔗 **Live Deployment:** [etherealdashboard.netlify.app](https://etherealdashboard.netlify.app/)

---

## 🚀 The Core Engine
The platform operates on a four-phase neural pipeline to turn `.csv` manifests into revenue strategies:

1.  **Data Ingestion:** Securely stream tabular datasets via `papaparse` with robust error handling for malformed headers.
2.  **Autonomous Neural Processing:** A server-side engine dissects `Income` vs. `Spending` variables, mapping them onto a Cartesian plane using the `ml-kmeans` v6 algorithm.
3.  **Global Context Distribution:** Results are bound to a React `IntelligenceProvider`, ensuring low-latency data persistence across all dashboard routes.
4.  **Visual Observatory:** Mathematical outputs are rendered into dynamic SVG scatter maps and synthesized **Lifetime Value (LTV)** projections.

---

## 🛠️ Tech Stack
* **Framework:** Next.js 16.2 (App Router) with Turbopack for lightning-fast HMR.
* **Styling:** Tailwind CSS v4 utilizing the `@theme` neon design token system.
* **ML Logic:** `ml-kmeans` for real-time edge-layer clustering.
* **State Management:** React Context API for global "Intelligence Memory".
* **Data Parsing:** `papaparse` for robust client-to-server CSV streaming.

---

## 📂 System Architecture
| Route | Function | Status |
| :--- | :--- | :--- |
| `/` | **Observatory:** Main K-Means distribution and macro metrics. | 🟢 Active |
| `/upload` | **Ingest:** File intake and API payload formulation. | 🟢 Active |
| `/segments` | **DNA:** Deep-dive strategy breakdowns per cluster. | 🟢 Active |
| `/revenue` | **Flow:** Cash-flow visualizations over cluster subsets. | 🟢 Active |
| `/neural` | **Forecasts:** Predictive modeling templates. | 🟡 UI Template |

---

## 🧩 Key Features
* **Keyword Intelligence:** The engine automatically identifies columns like "Spending Score" even with naming fuzziness (e.g., finding keywords via "spending").
* **Dynamic Strategy Generation:** Automatically generates command vectors like *"Promote high-value bundles"* or *"Re-engage with coupons"* based on cluster centroids.
* **Glassmorphic UI:** A unified `<Sidebar />` and `<TopBar />` architecture that preserves a persistent state without unmounting.
* **LTV Projection:** Calculates aggregated Lifetime Value outputs of customer arrays to simulate real-world projected cash flow.

---

## ⚡ Quick Start
1. **Clone the Repo:**
   ```bash
   git clone [https://github.com/The_code_learner/ethereal-intelligence.git](https://github.com/The_code_learner/ethereal-intelligence.git)
   Install Dependencies:

Bash
npm install
Launch the Engine:

Bash
npm run dev
Upload Data: Use a standard Mall_Customers.csv to see the clusters in action!

⚠️ Performance Note
The current V8 integration is optimized for speed. However, processing files exceeding 100,000+ rows directly inside ml-kmeans via a standard API route may cause Serverless Function timeouts (10 seconds on Vercel Hobby). Future roadmaps include asynchronous edge queues.

Created by Kamal (Addik) | Project ID: 13668253054305734884

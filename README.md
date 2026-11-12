# DuoSpend 🧾💳

> **Modern, privacy-first household expense & receipt tracker with smart OCR, real-time sync, and fair bill-splitting.**

![Version](https://img.shields.io/badge/version-v0.13.5-indigo.svg)
![PWA](https://img.shields.io/badge/PWA-100%25%20Offline%20Ready-emerald.svg)
![Architecture](https://img.shields.io/badge/architecture-Client--Side%20%2F%20Serverless-cyan.svg)
![Privacy](https://img.shields.io/badge/privacy-Zero%20Telemetry%20%7C%20Local--First-blue.svg)

---

## 📖 Overview

**DuoSpend** is designed for couples, housemates, and families who want a frictionless, private way to track shared expenses, manage monthly household budgets, and eliminate manual receipt entry.

Built with a **local-first, privacy-respecting architecture**, DuoSpend runs anywhere as a Progressive Web App (PWA) with zero internet dependency in supermarket basements, while offering instant real-time multi-device cloud synchronization when connected.

---

## ✨ Key Features

### 📸 1. Smart 3-Tier Receipt OCR Scanner
- **Fast Physical Receipt Snapshots**: Use your phone’s camera or file picker to import tickets directly.
- **On-Device Line-Item Extraction**: Automatically parses store/merchant name, purchase date, total amount, and individual itemized product rows with quantities and prices (optimized for European and Spanish receipts such as Mercadona, Lidl, Aldi, Carrefour, Consum, and El Corte Inglés).
- **Flexible 3-Tier Architecture**:
  1. *On-Device Neural Engine*: Native Android ML Kit bridge for ultra-fast (~0.3s) offline spatial OCR.
  2. *In-Browser Fallback*: On-device Tesseract.js with regex-based tabular receipt extraction.
  3. *Optional Vision AI*: Gemini 2.5 Flash Vision API for complex or crumpled multi-column invoices.
- **Automatic Image Optimization**: Canvas-compressed photos (~25–45 KB each) for long-term storage without eating device memory.

### 👥 2. Fair Household Splitting & Personal Items
- **Custom Household Members**: Define members, initials, custom avatar badges, and theme accent colors.
- **Joint Account vs. 50/50 Splitting**: Attribute purchases to a joint "Home Account" or split directly between partners.
- **Personal Item Deductions**: Bought personal items on a shared grocery run? Mark individual items on the receipt as **Personal** to automatically subtract them from the shared total!

### 🔄 3. Frictionless Multi-Device Sync
- **Private Room Codes**: Sync across phones, tablets, and computers using a private sync room code.
- **Firebase Firestore Integration**: Serverless, zero-maintenance real-time syncing.
- **Auto-Sync & Smart Merging**: Timestamp-based bidirectional merging ensures offline changes reconcile seamlessly once an internet connection is re-established.

### 📶 4. 100% Offline-First Progressive Web App (PWA)
- Full **Service Worker caching** (`sw.js`) guarantees the app opens instantly, even in airplane mode.
- Add to your home screen on Android, iOS Safari, macOS, and Windows (a native Android app is planned).
- Native Android hardware back-button support with stateful modal stack management.

### 📊 5. Monthly Sub-Budgets & Analytics
- **Category Sub-Budgets**: Set specific monthly caps for Groceries, Dining Out, Transit, Clothes, and Utilities.
- **Visual Analytics**: Interactive category breakdown doughnut charts, member spend comparisons, and live budget utilization meters.
- **Duplicate Receipt Protection**: Live detection flags identical receipts entered more than once (Amount + Date + Merchant).
- **Travel / Multi-Currency Mode**: Live foreign exchange rate conversion with offline cached fallback rates.

### 💾 6. Full Data Ownership & Privacy
- **Zero Telemetry**: No third-party analytics, tracking scripts, or ad networks.
- **Complete Portability**: Export your entire ledger and receipt records anytime to structured **CSV** or complete **JSON** backups with 1-click restore.
- **Dark & Light Mode**: Native day/night theme toggle with high-contrast accessibility.

---

## 🛠️ Tech Stack

- **Frontend Core**: Vanilla HTML5, Modern ES6+ JavaScript, CSS3
- **Styling**: Tailwind CSS (with bespoke glassmorphism & responsive mobile layout)
- **Icons**: FontAwesome 6
- **Data Visualizations**: Chart.js
- **OCR Engine**: Tesseract.js + Native Google ML Kit v2 Android Bridge
- **Offline / Caching**: Service Worker API & Web App Manifest (`manifest.json`)
- **Backend / Real-Time Sync**: Google Firebase Firestore (client-side SDK)

---

## 🚀 Getting Started

DuoSpend requires **no complicated build steps or node modules** to run for local development or personal use:

### Quick Run
1. Clone the repository:
   ```bash
   git clone https://github.com/DaidalusX78/DuoSpend.git
   cd DuoSpend
   ```
2. Open `duospend.html` directly in any modern web browser (Chrome, Firefox, Safari, Edge).
3. *(Optional)* For Service Worker PWA installation and camera features, serve over localhost using any static server:
   ```bash
   # Using Python 3
   python -m http.server 8080

   # Or using Node / npx
   npx serve .
   ```
4. Navigate to `http://localhost:8080/duospend.html`.

---

## 📱 Installing as a PWA

- **Android (Chrome / Brave / Edge)**: Tap the three-dot menu `⋮` → **Install app** or **Add to Home screen**.
- **iOS (Safari)**: Tap the Share button `⎋` → **Add to Home Screen**.
- **Desktop (Chrome / Edge)**: Click the Install icon in the browser address bar.

---

## 🔒 Security & Privacy Notice

- All receipts, member profiles, and expenses are stored locally on your device in browser `localStorage`.
- No sensitive API keys or credentials are committed to this repository.
- When enabling Cloud Sync, data is transmitted directly from your client to your private Firebase project using secure WebSocket/HTTPS protocols.

---

## 👤 Author & License

Created by **Marc Bailey** (2026).  
*All rights reserved. Designed for private, household, and community expense management.*

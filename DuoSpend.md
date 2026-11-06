# DuoSpend — Project Requirements & Version History

Git Repository: [https://github.com/DaidalusX78/DuoSpend.git](https://github.com/DaidalusX78/DuoSpend.git)

---

## //*** USER PENDING TASKS ***//
- [ ] **1. Test Receipt Import Feature**: Test physical receipt photo capture on device using the camera and smart OCR.
- [ ] **2. Logo & Assets**: Create custom logo, including `favicon.ico` and PNG favicons.
- [ ] **3. Real-Time Multi-Device Sync**: Firebase Firestore setup and implementation.

---

## Version v0.06 (Released November 2026)

### Key Improvements & Enhancements:
- [x] **1. Inline Header & Hamburger Menu**:
  - Re-anchored `#hamburger-menu-wrapper` inline with `#brand-logo-section` on the right with proper spacing and padding matching the main content cards.
  - Added dedicated mobile hamburger button (`#btn-hamburger-menu-mobile`) inline with the brand logo on mobile header, keeping action buttons neatly positioned beneath.
- [x] **2. Real Client-Side Receipt OCR (Tesseract.js & Smart Parser)**:
  - Replaced random data generation with **real on-device OCR** powered by Tesseract.js.
  - Added smart parsing engine detecting:
    - **Merchant**: Automatic detection of top retail & supermarkets (Mercadona, Lidl, Aldi, AlCash, Deza, Carrefour, Dia, Repsol, Cepsa, etc.) or header text.
    - **Total Amount**: Prioritized regex detection of `TOTAL`, `TOTAL (€)`, `IMPORTE`, `A PAGAR`, `TARJETA`, or highest monetary figure.
    - **Date**: Formats detected `DD/MM/YYYY` into standard `YYYY-MM-DD`.
    - **Category**: Classifies into Food Shopping, Eating Out, Fuel, Clothes, or Other.
    - **Notes**: Extracts line-item snippets.
  - Added visual scanning overlay modal with live percentage progress bar.
  - Added captured receipt thumbnail preview inside the expense entry form so users can easily inspect and verify their photo.
  - **Never** injects fake random numbers: if an amount is ambiguous, leaves the field ready and focused with the receipt photo right above it.
- [x] **3. Removed Duplicate Subheading**:
  - Deleted `#subheading-ledger-desc` ("Search expenses.") as it was redundant beneath `#heading-ledger-title` ("Expenses Search").
- [x] **4. High-Contrast Drawer Button Design & Light/Dark Theming**:
  - Replicated `#btn-theme-toggle` styling (clear borders, high-contrast text, smooth hover states) across all drawer buttons in both Dark and Light modes.
  - Updated all elements in light mode:
    - `app-version-badge` and drawer version badge: `bg-brand-50 text-brand-600 border border-brand-200 dark:bg-slate-800 dark:text-brand-400 dark:border-brand-500/30`.
    - `exportToCSV()`, `exportToJSON()`, `triggerJSONImport()`, and `loadSampleData()`.
    - Added `invoiceToJSON()`: Exports itemized receipts and invoices to a formatted JSON file.
    - `resetFilters()` button: Styled with clean light/dark mode classes.
    - `ledger-footer-toolbar`: Polished border and text contrast.
- [x] **5. Streamlined Drawer Account Header**:
  - Removed bulky "Google Account & Security" header text, leaving a sleek, compact status badge: `<span id="account-status-badge"><i class="fa-brands fa-google text-red-400"></i> Connected</span>`.
- [x] **6. Simplified Theme Mode Text**:
  - `#text-theme-mode` now displays exclusively `"Light Mode"` and `"Dark Mode"` (and `"Modo Claro"` / `"Modo Oscuro"` in Spanish).
- [x] **7. Google Account Status Clarification**:
  - Clarified that Google Login is currently an interactive frontend prototype. Outlined integration steps for live Google Identity Services / Firebase Authentication.
- [x] **8. Intuitive Full-Row Receipt Viewer**:
  - Removed the standalone receipt button from ledger rows.
  - Made the **entire row** of each expense record clickable (`onclick="viewReceiptImage('${item.id}')"`), opening the full receipt photo viewer modal.
  - Preserved Edit and Delete buttons with `event.stopPropagation()`. Applied across main ledger, member breakdown modal, and category breakdown modal.
- [x] **9. Version Control**: Updated codebase to `v0.06`.

---

## Version v0.05 (Released November 2026)

### Accessibility & Form Field Associations:
- [x] **1. Form Field `<label>` Associations**: Resolved all 10+ browser DevTools / WCAG accessibility issues (`A <label> isn’t associated with a form field`).
  - Added explicit `for="..."` attributes linking every `<label>` to its respective `<input>`, `<select>`, and `<textarea>` controls across all forms and modals (Expense Details, Household Settings, Settle Up, and radio selectors).
  - Tapping or clicking any label now automatically transfers focus and toggles form controls seamlessly.
- [x] **2. Version Bump**: Updated application title, brand badges, drawer badges, and code metadata to `v0.05`.

---

## Version v0.04 (Released November 2026)

### Key Features & Architectural Improvements:
- [x] **1. Android App Conversion Readiness**: Structured as a clean, self-contained single-page application (SPA) optimized for Android Studio `WebView` embedding. Added Android/PWA meta tags (`mobile-web-app-capable`, `theme-color`, flexible viewport).
- [x] **2. Calendar Month Ledger View**: Removed legacy `clearAllExpenses()` button; default ledger display now shows the active calendar month (clearing the visual ledger on the 1st of each month while retaining historic records in storage). Added a dynamic Month/Year selector dropdown to browse historical months or view All time.
- [x] **3. Drawer Menu Far Right**: Re-anchored the off-canvas drawer menu to the far right with a slide-in panel.
- [x] **4. Select Chevron Padding**: Added `padding-right` (`pr-9` / `pr-8`) to all custom select dropdowns (`#expense-category-select`, `#expense-split-policy-select`, `#ledger-month-filter`, etc.) preventing text from overlapping down arrows.
- [x] **5. Updated Expense Categories**: Aligned categories to:
  - Food Shopping (`Groceries`)
  - Eating Out (`Dining Out`)
  - Fuel (`Transit`)
  - Clothes (`Clothes`)
  - Other (`Other`)
- [x] **6. Multi-Device Sync Explanation**: Clarified `localStorage` device-local limitations and outlined cloud sync paths (Firebase Firestore / Supabase / Google Drive) for multi-device sync.
- [x] **7. Google Account & Security**: Added Google Account card in the drawer menu displaying user profile, sign-in/sign-out controls, App Lock simulation toggle, and Cloud Sync indicators.
- [x] **8. Right-Hand Drawer Overlay**: Positioned `#hamburger-drawer-overlay` on the right side with 75% screen width and 25% blurred backdrop.
- [x] **9. Day / Night Mode**: Added smooth theme toggle in the drawer menu with custom inline SVG sun and moon icons, persisting user theme preference in `localStorage`.
- [x] **10. Streamlined Scan Button**: Updated `#text-btn-scan` to "Scan" (removed "Receipt" for cleaner mobile button proportions).
- [x] **11. Receipt Image Viewer**: Added receipt preview icon button to each table row and mobile card in the ledger, allowing users to view the captured photo in a zoomable modal.
- [x] **12. Relocated Export/Import**: Moved CSV export, JSON export, and JSON import buttons from the main ledger toolbar into the drawer menu under "Data & Backup".
- [x] **13. Visual Payer Highlight**: Added left border color indicator (`border-l-4 border-cyan-500` for Person 1, `border-pink-500` for Person 2, `border-indigo-500` for Home Account) on every ledger record.
- [x] **14. Renamed Ledger Titles**: Changed `#heading-ledger-title` to "Expenses Search" and `#subheading-ledger-desc` to "Search expenses."
- [x] **15. Member Expenses Modal**: Tapping `#card-person1-paid` or `#card-person2-paid` opens a dedicated breakdown modal displaying all expenses for that member, formatted like the ledger table with a month filter dropdown.
- [x] **16. Settle Up Flow**: Added interactive "Settle Up" modal to `#card-settlement-balance` to record debt payments (e.g., Bizum, Cash, Bank Transfer), updating balances and recording audit logs.
- [x] **17. Dynamic Initial Badges**: Automatically displays `MB` for Marc, `RJ` for Rocio, `EB` for Elisa, with custom badge initial and accent color overrides in Household Settings.
- [x] **18. Default Category Bar Chart & Tap Breakdown**: Set category breakdown as the default bar chart mode. Tapping any bar opens a popup modal with all expenses for that category in the current month.
- [x] **19. Universal Modal Dismissal**: Enabled closing all modals and popups via the close button, "X" icon, pressing `Escape`, or tapping anywhere on the darkened backdrop.
- [x] **20. Active Bilingual Translations**: Enabled complete Spanish (Castellano) and English translations for categories, `#ledger-category-filter`, and `#ledger-purchaser-filter`.

---

## Version v0.03 (Released November 2026)

- [x] Git repository initialization and remote sync.
- [x] Direct device camera photo capture on Scan button.
- [x] Main file renamed to `duospend.html`.
- [x] JSON data import with schema validation.
- [x] Multi-currency support (EUR € default, USD, GBP, CHF, JPY, CAD, AUD, PLN).
- [x] Expanded off-canvas drawer menu (75% width, blurred 25% backdrop).
- [x] Viewport zoom stability fixes in Chrome Live Server.
- [x] Relocated hamburger menu to header right.
- [x] Unified header action button sizing (+25% font size).
- [x] Combined household pill and settings button.
- [x] Fast presets for top 5 merchants (AlCash, Lidl, Aldi, Mercadona, Deza).
- [x] "Home Account" split policy as default.
- [x] Added merchant spending distribution chart.
- [x] Spanish (Castellano) language switcher with SVG flags and persistence.
- [x] Version control numbering.

---

## Version v0.02 (Released November 2026)

- [x] Semantic kebab-case renaming of all HTML IDs and container elements.
- [x] Added hamburger menu, fullscreen toggle, and credits to Marc Bailey.

---

## Version v0.01 (Initial Prototype)

- [x] Initial split-expense calculator with receipt simulation and Chart.js visualization.

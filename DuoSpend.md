# DuoSpend — Project Requirements & Version History

Git Repository: [https://github.com/DaidalusX78/DuoSpend.git](https://github.com/DaidalusX78/DuoSpend.git)

---

## //*** USER PENDING TASKS ***//
- [ ] **1. Test Receipt Import Feature**: Test physical receipt photo capture on device using the camera.
- [ ] **2. Logo & Assets**: Create custom logo, including `favicon.ico` and PNG favicons.

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

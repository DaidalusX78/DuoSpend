# DuoSpend — Project Requirements & Version History

Git Repository: [https://github.com/DaidalusX78/DuoSpend.git](https://github.com/DaidalusX78/DuoSpend.git)

---

## //*** USER PENDING TASKS ***//
- [ ] **1. Test Receipt Import Feature**: Test physical receipt photo capture on device using the camera and smart OCR.
- [ ] **2. Logo & Assets**: Create custom logo, including `favicon.ico` and PNG favicons.
- [ ] **3. Real-Time Multi-Device Sync**: Firebase Firestore setup and implementation.
- [ ] **4. Live Google Account Login**: Integrate Google Identity Services (GIS) / Firebase Auth for active login.
- [ ] **5. Android Studio Package Structure**: Break up single-page asset into clean project structure for Android Studio importation.
- [ ] **6. Split Settlement Card**: Re-enable and configure settlement card display when ready.

---

## Version v0.07 (Released November 2026)

### Key Fixes & UI Enhancements:
- [x] **1. Actual Amount Paid Calculation Fixed**:
  - Resolved calculation bug in `calculateMetricsAndSettlement()` where expenses split as "Home Account" were prematurely returning and skipping the personal paid totals.
  - `#person1-total-paid-amount` and `#person2-total-paid-amount` now correctly sum **all** actual expenses paid by each member (including Home Account and shared expenses), accurately reflecting their out-of-pocket spend and percentages.
- [x] **2. Removed Redundant Out-of-Pocket Label**:
  - Deleted `#text-out-of-pocket-p1` and `#text-out-of-pocket-p2` ("Actual out-of-pocket") from member cards, leaving a clean percentage indicator right-aligned in the card footer.
- [x] **3. Cleaned Account Status Badge**:
  - Removed background color (`bg-emerald-500/20`) from `#account-status-badge`, leaving a clean emerald text/icon indicator.
- [x] **4. Removed All Demo & Sample Receipts**:
  - Completely removed mock seeded demo expenses, `loadSampleData()`, and `seedDefaultHouseholdData()`.
  - DuoSpend now starts with a completely clean, empty ledger for real personal receipts.
- [x] **5. Restored Member Card Left Border Accents**:
  - Restored distinct left border accents (`border-left: 4px solid #06b6d4` for Marc and `border-left: 4px solid #ec4899` for Rocio) with `!important` to prevent CSS glass-card styling overrides.
- [x] **6. High-Contrast White Font Color (#ffffff) in Light Mode**:
  - Enforced `#ffffff` font color (`!important`) across all key action buttons in light and dark mode:
    - `#btn-add-expense-manual`
    - `#btn-scan-receipt`
    - `#btn-settle-up`
    - `#btn-reset-filters`
- [x] **7. Active Chart Mode Button White Text (#ffffff)**:
  - Enforced `#ffffff` font color on selected and highlighted chart mode buttons in `#chart-mode-toggle-group`.
- [x] **8. Temporarily Hidden Settlement Card**:
  - Hidden `#settlement-card` for the moment and adjusted the hero KPI grid to a balanced 3-column layout (`Total Spend`, `Marc Paid`, `Rocio Paid`).
- [x] **9. Version Control**: Bumped codebase and documentation to `v0.07`.

---

## Version v0.06 (Released November 2026)

### Key Improvements & Enhancements:
- [x] **1. Inline Header & Hamburger Menu**: Re-anchored `#hamburger-menu-wrapper` inline with `#brand-logo-section` on the right with proper spacing and padding matching the main content cards. Added mobile hamburger button (`#btn-hamburger-menu-mobile`) inline with the brand logo.
- [x] **2. Real Client-Side Receipt OCR (Tesseract.js & Smart Parser)**: Replaced random data generation with **real on-device OCR** powered by Tesseract.js. Added smart regex parsing for merchant, total amount, date, and category. Added scanning progress overlay and form thumbnail preview.
- [x] **3. Removed Duplicate Subheading**: Deleted `#subheading-ledger-desc` ("Search expenses.").
- [x] **4. High-Contrast Drawer Button Design & Light/Dark Theming**: Replicated `#btn-theme-toggle` styling across all drawer buttons in both Dark and Light modes. Added `invoiceToJSON()` export utility.
- [x] **5. Streamlined Drawer Account Header**: Removed bulky header text, leaving a sleek status badge.
- [x] **6. Simplified Theme Mode Text**: `#text-theme-mode` now displays exclusively `"Light Mode"` and `"Dark Mode"`.
- [x] **7. Google Account Status Clarification**: Clarified interactive prototype state and provided roadmap for GIS / Firebase Auth.
- [x] **8. Intuitive Full-Row Receipt Viewer**: Removed standalone icon; entire ledger rows are now clickable to view receipts with `event.stopPropagation()` on edit/delete.
- [x] **9. Version Control**: Updated codebase to `v0.06`.

---

## Version v0.05 (Released November 2026)

- [x] Form Field `<label>` associations resolved across all 13 forms and modals to eliminate 10+ browser DevTools / WCAG accessibility issues.
- [x] Version control bump to `v0.05`.

---

## Version v0.04 (Released November 2026)

- [x] Android Studio WebView optimization and mobile meta tags.
- [x] Current calendar month default view (clears visual ledger from 1st of each month with historic month dropdown).
- [x] Right-side drawer menu layout (75% width, 25% blurred backdrop).
- [x] Right-padding on select chevron down arrows.
- [x] Streamlined expense categories (Food Shopping, Eating Out, Fuel, Clothes, Other).
- [x] Settle Up modal and payment logging.
- [x] Dynamic member badges (MB, RJ, EB).
- [x] Default category bar chart with interactive tap breakdown.

---

## Version v0.03 (Released November 2026)

- [x] Git repository initialization and remote sync.
- [x] Direct device camera photo capture on Scan button.
- [x] Main file renamed to `duospend.html`.
- [x] JSON data import with schema validation.
- [x] Multi-currency support (EUR € default).
- [x] Spanish (Castellano) language switcher with SVG flags and persistence.

---

## Version v0.02 (Released November 2026)

- [x] Semantic kebab-case renaming of all HTML IDs and container elements.
- [x] Added hamburger menu, fullscreen toggle, and credits to Marc Bailey.

---

## Version v0.01 (Initial Prototype)

- [x] Initial split-expense calculator with receipt simulation and Chart.js visualization.

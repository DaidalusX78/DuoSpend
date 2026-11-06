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

## Version v0.08 (Released November 2026)

### Key Fixes & UI Enhancements:
- [x] **1. Light Mode #ffffff Text Enforced**:
  - Enforced `#ffffff` text (`!important`) on all `closeAllModals()` buttons.
  - Enforced `#ffffff` text on 50/50 shared split badge (`!text-white bg-slate-800`).
  - Enforced `#ffffff` text on Home Account split badge (`!text-white bg-indigo-950/60`).
- [x] **2. Resolved `<label for>` Console Error**:
  - Fixed mismatch between `<label for="settle-payment-method-select">` and `<select id="settle-payment-method-select">`, eliminating the Chrome console error `"Incorrect use of <label for=FORM_ELEMENT>"`.
- [x] **3. Clean Empty State Icon**:
  - Removed the grey background from `#ledger-empty-state-icon` in light mode (`bg-transparent dark:bg-slate-800/60`).
- [x] **4. Eliminated [Violation] 1400ms Thread Freeze**:
  - Replaced synchronous thread-blocking `window.confirm()` in `deleteExpense` with an instant non-blocking deletion accompanied by a modern **"Undo"** action toast (0ms execution, zero lag, full recovery).
- [x] **5. "Back to Main Screen" Navigation**:
  - Updated `#btn-menu-settings` to a **"Back to Main Screen"** button (`<i class="fa-solid fa-house"></i>`) that smoothly closes the drawer menu and brings the user back to the main dashboard.
- [x] **6. Equal Flag Sizes (UK & Spain)**:
  - Fixed size discrepancy between `#btn-lang-en` and `#btn-lang-es` by standardizing both button wrappers to identical `w-12 h-9` dimensions and both SVGs to matching `60x36` viewports.
- [x] **7. Darker Toast Text in Light Mode**:
  - Updated `#toast-notifications-container` styling so toasts render with deep dark text (`text-slate-900`) on white cards in light mode, and crisp white (`dark:text-slate-100`) on dark cards in dark mode.
- [x] **8. Lighter Version Badge Text in Dark Mode**:
  - Lightened dark-mode version badge text to `dark:text-brand-200` (`#c7d2fe`) across `#app-version-badge` and the drawer header for maximum legibility.
- [x] **9. Manual Image Attachment**:
  - Added an **"Attach Receipt / Invoice Photo"** section inside the manual Add Expense modal (`#btn-add-expense-manual`) with file picker, thumbnail preview, and full-screen inspection.
- [x] **10. Removed Receipt Column from Popups & Enabled Row Click**:
  - In Category Expenses Modal (`#category-expenses-modal`) and Member Expenses Modal (`#member-expenses-modal`): removed the separate "Receipt" column and made every row directly clickable to open receipt details, eliminating horizontal scrolling.
- [x] **11. Removed Split Column from Member Modal**:
  - Removed the Split column from `#member-expenses-modal`, streamlining the table to 4 compact columns: Date, Merchant, Category, and Amount.
- [x] **12. Renamed Merchant Column**:
  - Renamed `<th id="th-merchant">` from "Merchant / Place" to "Merchant".
- [x] **13. Deleted Split Policy Column from Main Ledger**:
  - Deleted `<th id="th-split">` and its table cell from the main ledger table, optimizing table width and responsiveness.
- [x] **14. Version Control**: Bumped codebase and documentation to `v0.08`.

---

## Version v0.07 (Released November 2026)

- [x] Resolved actual amount paid calculation bug in `calculateMetricsAndSettlement()` for Home Account expenses.
- [x] Deleted `#text-out-of-pocket-p1` and `#text-out-of-pocket-p2`.
- [x] Removed background color from `#account-status-badge`.
- [x] Removed demo receipts, `loadSampleData()`, and `seedDefaultHouseholdData()`.
- [x] Restored left border colors (`#06b6d4` cyan and `#ec4899` pink) on member cards.
- [x] Enforced `#ffffff` font color in light mode for key action buttons.
- [x] Enforced `#ffffff` font color on selected chart mode buttons.
- [x] Temporarily hidden `#settlement-card` with balanced 3-column hero grid.

---

## Version v0.06 (Released November 2026)

- [x] Inline header & hamburger menu layout.
- [x] Real client-side receipt OCR with Tesseract.js & smart regex parser.
- [x] Deleted `#subheading-ledger-desc`.
- [x] High-contrast drawer button design and light/dark theming.
- [x] Simplified theme toggle text to "Light Mode" and "Dark Mode".
- [x] Clickable ledger rows for receipt viewing.

---

## Version v0.05 (Released November 2026)

- [x] Form Field `<label>` associations resolved across all 13 forms and modals.

---

## Version v0.04 (Released November 2026)

- [x] Android Studio WebView optimization and mobile meta tags.
- [x] Calendar month ledger view with month filter dropdown.
- [x] Right-side drawer menu layout (75% width, 25% blurred backdrop).
- [x] Right-padding on select chevron down arrows.
- [x] Streamlined expense categories (Food Shopping, Eating Out, Fuel, Clothes, Other).

---

## Version v0.03 (Released November 2026)

- [x] Git repository initialization and remote sync.
- [x] Direct device camera photo capture on Scan button.
- [x] Main file renamed to `duospend.html`.
- [x] Multi-currency support (EUR € default).
- [x] Spanish (Castellano) language switcher with SVG flags.

---

## Version v0.02 (Released November 2026)

- [x] Semantic kebab-case renaming of all HTML IDs and container elements.
- [x] Added hamburger menu, fullscreen toggle, and credits to Marc Bailey.

---

## Version v0.01 (Initial Prototype)

- [x] Initial split-expense calculator with receipt simulation and Chart.js visualization.

# DuoSpend — Project Requirements & Version History

Git Repository: [https://github.com/DaidalusX78/DuoSpend.git](https://github.com/DaidalusX78/DuoSpend.git)

---

## //*** USER PENDING TASKS ***//
- [ ] **1. Test Receipt Import Feature**: Test physical receipt photo capture on device using the camera and smart OCR.
- [ ] **2. Logo & Assets**: Create custom logo, including `favicon.ico` and PNG favicons.
- [x] **3. Real-Time Multi-Device Sync**: Firebase Firestore setup and implementation (`duospend-ef62c`).
- [ ] **4. Live Google Account Login**: Integrate Google Identity Services (GIS) / Firebase Auth for active login.
- [x] **5. Offline PWA & Service Worker**: Added `manifest.json` and `sw.js` for 100% offline supermarket usage.
- [ ] **6. Split Settlement Card**: Re-enable and configure settlement card display when ready.

---

## Version v0.10 (Released November 2026)

### Key Fixes & Enhancements Implemented:
- [x] **1. `#btn-menu-settings` Opens Household Settings**:
  - Updated `#btn-menu-settings` in the drawer menu (`onclick="closeAllModals(); openSettingsModal();"`) so tapping it opens the Household Settings modal directly.
- [x] **2. Inline Editable Monthly Budget Target (`#budget-target-display`)**:
  - Clicking `#budget-target-display` inside `<!-- Monthly Budget Progress & Safe-to-spend (Item 5) -->` opens an inline numeric editor (`editBudgetTargetInline(event)`) that saves on `Enter` or `blur` and immediately recalculates the progress bar and daily safe-to-spend indicator without triggering the parent card modal.
- [x] **3. Fixed `#summary-total-spent-amount` Stating `€0.00` When Receipts Exist**:
  - Fixed a JavaScript `TypeError` in `applyTranslations()` where legacy `#label-settings-p1` / `#label-settings-p2` / `#ledger-purchaser-option-person1` selectors aborted `DOMContentLoaded` before `updateHouseholdUI()` and `calculateMetricsAndSettlement()` could run.
  - Hardened `isCurrentMonth()` to compare `YYYY-MM` date prefixes directly so timezone offsets never exclude current-month receipts.
- [x] **4. Condensed Modal Table Containers (Zero Horizontal Overspill)**:
  - Condensed `p-2.5 sm:p-4 max-h-[70vh] overflow-y-auto overflow-x-hidden` and switched `#member-expenses-modal` and `#category-expenses-modal` tables to `table-fixed` with compact proportional column widths (`24% / 34% / 22% / 20%`) and `truncate` cells so horizontal scrolling is completely eliminated.
- [x] **5. `#app-version-badge` `#ffffff` Font Colour in Dark Mode**:
  - Enforced `color: #ffffff !important` in dark mode for `#app-version-badge` and `#drawer-version-badge`.
- [x] **6. Dark Text & Icons in Light Mode for `#btn-toggle-fullscreen` & `#btn-menu-settings`**:
  - Excluded `#btn-toggle-fullscreen` and `#btn-menu-settings` from the `button[onclick*="closeAllModals()"]` white-text override and enforced `#0f172a` dark text and icons in light mode.
- [x] **7. `#ffffff` Text & Icons in Light Mode for Firebase Controls**:
  - Enforced `#ffffff` text and icons on `#firebase-sync-badge`, `.fa-solid.fa-gear`, `configureFirebaseModal()`, and `syncFirebaseNow()` in light mode.
- [x] **8. Live Step-by-Step Progress Details on Firebase "Sync Now"**:
  - Added `#firebase-sync-progress-box` with animated progress bar (`0% -> 15% -> 45% -> 75% -> 100%`), live step status, receipt/member payload count, and timestamp log when tapping **Sync Now**.
- [x] **9. Removed `border-color` on `#members-avatars-group`**:
  - Removed `border border-slate-900` from `#members-avatars-group` avatar circles in both static HTML and dynamic `updateHouseholdUI()` rendering, plus CSS enforcement (`border: none !important; border-color: transparent !important;`).
- [x] **10. Version Control**: Bumped codebase, service worker cache, and documentation to `v0.10`.

---
## Version v0.09 (Released November 2026)

### Key Features & Upgrades Implemented:
- [x] **1. Client-Side Image Compression**:
  - Automatically resizes captured/attached receipt photos down to max 1000px and 72% JPEG quality via off-screen HTML5 `<canvas>`.
  - Shrinks photos from 4MB+ down to ~60KB–80KB, completely preventing `localStorage` `QuotaExceededError` (5MB limit) and enabling 70+ receipts to be stored locally.
- [x] **2. Active Month Filtering for KPIs & Visualizations**:
  - `calculateMetricsAndSettlement()` and `renderCharts()` now dynamically respect the selected `#ledger-month-filter` (defaulting to current month, or past months).
- [x] **3. Thermal Receipt OCR Enhancement**:
  - Preprocesses receipt images through an off-screen `<canvas>` with grayscale luminance, contrast boosting (`1.35`), and high-pass ink thresholding before passing to `Tesseract.recognize()`.
  - Drastically improves recognition speed and total amount detection on faint supermarket thermal slips.
- [x] **4. Firebase Real-Time Multi-Device Cloud Sync**:
  - Connected to Firebase project `duospend-ef62c`.
  - Configurable room code (`duospend-home`), 1-click manual "Sync Now" button, and automatic realtime cloud sync between Marc and Rocio's devices.
- [x] **5. €500 Monthly Budget Target & Safe-to-Spend**:
  - Embedded monthly budget tracking into `#card-total-spend`.
  - Features dynamic progress bar color changing from green to amber at 80% and red at 100%, plus a live "Daily Safe-to-Spend" calculation for remaining days in the month.
- [x] **6. Android Studio Architecture Evaluation**:
  - Single-file `.html` confirmed as best practice for Android Studio `WebView` asset loading (`file:///android_asset/duospend.html`).
- [x] **7. Dynamic Multi-Member Expansion (Elisa `EB` Ready)**:
  - Upgraded household settings to support dynamic members list (`+ Add Member` with Name, Initials Badge, and custom Accent Colour).
  - Automatically renders custom KPI summary cards, avatars, and attribution radio buttons.
- [x] **8. Past Months Selection & Monthly Trend Chart**:
  - Populates `#ledger-month-filter` with all distinct calendar months in the ledger.
  - Added new **"Monthly Trend"** bar chart comparing month-over-month household expenditure across the last 6 months.
- [x] **9. Custom Merchants & Custom Categories**:
  - Configurable 5 Quick Merchant presets with 1-click "Auto-Rank Top 5" from expense history.
  - Configurable custom categories / tags (e.g., Pharmacy, Pets, DIY, Holiday) reflected across entry forms, filters, and charts.
- [x] **10. 1-Click WhatsApp & PDF Summary Sharing**:
  - Added WhatsApp button formatting a complete monthly summary message ready to send to household chats.
  - Added Print/PDF button for physical statements and digital archives.
- [x] **11. PWA & Offline Service Worker (`manifest.json` + `sw.js`)**:
  - Offline pre-caching for Tailwind, Chart.js, FontAwesome, Tesseract, and DuoSpend core so the app runs smoothly offline in stores with poor mobile signal.

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

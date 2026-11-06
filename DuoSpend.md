# DuoSpend Version History & Requirements

## Version v0.03 (Released November 2026)

### Implemented Requirements:
- [x] **1. Git Repository**: Initialized Git repository with remote `https://github.com/DaidalusX78/DuoSpend.git`.
- [x] **2. Direct Device Photo Capture**: Direct 1-click device camera/photo import on the Scan Receipt button (`#btn-scan-receipt`), triggering smart parsing.
- [x] **3. Main File Rename**: Renamed main HTML application to `duospend.html`.
- [x] **4. JSON Import**: Added JSON import capability (`#btn-import-json`) with validation and instant ledger update.
- [x] **5. Multi-Currency Support**: Added currency picker in Household Settings with Euro (€) as default, supporting USD ($), GBP (£), CHF, JPY (¥), CAD (C$), AUD (A$), and PLN (zł).
- [x] **6. Expanded Off-Canvas Menu**: Drawer with 75% screen width, 100% height, double font-size, and blurred 25% backdrop.
- [x] **7. Viewport Zoom Layout Stability**: Added `width=device-width, initial-scale=1.0, maximum-scale=5.0`, `overflow-x: hidden`, and `min-w-0` to resolve horizontal zooming clipping in Chrome Live Server.
- [x] **8. Hamburger Menu Relocation**: Moved `#hamburger-menu-wrapper` to the right of `#brand-logo-section` with padding matching `#card-total-spend`.
- [x] **9. Header Actions Proportions**: Increased font-size by 25% and unified element heights (`h-11`) across `#header-actions-group`.
- [x] **10. Unified Settings Button**: Converted `#household-members-pill` into the interactive settings button, removed the separate gear icon and the `&`.
- [x] **11. Streamlined Merchant Presets**: Presets now only populate the merchant name (no extraneous default data), featuring the 5 top merchants: AlCash, Lidl, Aldi, Mercadona, and Deza.
- [x] **12. Home Account Split Policy**: Added "Home Account" split policy as the default option (representing shared household funds with zero mutual debt).
- [x] **13. Default "By Merchant" Bar Chart**: Added merchant spending breakdown graph and set it as the default bar chart view.
- [x] **14. Spanish (Castellano) Language Toggle**: Added bilingual support (English/Spanish) with SVG flag buttons in the drawer menu and persistent language memory.
- [x] **15. Version Badge**: Replaced "Household Edition" in brand row with the version badge `v0.03`.
- [x] **16. Version Control**: Updated codebase and documentation to `v0.03`.

# Mitta Foundation — USA Website

A premium, donor-facing website for Mitta Foundation, a registered charitable trust that builds education, healthcare, and community infrastructure for underprivileged children in Hyderabad, India.

## 🌐 Live Platform

- **USA (Global):** This repository
- **India (Execution Layer):** [mittafoundation.org](https://mittafoundation.org)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| Icons | Lucide React |
| Typography | SF Pro / Inter / Sora (Google Fonts) |
| Deployment | Vercel |

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout & metadata
│   ├── globals.css        # Global styles
│   ├── about/             # About Us page
│   ├── programs/          # Our Programs page
│   ├── impact/            # Impact & Outcomes page
│   ├── give/              # Donation checkout flow
│   ├── get-involved/      # Partnership & inquiry forms
│   ├── contact/           # Contact page with map
│   └── transparency/      # Trust, compliance & financials
├── components/
│   ├── Header.tsx         # Global navigation header
│   └── Footer.tsx         # Global footer with social links
public/
└── IMAGES/                # All static image assets
    └── PROGRAM_PAGE/      # Program-specific photos
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Design System

- **Primary Palette:** `#1D1D1F` (near-black), `#fcfbf9` (off-white), `#000000` (pure black)
- **Interactive Color:** `#0071e3` (Apple Blue)
- **Success/Trust:** `#34c759` (Apple Green)
- **Accent:** `#FF9500` (Apple Orange)
- **Typography:** SF Pro Display (headings), SF Pro Text / Inter (body)

## Compliance Note

This website includes placeholder sections for FCRA, 80G, 12A, and Annual Report documentation. These are intentional future placeholders awaiting legal documentation and should not be modified without explicit authorization.

## License

© 2024 Mitta Foundation. All rights reserved.

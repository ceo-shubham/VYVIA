# VYVIA — pH Balancing Protective Layer
### The World's First Bio-Engineered Menstrual Acid-Mantle Defense System
**Patent File By Anshika & Shubham**

---

## 🌟 Overview & Scientific Breakthrough

Conventional sanitary pads only focus on liquid absorption and artificial fragrances, completely ignoring the fundamental biochemical mismatch that causes period rashes:

1. **Alkaline Menstrual Influx:** Fresh menstrual blood has an alkaline pH of **7.3 – 7.6**.
2. **Vulvar Acid Mantle Breakdown:** Delicate vulvar skin requires an acidic environment of **pH 4.2 – 5.5** to maintain lipid barrier integrity and suppress harmful pathogens.
3. **The Damage:** Trapping pH 7.4 fluid against skin destroys the acid mantle, activates tissue-digesting enzymes (matrix metalloproteinases / proteases), and causes anaerobic odor bacteria to bloom.

### The VYVIA Innovation (Patent-Pending)
VYVIA integrates a self-regulating organic acid-salt buffer formulation coating that dynamically reacts with menstrual fluid upon absorption, bringing the contact interface to a soothing **pH 4.5 – 5.2**:
- **Light Flow / Spotting:** Pad Buffer pH 4.2–4.5 → Skin Interface 4.5–5.0 (Zero stinging, stops micro-tears)
- **Medium / Normal Flow:** Pad Buffer pH 4.5–4.8 → Skin Interface 4.8–5.2 (Bacterial growth stopped, odor eliminated)
- **Heavy Flow / Peak:** Pad Buffer pH 4.8–5.0 (High Cap) → Skin Interface 5.0–5.5 (MMP enzymes frozen, maceration blocked)

---

## 🧪 The 4-Pillar Defense Matrix (From Patent Page 4)

1. **Chemical Irritation & Rashes (90–95% Control by pH):** Intact acid mantle preserves lipid barrier + 100% unbleached organic chlorine-free layer.
2. **Bacterial Growth & Odour (80–85% Control by pH):** Acidic medium renders odor-producing anaerobes dormant + natural zinc oxide & plant polyphenols.
3. **Enzymatic Maceration / Skin Peeling (80–85% Control by pH):** Acidic interface freezes proteases & MMP enzymes + capillary wicking ADL pulls fluid away in <1.2 seconds.
4. **Mechanical Friction & Chafing (10–20% Control by healthy skin):** Ultra-soft micro-perforated bamboo & cornstarch non-woven silk eliminates physical friction.

---

## 🚀 Live Cloudflare Free Plan Deployment

This project is fully architected for **Cloudflare Pages** and **Cloudflare Pages Functions** under Cloudflare's **100% Free Plan** (unlimited bandwidth, free SSL, global edge CDN, and 100,000 serverless API requests per day).

### Method 1: Automatic Deployment via GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit of VYVIA Full Stack Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/vyvia.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Create application** → **Pages** tab.
   - Click **Connect to Git** and pick your `vyvia` repository.

3. **Configure Build Settings:**
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - Click **Save and Deploy**.
   - Your site will be live across 300+ edge locations in ~30 seconds with a free `.pages.dev` domain and custom domain support!

---

### Method 2: Instant 1-Command CLI Deployment (Wrangler)

You can also deploy directly from your local machine using Cloudflare's Wrangler CLI:

```bash
# 1. Build the production application
npm run build

# 2. Deploy directly to Cloudflare Pages Free Tier
npx wrangler pages deploy dist --project-name=vyvia
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```
d:/VYVIA/
├── functions/                     # Cloudflare Pages Serverless Edge API
│   └── api/
│       ├── waitlist.ts            # Waitlist & sample reservation API
│       └── contact.ts             # Clinical inquiries API
├── public/
│   ├── favicon.svg                # Branded SVG Favicon
│   ├── _headers                   # Cloudflare edge security & caching headers
│   └── _redirects                 # SPA client-side routing fallback for Cloudflare
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Responsive header with cart & Cloudflare guide
│   │   ├── Hero.tsx               # High-impact editorial hero with live comparison
│   │   ├── PhSimulator.tsx        # Interactive laboratory simulator (Pages 2 & 3)
│   │   ├── ScienceMatrix.tsx      # 4-Pillar Problem-Solution Matrix (Page 4)
│   │   ├── PadLayersVisualizer.tsx# 5-Layer exploded biomaterial cross-section
│   │   ├── AssessmentQuiz.tsx     # 3-Step Vulvar Diagnostic & Risk Calculator
│   │   ├── ProductCatalog.tsx     # 4 Products with buffer chemistry specs
│   │   ├── PatentWhitepaper.tsx   # Formal patent tables & Anshika/Shubham statement
│   │   ├── PreOrderModal.tsx      # Free sample reservation modal with edge API
│   │   ├── CartDrawer.tsx         # Slide-out pre-order cart & promo code system
│   │   ├── CloudflareDeployGuideModal.tsx # Built-in interactive deployment guide
│   │   └── Footer.tsx             # Patent citations & Cloudflare edge indicator
│   ├── data/
│   │   └── scienceData.ts         # Complete clinical data from patent document
│   ├── types/
│   │   └── index.ts               # TypeScript data contracts
│   ├── App.tsx                    # Main App wrapper
│   ├── index.css                  # Tailwind styles & theme variables
│   └── main.tsx                   # Entry point
├── tailwind.config.js             # Luxury biomedical color palette & typography
├── wrangler.toml                  # Cloudflare Pages configuration
├── package.json
└── tsconfig.json
```

---

## ⚖️ Citation & Intellectual Property
- **Invention Title:** VYVIA — pH Balancing Protective Layer
- **Inventors:** Anshika & Shubham
- **Patent Documentation Date:** 2026

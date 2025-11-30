

---

# **Stay Haven — Airbnb Rental Platform**

**Live Demo**
[text](src/components)
🔗 [https://stayhaven-demo.vercel.app](https://stayhaven-demo.vercel.app)

---

# **Project Overview**

**Stay Haven** is a modern, responsive web platform built with **React, Vite, and Tailwind CSS**, crafted to showcase premium short-term rentals, unique stays, and guest-focused hospitality services.

The project emphasizes:

* Welcoming and professional interface
* Reusable, scalable component architecture
* High-quality property imagery
* Smooth responsiveness across all devices
* Strong brand identity and visual harmony

---

# **Brand Identity**

## 🎨 **Color System**

| Role      | Color          | HEX     |
| --------- | -------------- | ------- |
| Primary   | Haven Teal     | #14B8A6 |
| Secondary | Soft Cream     | #FFF8E7 |
| Accent    | Midnight Slate | #1E293B |

**Rationale:**
Teal creates calm and trust, cream offers warmth and hospitality, and slate adds strong contrast.

---

## 🔤 **Typography**

| Category  | Style              | Reasoning                             |
| --------- | ------------------ | ------------------------------------- |
| Headings  | Bold, open spacing | Clean and modern hospitality branding |
| Body Text | Neutral slate-gray | High readability across devices       |

---

# **Design Decisions**

* Mobile-first design approach
* Hero section featuring signature Stay Haven properties
* Reusable teal CTA buttons
* Soft glass-effect stay cards
* Tailored breakpoints for real device sizes
* Clean spacing and consistent layout rules

---

# **Component Architecture**

All components are located in:

```
src/components/
```

## **Core Components**

* Header.jsx
* Hero.jsx
* FeaturedStays.jsx
* Properties.jsx
* Amenities.jsx
* Testimonials.jsx
* Newsletter.jsx
* Footer.jsx
* Button.jsx
* StayCard.jsx

---

## **Reusability Strategy**

Buttons, cards, and layout containers are built as reusable components to ensure long-term scalability and consistent styling.

---

# **Performance Optimizations**

* Compressed and optimized images
* Removed unused imports and dead code
* Lazy-loaded heavy UI sections
* Tailwind JIT generates minimal CSS
* Cached assets for faster reloads

---

# **Image Credits**

(Add proper attribution after confirming your sources)

* Property imagery —
* Background assets —

---

# **Installation & Setup**

```
# Clone the repository
git clone <your-repo-url>

# Enter project folder
cd stay-haven

# Install dependencies
npm install

# Start development server
npm run dev
```

---

# **Technologies Used**

| Technology  | Version | Purpose                |
| ----------- | ------- | ---------------------- |
| React       | 18+     | UI library             |
| Vite        | Latest  | Build tool / bundler   |
| TailwindCSS | 3+      | Styling                |
| ESLint      | Latest  | Linting / code quality |
| JavaScript  | ES6+    | App logic              |

---

# **Challenges & Solutions**

### 1. Case-Sensitivity Import Errors

Import paths mismatched between lowercase and uppercase.
✔ **Solution:** Removed incorrect files + reset Vite cache.

### 2. Mobile Navigation Overlap

Navigation overlapped on small devices.
✔ **Solution:** Adjusted padding, flex configuration, and breakpoints.

### 3. Hero Image Distortion

Background image stretched incorrectly.
✔ **Solution:** Replaced with HD hero photo + Tailwind background utilities.

---

# **Future Improvements**

* Framer Motion animations
* Backend API integration
* User authentication for hosts
* Dark Mode theme
* Deployment on Vercel/Netlify
* Functional booking + newsletter backend

---

# **Screenshots**

(Add actual screenshots inside `/screenshots` folder once ready)

Recommended structure:

```
/screenshots
hero-lg.png
properties-md.png
amenities-sm.png
lighthouse-report.png
```

---

# 📸 **Screenshots**

### 🖥️ Desktop View

<img width="1047" height="932" alt="Screenshot 2025-11-23 102639" src="https://github.com/user-attachments/assets/a8783cec-fabf-4b47-99bf-e50f89a0261d" />

### 📱 Mobile View

<img width="514" height="953" alt="Screenshot 2025-11-23 102603" src="https://github.com/user-attachments/assets/424b15db-faa1-431b-8cbc-86179d51ebb3" />


### 💻 Tablet View

<img width="801" height="489" alt="v" src="https://github.com/user-attachments/assets/fe573dc4-133a-4fef-a167-70bc5b1f9df6" />


---


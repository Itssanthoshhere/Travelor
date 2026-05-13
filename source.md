# Travelor — Initial Project Setup

## Create Vite App

```bash
npm create vite@latest ./
```

Select:

- Framework → React
- Variant → JavaScript / TypeScript

---

# Tailwind CSS Setup

## Install Tailwind

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## Configure Vite

Update `vite.config.js` / `vite.config.ts`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

---

## Add Tailwind Import

Inside `src/index.css`

```css
@import "tailwindcss";
```

---

# Routing Setup

## Install React Router

```bash
npm install react-router-dom
```

---

# Icons Setup

## Install Iconify

```bash
npm install --save-dev @iconify/react
```

Example:

```jsx
import { Icon } from "@iconify/react";

<Icon icon="mdi:airplane" />;
```

---

# Swiper Slider Setup

## Install Swiper

```bash
npm install swiper
```

Useful for:

- Hero sliders
- Testimonials
- Destinations
- Travel packages

---

# Animated Counter Setup

## Install React CountUp

```bash
npm install react-countup
```

Example:

```jsx
import CountUp from "react-countup";

<CountUp end={5000} duration={3} />;
```

---

# Start Development Server

```bash
npm run dev
```

---

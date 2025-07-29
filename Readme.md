# Infinite Pages

**Infinite Pages** is a dynamic, server-rendered web platform built with [Next.js](https://nextjs.org/) (App Router) and powered by [Strapi](https://strapi.io/) headless CMS using GraphQL. It allows content editors to build and manage an unlimited number of pages—without any developer intervention—as long as they reuse the predefined UI components.

---

## ✨ Features

- ⚡ Built with Next.js 14+ (App Router & SSR)
- 🧩 Component-based layout system
- 🌍 Multi-language & i18n-ready
- 🔌 GraphQL integration with Apollo Client
- 🧠 State management via Zustand
- 🧪 Form management using Formik
- 📦 Supports deeply nested dynamic content from Strapi
- 🔄 Infinite scalable page structure based on CMS content
- 🌐 External & internal dynamic linking
- 🧱 Generator-based component scaffolding with Plop.js

---

## 🏗️ Tech Stack

| Layer         | Stack                             |
| ------------- | --------------------------------- |
| Frontend      | Next.js 14+, React 19, TypeScript |
| Backend       | Strapi CMS with GraphQL plugin    |
| Data Fetching | Apollo Client, Axios              |
| Styling       | Tailwind CSS                      |
| State         | Zustand                           |
| Utilities     | UUID, Swiper.js, Formik, Plop.js  |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18–22 (⚠️ Strapi doesn’t support v23+)
- npm or yarn
- nvm (recommended)

### Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/infinite-pages.git
cd infinite-pages

# Set Node version
nvm use 22

# Install dependencies
cd client && npm install
cd ../server && npm install
```

---

## 🧪 Development

```bash
# Start the frontend (Next.js)
cd client
npm run dev

# In a new terminal tab, start the CMS (Strapi)
cd server
npm run develop
```

---

## 🧭 Folder Structure

```
infinite-pages/
├── client/        # Next.js frontend
└── server/        # Strapi backend
```

---

## 🌐 Internationalization (i18n)

- Supports multiple locales via Next.js built-in i18n routing
- Locale-based routing like `/en/about` or `/ar/من-نحن`
- Text direction (LTR/RTL) and layout adjust automatically

---

## 🔧 Customization

- Add new UI blocks via Plop.js generators
- Extend dynamic zones in Strapi to map to frontend components
- Content editors can compose new pages directly in Strapi UI

---

## 📄 License

MIT © 2025 [Hassan Mohamed](https://github.com/HassanMostafaa)

---

## 📬 Contact

For issues or feature requests:

- GitHub: [@hassanmohamed](https://github.com/HassanMostafaa)
- Email: [hassan.mostafa2251@gmail.com](mailto:hassan.mostafa2251@gmail.com)

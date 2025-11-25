# Mobile Projects Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS to showcase mobile application projects. Features a beautiful dark mode (default) with smooth transitions and animations.

## ✨ Features

- **Dark Mode by Default** - Toggle between dark and light themes with a smooth transition
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Project Showcase** - Display mobile projects with filtering by category
- **Smooth Scrolling** - Seamless navigation between sections
- **Modern UI** - Clean, professional design with gradient accents
- **Skills Display** - Animated progress bars showing technical proficiency
- **Contact Section** - Easy ways to get in touch with social links

## 🛠️ Built With

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio_updated.git
cd portfolio_updated
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Customization

### Update Project Data

Edit `src/data/projects.js` to add your own mobile projects:

```javascript
{
  id: 1,
  title: "Your App Name",
  description: "App description",
  category: "Category",
  techStack: ["Flutter", "Firebase"],
  features: ["Feature 1", "Feature 2"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  status: "Completed"
}
```

### Update Personal Information

- **Hero Section**: Edit `src/components/Hero.jsx` to update your introduction
- **About Section**: Edit `src/components/About.jsx` to update your bio and skills
- **Contact Info**: Edit `src/components/Contact.jsx` to update your email and social links
- **Footer**: Edit `src/components/Footer.jsx` to update copyright and links

### Customize Colors

The project uses Tailwind's color palette with blue and purple gradients. To customize:

1. Edit `tailwind.config.js` to add custom colors
2. Update gradient classes in components (e.g., `from-blue-600 to-purple-600`)

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 🌐 Deployment

This project can be deployed to:

- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop the `dist` folder
- **GitHub Pages** - Use `gh-pages` package
- **Any static hosting service**

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using React & Tailwind CSS

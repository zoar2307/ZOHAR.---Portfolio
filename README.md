# Zohar Portfolio

A modern, interactive portfolio website built with Next.js, featuring smooth animations, responsive design, and dynamic project showcases.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by GSAP and Framer Motion for fluid, engaging animations
- **Interactive Project Showcases**: Display your projects with live previews, screenshots, and detailed information
- **Animated Sections**: 
  - Hero section with floating interactive cubes
  - Scroll-triggered animated sentences with multiple scenes
  - Collapsible project information panels
- **Modern UI**: Beautiful gradient backgrounds, glassmorphism effects, and smooth transitions
- **Performance Optimized**: Built with Next.js 15 for optimal performance and SEO

## 🚀 Technologies Used

- **Framework**: Next.js 16.1.1
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Animations**: 
  - GSAP 3.13.0 (GreenSock Animation Platform)
  - Framer Motion 12.23.12
- **Icons**: Lucide React
- **Type Safety**: TypeScript 5

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ZOHAR.---Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── AnimatedSentence/    # Scroll-triggered animated sentences
│   │   │   ├── index.jsx        # Main component
│   │   │   ├── constants.js     # Animation constants
│   │   │   ├── Shapes.jsx       # SVG shapes for animations
│   │   │   ├── TextSection.jsx  # Reusable text section component
│   │   │   └── useAnimation.js  # GSAP animation hook
│   │   ├── AiBoxScroll.jsx      # Collapsible info box
│   │   ├── EAESection.jsx       # Project showcase component
│   │   ├── Header.jsx           # Navigation header
│   │   ├── Hero.jsx             # Hero section with cubes
│   │   └── InformationCube.jsx  # Interactive floating cubes
│   ├── data/
│   │   └── projects.js          # Project data configuration
│   ├── globals.css              # Global styles
│   ├── layout.jsx               # Root layout
│   └── page.jsx                 # Main page component
└── public/
    └── images/                  # Static images (add screenshots here)
```

## 📝 Adding Projects

To add a new project, edit `/src/app/data/projects.js`:

```javascript
{
  siteUrl: "https://your-project-url.com",
  siteTitle: "Your Project Name",
  siteImage: "/images/your-project-screenshot.png", // Optional: screenshot for mobile
  projectInfo: {
    title: "Your Project Name",
    description: "A brief description of your project...",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    techStack: [
      "React",
      "Node.js",
      "TypeScript"
    ],
    githubUrl: "https://github.com/yourusername/your-repo",
    liveUrl: "https://your-project-url.com"
  }
}
```

### Adding Screenshots

1. Create an `images` folder in the `public` directory if it doesn't exist
2. Add your project screenshot (recommended size: 1920x1080 or similar)
3. Update the `siteImage` path in your project data

## 🎨 Customization

### Changing Colors

Edit `/src/app/globals.css` and component files to customize:
- Gradient backgrounds
- Text colors
- Accent colors
- Shadow effects

### Modifying Animations

- **GSAP Animations**: Edit `/src/app/components/AnimatedSentence/useAnimation.js`
- **Framer Motion**: Edit individual component files that use `motion.div`

### Responsive Breakpoints

The project uses Tailwind CSS breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📱 Features Breakdown

### AnimatedSentence Component
- Three-scene scroll animation with text reveals
- Floating SVG shapes that animate on scroll
- Smooth transitions between scenes
- Fully responsive overlay effects

### EAESection Component
- Interactive project previews with iframe support
- Information panel toggle button
- Mobile-optimized screenshot display
- Clickable project links

### Hero Section
- Floating interactive information cubes
- Responsive text sizing
- Smooth hover animations

## 🔧 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run update-readme` - Auto-update README with latest package versions

## 🤖 Auto-Update README

The project includes an automated README updater that:

- **Automatically updates package versions** in the README when dependencies change
- **Adds/updates timestamp** showing when the README was last updated
- **Runs automatically** via git pre-commit hook before each commit
- **GitHub Action** also updates README on pushes to master/main when `package.json` changes

### Manual Update

To manually update the README:

```bash
npm run update-readme
```

The script reads `package.json` and updates:
- Next.js version
- React version
- Tailwind CSS version
- GSAP version
- Framer Motion version
- TypeScript version
- Last updated timestamp

## 📅 Last Updated

**2026-01-08** at 11:17:13

## 📄 License

This project is private and personal portfolio use only.

## 👤 Author

**Zohar**

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Animations powered by [GSAP](https://greensock.com/gsap/) and [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Note**: Make sure to add your project screenshots to `public/images/` and update the `siteImage` paths in your project data for the mobile preview to work correctly.

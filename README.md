# Isaac Kalambo - Portfolio

A modern, responsive portfolio website showcasing my skills as a Full Stack Developer. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring interactive components and a beautiful UI.

## 🚀 Live Demo

Visit the live portfolio at: [Your Portfolio URL]

## 👨‍💻 About

I'm Isaac Kalambo, a passionate Full Stack Developer with expertise in modern web technologies. This portfolio showcases my projects, skills, and provides multiple ways for potential clients and collaborators to get in touch.

**Contact Information:**
- **Email:** kalamboisaac405@gmail.com
- **LinkedIn:** [Isaac Kalambo](https://www.linkedin.com/in/isaac-kalambo-973bba339/)
- **GitHub:** [IsaacKalambo22](https://github.com/IsaacKalambo22)
- **Twitter:** [@IsaacKalam44251](https://x.com/IsaacKalam44251)

## ✨ Features

### 🏠 Hero Section
- Professional profile image and introduction
- Dynamic role display: "Full Stack Developer"
- Social media links with hover effects
- Call-to-action buttons

### 👤 About Section
- Detailed personal and professional information
- Skills overview and experience highlights
- Professional profile image

### 💼 Projects Showcase
- **E-Commerce Platform** - Full-stack solution with Next.js, TypeScript, Stripe
- **Task Management App** - Collaborative app with real-time updates
- **Weather Dashboard** - Responsive dashboard with location-based forecasts
- Each project includes: description, tech stack, GitHub links, and live demos

### 🛠️ Skills Section
- **Frontend:** React, Next.js, TypeScript, Tailwind CSS, JavaScript
- **Backend:** Node.js, Express, Python, FastAPI, REST APIs
- **Database:** PostgreSQL, MongoDB, Prisma, Supabase
- **Tools & Others:** Git, Docker, AWS, Vercel, Figma

### 📞 Enhanced Contact Section
#### ✅ Interactive Features:
1. **Clickable Email Link**
   - Direct email client integration
   - Hover effects for better UX
   - Pre-filled recipient address

2. **Live Location Sharing**
   - "Share My Location" button
   - Browser geolocation API integration
   - Google Maps link generation
   - Clipboard copy functionality
   - Proper error handling for permissions

3. **Smart Contact Form**
   - Form validation with required fields
   - Email client integration (no backend needed)
   - Pre-filled email with form data
   - Loading states and user feedback
   - Auto-reset after submission
   - Professional email formatting

### 🎨 UI/UX Features
- Fully responsive design (mobile-first approach)
- Dark/light theme support
- Smooth animations with Framer Motion
- Interactive hover effects
- Modern glassmorphism design elements
- Accessible navigation with keyboard support

## 🛠️ Tech Stack

### Core Technologies
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React, Heroicons
- **Animations:** Framer Motion

### Development Tools
- **Package Manager:** pnpm
- **Linting:** ESLint with Next.js config
- **Build Tool:** Turbopack (Next.js)
- **Version Control:** Git

### Key Dependencies
```json
{
  "next": "15.4.5",
  "react": "19.1.0",
  "typescript": "^5",
  "tailwindcss": "^4",
  "framer-motion": "^12.23.12",
  "lucide-react": "^0.536.0",
  "@radix-ui/react-*": "Latest versions"
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/IsaacKalambo22/my-portifolio.git
cd my-portifolio
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Run the development server**
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Available Scripts

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 📁 Project Structure

```
my-portifolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── projects/          # Projects page
│   │   ├── skills/            # Skills page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── common/            # Reusable components
│   │   │   ├── Hero.tsx       # Hero section
│   │   │   ├── About.tsx      # About section
│   │   │   ├── Projects.tsx   # Projects showcase
│   │   │   ├── Skills.tsx     # Skills section
│   │   │   ├── Contact.tsx    # Enhanced contact form
│   │   │   ├── Navigation.tsx # Navigation bar
│   │   │   └── Footer.tsx     # Footer
│   │   └── ui/                # UI primitives
│   └── lib/
│       ├── constants/         # App constants and data
│       │   ├── data.ts        # Personal info, projects, skills
│       │   └── index.ts       # Exports
│       └── utils.ts           # Utility functions
├── public/
│   ├── images/                # Profile and project images
│   └── *.svg                  # Icons and assets
└── Configuration files
```

## 🎨 Customization

### Personal Information
Update your details in `src/lib/constants/data.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  email: "your.email@example.com",
  bio: "Your bio...",
  // ... other details
};
```

### Projects
Add your projects in the same file:
```typescript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    technologies: ["Tech1", "Tech2"],
    github: "GitHub URL",
    demo: "Live demo URL",
    image: "/images/project.jpg",
  },
  // ... more projects
];
```

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind config for theme customization
- Components use Tailwind utility classes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px  
- **Desktop:** > 1024px

## 🔧 Contact Form Integration

The contact form uses a client-side email integration approach:
- No backend server required
- Opens user's default email client
- Pre-fills recipient, subject, and message
- Includes form validation and user feedback
- Works across all devices and email clients

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The portfolio can be deployed on:
- Netlify
- AWS Amplify
- Railway
- Any platform supporting Next.js

## 📈 Performance Features

- **Next.js 15** with App Router for optimal performance
- **Turbopack** for faster development builds
- **Image optimization** with Next.js Image component
- **Font optimization** with next/font
- **Code splitting** and lazy loading
- **SEO optimization** with metadata API

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Feel free to reach out for collaborations or opportunities:

- **Email:** [kalamboisaac405@gmail.com](mailto:kalamboisaac405@gmail.com)
- **LinkedIn:** [Isaac Kalambo](https://www.linkedin.com/in/isaac-kalambo-973bba339/)
- **GitHub:** [IsaacKalambo22](https://github.com/IsaacKalambo22)

---

**Built with ❤️ by Isaac Kalambo**
# Isaac Alex Kalambo - Portfolio

A modern, professional portfolio website showcasing my work as a Software Developer & IT Specialist. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring real projects, comprehensive experience details, and a polished UI.

## 🚀 Live Demo

Visit the live portfolio at: [https://my-portifolio-eight-sepia.vercel.app/](https://my-portifolio-eight-sepia.vercel.app/)

## 👨‍💻 About

I'm Isaac Alex Kalambo, a Software Developer & IT Specialist from Lilongwe, Malawi. Currently working at Infinity Technologies, I build web and mobile applications while managing HR operations. This portfolio showcases my real projects, professional experience, and technical expertise.

**Contact Information:**
- **Email:** kalamboisaac405@gmail.com
- **LinkedIn:** [Isaac Kalambo](https://www.linkedin.com/in/isaac-kalambo-973bba339/)
- **GitHub:** [IsaacKalambo22](https://github.com/IsaacKalambo22)
- **Twitter:** [@IsaacKalam44251](https://x.com/IsaacKalam44251)

## ✨ Features

### 🏠 Hero Section
- Professional profile image and introduction
- Dynamic role display: "Software Developer & IT Specialist"
- Social media links (Personal GitHub, Infinity Technologies, LinkedIn, Twitter)
- Call-to-action buttons

### 👤 About Section
- Professional overview and background
- **Experience Section** with detailed responsibilities:
  - Infinity Technologies (2023-Present): Software Development & HR
  - Lilongwe Girls Secondary School (2023): Teaching
- **Education Section**:
  - Bachelor of Education in Computer Sciences (University of Malawi, 2019-2025)
  - MSCE (Matandani Secondary School, 2018)

### 💼 Projects Showcase
- **PromptHub** - AI prompt sharing platform with Next.js, MongoDB
- **CarHub** - Car showcase website with Next.js, TypeScript
- **Job Finder App** - Flutter mobile app for job opportunities
- **Learning Progress Tracker** - Development progress tracking system
- Each project includes: description, tech stack, GitHub links

### 🛠️ Skills Section
- **Frontend Development:** HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind CSS
- **Mobile Development:** Flutter, Dart, React Native
- **Backend & Databases:** Node.js, MySQL, MongoDB, REST APIs, Firebase
- **Tools & Technologies:** Git & GitHub, VS Code, Vercel, Microsoft Office, Power BI
- **Professional Skills:** Software Debugging, Testing & QA, Project Management, HR Management

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
  location: "Your Location",
  // ... other details
};
```

### Experience & Education
Add your work experience and education:
```typescript
export const experience = [
  {
    id: 1,
    title: "Job Title",
    company: "Company Name",
    period: "2023 - Present",
    location: "City, Country",
    responsibilities: ["Responsibility 1", "Responsibility 2"]
  }
];

export const education = [
  {
    id: 1,
    degree: "Degree Name",
    institution: "University Name",
    period: "2019 - 2025",
    description: "Description..."
  }
];
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
    featured: true
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
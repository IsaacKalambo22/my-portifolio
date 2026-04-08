import { personalInfo, experience, education, projects } from '@/lib/constants';

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.role,
    "email": personalInfo.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": personalInfo.location
    },
    "url": "https://my-portifolio-eight-sepia.vercel.app/",
    "sameAs": [
      "https://github.com/IsaacKalambo22",
      "https://github.com/InfinityCodeMw",
      "https://www.linkedin.com/in/isaac-kalambo-973bba339/",
      "https://x.com/IsaacKalam44251"
    ],
    "description": personalInfo.bio,
    "knowsAbout": [
      "Software Development",
      "Web Development",
      "Mobile Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Flutter",
      "MySQL",
      "MongoDB"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Infinity Technologies",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lilongwe, Malawi"
      }
    },
    "alumniOf": education.map(edu => ({
      "@type": "EducationalOrganization",
      "name": edu.institution,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Malawi"
      }
    })),
    "hasOccupation": experience.map(exp => ({
      "@type": "Occupation",
      "name": exp.title,
      "description": exp.responsibilities.join(' '),
      "occupationLocation": {
        "@type": "Place",
        "name": exp.location
      },
      "worksFor": {
        "@type": "Organization",
        "name": exp.company
      }
    })),
    "creator": projects.map(project => ({
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.description,
      "url": project.demo,
      "programmingLanguage": project.technologies,
      "dateCreated": "2024"
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}

import { ArrowUpRight } from 'lucide-react';
import { type Certification } from '@/types/certification'; 
import Container from './Container'; 
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

interface CertificationsProps {
  items: Certification[];
  className?: string;
}

export function Certifications({ items}: CertificationsProps) {
  if (!items || items.length === 0) return null;

  return (
    <Reveal delay={0.1}>
      <Container id="certifications" className="mt-10">
        
        {/* Section Heading */}
        <div className="mb-8 px-4">
           <SectionHeading 
             subHeading="Featured"
             heading="Certifications" 
           />
        

        {/* List Section */}
        <div>
          {items.map((cert) => (
            <a 
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group block w-full touch-manipulation
                py-8 border-b border-neutral-200 dark:border-neutral-800 
                transition-colors duration-300
              "
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none',
              }}
            >
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-4">
                  {/* Logo Box */}
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                    <img 
                      src={cert.logoUrl} 
                      alt={cert.issuer} 
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col">
                    {/* Title with Underline Effect on Hover */}
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100 transition-colors group-hover:underline underline-offset-4 decoration-neutral-400">
                      {cert.title}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                      <span>@{cert.issuer}</span>
                      <span className="h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                {/* Arrow Icon */}
                <ArrowUpRight className="h-5 w-5 text-neutral-400 transition-transform group-hover:text-black dark:group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
        </div>

      </Container>
    </Reveal>
  );
}
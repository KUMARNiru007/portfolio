import { Card, CardContent} from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import reactIcon from "@/assets/react.svg"

const skills = [
  { name: "React", description: "A JavaScript library for building user interfaces", iconUrl: reactIcon },
  { name: "TypeScript", description: "A typed superset of JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/typescript.svg" },
  { name: "JavaScript", description: "A programming language for web development", iconUrl: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/javascript.svg" },
  { name: "Node.js", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine", iconUrl: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nodedotjs.svg" },
  { name: "HTML", description: "The standard markup language for creating web pages", iconUrl: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/html5.svg" },
  { name: "CSS", description: "A style sheet language used for describing the presentation of a document", iconUrl: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/css3.svg" },
  { name: "Git", description: "A distributed version control system", iconUrl: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/git.svg" },
  { name: "Vite", description: "A build tool that aims to provide a faster and leaner development experience", iconUrl: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vite.svg" },
  { name: "Tailwind CSS", description: "A utility-first CSS framework", iconUrl: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg" },
  { name: "Shadcn/ui", description: "A collection of reusable components built on Radix UI and Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shadcnui.svg" },
  // Add more skills as needed
]

const Skills = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Skills & <span className="text-muted-foreground">Technologies</span></h2>
          <p className="text-base md:text-lg text-muted-foreground">Technologies and tools I work with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <Card className="cursor-pointer hover:border-primary/50 hover:shadow-md transition-all duration-200 border-border bg-card">
                  <CardContent className="p-4 flex items-center justify-center h-20">
                    <img 
                      src={skill.iconUrl} 
                      alt={skill.name} 
                      className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-200" 
                      onError={(e) => {
                        e.currentTarget.style.opacity = '0.5';
                      }}
                    />
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent side="top">
                <div className="text-center">
                  <p className="font-semibold">{skill.name}</p>
                  
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

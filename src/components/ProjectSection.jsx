import { ArrowRight, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Slambook",
        description: "A digital slambook web application where users can create personal profiles and invite friends to fill out fun and personalized questionnaires. Each entry is stored securely in a database and can be viewed or edited anytime.",
        image: "/projects/img.jpg",
        tags: ["Html", "css", "javascript", "php",],
        demoUrl: "#",
        githubUrl: "https://github.com/Pruthviraj002/SlamBook_Project"
    },


    {
        id: 2,
        title: "Online Blog System",
        description: "A Mern stack blogging platform that allows users to create, manage, and share blog posts.It provides authentication, rich text editing, and a personalized dashboard for seamless blogging experience.",
        image: "/projects/project.jpg",
        tags: ["React", "Bootstrap", "mongoDB", "Express.js", "node.js"],
        demoUrl: "#",
        githubUrl: "https://simple-blog-website-two.vercel.app/"
    },
    {
        id: 3,
        title: "Hotel website (Static)",
        description: "Designed and developed a responsive static hotel website allowing users to view room availability, special offers, and booking information. Enhanced user experience through clean UI and responsive design using Bootstrap",
        image: "/projects/project4.jpg",
        tags: ["Html", "Css", "Bootstrap"],
        demoUrl: "#",
        githubUrl: "https://pruthvrajyadav.github.io/resturant-Static-website/"
    },
]

export const ProjectSection = () => {
    return <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl" id="projects">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"><span className="text-primary">Projects</span></h2>
            <p className="text-center text-muted-foreground ">Here are some my recent projects.Each project was carefully crafted with attention to detail,performance,and user experience</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2 ">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1  text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground gradient-border ">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xs  font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between  items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        {/* <ExternalLink size={20} /> */}
                                    </a>
                                    <a href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/PruthvrajYadav" target="_blanck">
                    Check My Github<ArrowRight href="https://github.com/PruthvrajYadav" size={16} />
                </a>
            </div>
        </div>
    </section>
}
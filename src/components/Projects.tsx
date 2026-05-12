import ProjectCardStack from "./ProjectCardStack";

const Projects = () => {
    return (
        <div className="h-dvh">
            <h2 className="text-[4.2rem] text-center">Projects</h2>
            <h3 className="text-[2rem] text-center" style={{marginBottom: "5rem"}}>This is my profolio</h3>
            <ProjectCardStack />
        </div>
    )
}

export default Projects;
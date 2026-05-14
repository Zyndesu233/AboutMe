import ProjectCardStack from "./ProjectCardStack";
import PROJECTS from "../data/Projects";
import SectionTitle from "./SectionTitle";

const Projects = () => {
    return (
        <div id="Projects">
            <SectionTitle title="Projects" subtitle="This is my profolio" />
            <ProjectCardStack cards={PROJECTS} />
        </div>
    )
}

export default Projects;
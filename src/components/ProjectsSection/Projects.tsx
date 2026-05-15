import ProjectCardStack from "./ProjectCardStack";
import PROJECTS from "../../data/Project";
import SectionTitle from "../SectionTitle";

const Projects = () => {
    return (
        <section id="Projects">
            <SectionTitle title="Projects" subtitle="Portfolio Highlights" />
            <ProjectCardStack cards={PROJECTS} />
        </section>
    )
}

export default Projects;
import type { Dispatch, SetStateAction } from "react";
import ProjectCardStack from "./ProjectCardStack";
import PROJECTS from "../data/Projects";
import SectionTitle from "./SectionTitle";

const Projects = ({paddingSetter}: {paddingSetter: Dispatch<SetStateAction<number>>}) => {
    return (
        <div id="Projects" className="h-dvh">
            <SectionTitle title="Projects" subtitle="This is my profolio" />
            <ProjectCardStack cards={PROJECTS} paddingSetter={paddingSetter}  />
        </div>
    )
}

export default Projects;
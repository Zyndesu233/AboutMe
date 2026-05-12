import type { Dispatch, SetStateAction } from "react";
import ProjectCardStack from "./ProjectCardStack";
import PROJECTS from "../data/Projects";

const Projects = ({paddingSetter}: {paddingSetter: Dispatch<SetStateAction<number>>}) => {
    return (
        <div className="h-dvh">
            <h2 className="text-[4.2rem] text-center" style={{fontFamily: "Josefin Sans"}}>Projects</h2>
            <h3 className="text-[2rem] text-center" style={{marginBottom: "5rem", fontFamily: "Josefin Sans"}}>This is my profolio</h3>
            <ProjectCardStack cards={PROJECTS} paddingSetter={paddingSetter}  />
        </div>
    )
}

export default Projects;
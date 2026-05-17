import PENROSE_LOGO from "../imgs/jobImgs/penroseLogo.png"

export interface Job {
    role: string,
    company: string,
    companyUrl: string,
    date: string,
    img: string,
    description: string
};

const JOB_LIST: Job[] = [
    {
        role: "Summer Intern - Developer Experience Team",
        company: "Nex",
        companyUrl: "https://www.nex.inc/",
        date: "Jun 2026 - Aug 2026",
        img: "https://cdn.prod.website-files.com/622f9091034240479fbfe27e/6230db7fa1c696a5e718816a_logo-NEX-black.svg",
        description: "Nex is a game company developed Nex Playground, an award-winning active play system."
    },
    {
        role: "Part Time Intern - Web Developer",
        company: "Penrose",
        companyUrl: "https://www.withpenrose.com/",
        date: "Mar 2025 - Mar 2026",
        img: PENROSE_LOGO,
        description:"Penrose is an American start-up company developing AI agents for real-time construction schedule controls. I am responsible for frontend development using React framework."
    },
];

export default JOB_LIST;
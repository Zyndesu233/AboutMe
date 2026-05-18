import gsap from "gsap";
import JOB_LIST from "../../data/WorkExperience";
import JobDisplay from "./JobDisplay";
import { useGSAP } from "@gsap/react";

const JobTimeline = () => {
    useGSAP(() => {
        gsap.from(".job-display", {
            y: 50,
            opacity: 0,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".job-display",
                start: "top bottom",
                end: "top top"
            }
        });
    }, []);

    return (
        <div className="mx-auto max-w-[70vw] px-4 py-10 sm:px-6 lg:px-8">
            <div className="relative border-l border-neutral-200 pl-6 space-y-4">
                {JOB_LIST.map((job, idx) => (
                    <div className="job-display" key={idx}>
                        <JobDisplay job={job} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobTimeline;
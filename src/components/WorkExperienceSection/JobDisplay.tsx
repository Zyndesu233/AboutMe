import type { Job } from "../../data/WorkExperience";

const JobDisplay = ({ job }: { job: Job }) => {

    return (
        <div className="group relative">
            <div className="absolute -left-[2.05rem] top-[15vh] h-4 w-4 rounded-full border-4 border-gray-700 bg-white shadow" />

            <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-[30vh] rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                    <img
                        src={job.img}
                        alt={`${job.company} logo`}
                        className="w-[20%] rounded-xl object-contain p-2"
                    />

                    <div className="flex-1 h-[20rem] p-4">
                        <h3 className="text-[3rem] font-semibold text-black">
                            {job.role}
                        </h3>

                        <p className="mt-1 text-[2rem] font-medium text-black">
                            {job.company}
                            <span className="rounded-lg bg-zinc-200 ml-4 px-3 py-1 text-neutral-600">
                                {job.date}
                            </span>
                        </p>

                        <p className="mt-3 text-[1.5rem] leading-7 text-neutral-600">
                            {job.description}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
};

export default JobDisplay;
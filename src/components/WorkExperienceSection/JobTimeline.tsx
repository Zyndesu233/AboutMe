import JOB_LIST from "../../data/WorkExperience";

const JobTimeline = () => {
    return (
        <>
            {JOB_LIST.map((job) => (
                <div>
                    <div>
                        {job.role}
                    </div>
                    <div>
                        {job.company} {job.date}
                    </div>
                    {job.description}
                </div>
            ))}
        </>
    )
}

export default JobTimeline;
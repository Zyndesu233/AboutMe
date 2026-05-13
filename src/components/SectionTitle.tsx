import SECTION_STARS_IMG from "../imgs/sectionStars.png"

const SectionTitle = ({title, subtitle}: {title: string, subtitle: string}) => {
    return (
        <>
            <h2 className="text-[5rem] text-center" style={{fontFamily: "Josefin Sans"}}>
                {title}
            </h2>
            <h3 className="text-[3rem] text-center" style={{fontFamily: "Josefin Sans"}}>
                {subtitle}
            </h3>
            <img className="place-self-center h-[2rem]" style={{marginTop: "1rem", marginBottom: "3rem"}}
                src={SECTION_STARS_IMG} alt=""
            />
        </>
    )
};

export default SectionTitle;
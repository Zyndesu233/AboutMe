import SECTION_LIST from "../data/Sections";
import HERO_IMG from "../imgs/hero.png"
import ICON from "../../public/icon.png"

const Hero = () => {
    return (
        <div className="h-dvh" style={{fontFamily: "Josefin Sans"}}>
            <img className="place-self-center h-[95vh]" src={HERO_IMG} alt="" />
            <div className="absolute bottom-120 left-25">
                <ul className="text-[1.5rem]">
                    {SECTION_LIST.map(section => {
                        return (
                            <li>
                                <a href={`#${section.name}`}>
                                    {section.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="absolute bottom-25 left-10">
                <div className="text-[10rem]">Eric</div>
                <div className="text-[7rem] leading-6">Chan Sui Ki</div>
            </div>
            <div className="absolute bottom-5 right-0">
                <img className="place-self-center h-[25vh]" src={ICON} alt="" />
            </div>
        </div>
    )
}

export default Hero;
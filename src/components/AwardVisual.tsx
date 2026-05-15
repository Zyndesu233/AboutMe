import { useState } from "react";
import AWARD_LIST from "../data/Award";
import AwardCurrent from "./AwardCurrent";

const AwardVisual = () => {
    const [activeAward, setActiveAward] = useState(0);

    const handleTabClick = (index: number) => {
        if (index === activeAward) return;
        setActiveAward(index);
    };

    const currentAward = AWARD_LIST[activeAward];

    return (
        <div className="h-[70vh] w-[95vw] place-self-center relative">
            {/* Tab bar */}
            <div className="max-w-4xl mx-auto mb-10 flex">
                <div
                    className="relative inline-flex items-center bg-[var(--color-surface-offset)] rounded-full p-1 gap-1"
                >
                    {/* Sliding pill indicator */}
                    <div
                        className="absolute top-1 left-1 h-[calc(100%-8px)] rounded-full bg-[var(--color-primary)] pointer-events-none"
                        style={{ width: 0 }}
                    />

                    {AWARD_LIST.map((item, index) => (
                        <button
                            key={item.shortName}
                            onClick={() => handleTabClick(index)}
                            className={[
                                "relative z-10 px-5 py-2 rounded-xs border text-[2rem] font-semibold transition-colors duration-200 whitespace-nowrap",
                                activeAward === index
                                    ? "text-white bg-[#3388bb]"
                                    : "text-black hover:text-[white] hover:bg-[#3388bb]",
                            ].join(" ")}
                        >
                            {item.shortName}
                        </button>
                    ))}
                </div>
            </div>

            <AwardCurrent award={currentAward} />
        </div>
    )
}

export default AwardVisual;
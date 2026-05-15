import type { Award } from "../data/Award";

const AwardCurrent = ({ award }:
    { award: Award }) => {

    return (
        <div className="z-2 relative">
            {/* Content */}
            <div className="h-[60vh] flex place-content-center bg-white items-center">

                {/* Image */}
                <div
                    className="h-[40vh] relative rounded-xl overflow-hidden shadow-[var(--shadow-lg)] aspect-video bg-[var(--color-surface-offset)]"
                >
                    <img
                        src={award.img}
                        alt={award.competition}
                        className="w-full h-full object-cover"
                    />
                    {/* Year badge */}
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-s font-semibold px-3 py-1 rounded-full">
                        {award.year}
                    </div>
                </div>

                {/* Info panel */}
                <div
                    className="w-[50vw] grid flex-col justify-center p-12"
                    style={{ gridTemplateRows: 'auto 2rem 1fr', alignContent: 'start' }}
                >

                    {/* Competition name */}
                    <div className="text-[4rem] font-display font-bold text-[var(--color-text)] leading-tight mb-12">
                        <div>{award.prize}</div>
                        <div>{award.competition}</div>
                    </div>
                    <div />


                    {/* Description */}
                    <p className="text-[2rem] text-[var(--color-text-muted)] leading-relaxed">
                        {award.description}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default AwardCurrent;
import { useRef } from "react";
import { gsap } from "gsap";
import SECTION_LIST from "../data/Section";
import HERO_IMG from "../imgs/hero.png";
import ICON from "../imgs/icon.png";
import { useGSAP } from "@gsap/react";

const Hero = () => {
    const nameRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLUListElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const githubRef = useRef<HTMLAnchorElement>(null);
    const diagonalRef = useRef<SVGSVGElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Diagonal slash enters first
        tl.fromTo(
            diagonalRef.current,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.8, ease: "power4.inOut" }
        );

        // Hero image slides in from right with fade
        tl.fromTo(
            imgRef.current,
            { x: 80, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
            "-=0.4"
        );

        // Name slides up
        tl.fromTo(
            nameRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9 },
            "-=0.6"
        );

        // Surname with slight delay
        tl.fromTo(
            subtitleRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.6"
        );

        // Nav items stagger in
        tl.fromTo(
            navRef.current?.querySelectorAll("li") ?? [],
            { x: -30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
            "-=0.5"
        );

        // GitHub link fades in last
        tl.fromTo(
            githubRef.current,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.3"
        );

    }, []);

    return (
        <section className="relative h-dvh overflow-hidden bg-white">
            {/* ── Diagonal accent line ────────────────────────── */}
            <svg
                ref={diagonalRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                aria-hidden="true"
            >
                <line x1="55%" y1="0" x2="42%" y2="100%" stroke="#e5e5e5" strokeWidth="1.5" />
                <line x1="56.5%" y1="0" x2="43.5%" y2="100%" stroke="#f0f0f0" strokeWidth="1" />
            </svg>

            {/* ── Hero character image ─────────────────────────── */}
            <img
                ref={imgRef}
                className="absolute right-[12%] bottom-0 h-[92vh] object-contain select-none"
                src={HERO_IMG}
                alt="Hero character"
                draggable={false}
            />

            {/* ── Navigation list ──────────────────────────────── */}
            <div className="absolute top-1/2 -translate-y-1/2 left-10">
                <ul ref={navRef} className="flex flex-col gap-1">
                    {SECTION_LIST.map((section) => (
                        <li key={section.name}>
                            <a
                                href={`#${section.name}`}
                                className="group flex items-center gap-3
                  text-[1.1rem] tracking-[0.12em] uppercase
                  text-neutral-400 hover:text-neutral-900
                  transition-colors duration-200"
                            >
                                <span className="block h-px bg-neutral-300 w-5 group-hover:w-9 transition-all duration-300 ease-out" />
                                {section.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ── Name block ───────────────────────────────────── */}
            <div className="absolute bottom-12 left-10 leading-none">
                <div
                    ref={nameRef}
                    className="text-[clamp(5rem,10vw,9rem)] font-light tracking-tight text-neutral-900"
                >
                    Eric
                </div>
                <div
                    ref={subtitleRef}
                    className="text-[clamp(2.8rem,5.5vw,5.5rem)] font-extralight tracking-widest text-neutral-500 mt-1"
                >
                    Chan Sui Ki
                </div>
            </div>

            {/* ── GitHub link ──────────────────────────────────── */}
            <a
                ref={githubRef}
                href="https://github.com/Zyndesu233"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-8 right-8 flex flex-col items-center gap-2 group"
            >
                <span className="text-[1.25rem] tracking-[0.2em] uppercase text-neutral-400 group-hover:text-neutral-700 transition-colors duration-200">
                    Github Profile
                </span>
                <div className="relative overflow-hidden rounded-full ring-1 ring-neutral-200 group-hover:ring-neutral-400 group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all duration-300">
                    <img
                        className="h-[13vh] w-[13vh] object-cover rounded-full"
                        src={ICON}
                        alt="GitHub profile icon"
                    />
                </div>
            </a>
        </section>
    );
};

export default Hero;
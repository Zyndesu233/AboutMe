import { useCardStack } from "../src/hooks/useCardStack";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CardData {
  id: number;
  /** Zero-padded display number, e.g. "01" */
  band: string;
  title: string;
  subtitle: string;
  members: string[];
  description: string;
  /** CSS color string for the card background */
  bg: string;
  /** CSS color string for accent elements */
  accent: string;
}

interface CardStackProps {
  cards: CardData[];
}

// ─── Default data ─────────────────────────────────────────────────────────────

const DEFAULT_CARDS: CardData[] = [
  {
    id: 1,
    band: "01",
    title: "夢限大みゅーたいぷ",
    subtitle: "Mugen Dai Myuu-type",
    members: ["Vo.", "Gt.", "Gt.", "Ba.", "Dr."],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bg: "#d94f8a",
    accent: "#ff9fd0",
  },
  {
    id: 2,
    band: "02",
    title: "Ave Mujica",
    subtitle: "アヴェムジカ",
    members: ["Gt.&Vo.", "Gt.", "Ba.", "Dr.", "Key."],
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    bg: "#6b1440",
    accent: "#e8a0c8",
  },
  {
    id: 3,
    band: "03",
    title: "MyGO!!!!!",
    subtitle: "マイゴ",
    members: ["Vo.", "Gt.", "Gt.", "Ba.", "Dr."],
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    bg: "#1b5e96",
    accent: "#7ec8f5",
  },
  {
    id: 4,
    band: "04",
    title: "DOLLCHESTRA",
    subtitle: "ドルケストラ",
    members: ["Vo.", "Gt.", "Ba.", "Dr.", "Key."],
    description:
      "Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.",
    bg: "#12122a",
    accent: "#f0d060",
  },
  {
    id: 5,
    band: "05",
    title: "Morfonica",
    subtitle: "モルフォニカ",
    members: ["Vo.", "Gt.", "Ba.", "Dr.", "Vn."],
    description:
      "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
    bg: "#2a1260",
    accent: "#c4a0ff",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function MemberBadge({ label }: { label: string }) {
  return (
    <span
      className="text-[0.65rem] font-medium tracking-[0.08em] px-[10px] py-[3px] rounded-full border"
      style={{
        color: "#fff",
        background: "rgba(255,255,255,0.1)",
        borderColor: "rgba(255,255,255,0.18)",
      }}
    >
      {label}
    </span>
  );
}

function BandCard({
  card,
  peekHeight,
}: {
  card: CardData;
  peekHeight: number;
}) {
  const textMuted = "rgba(255,255,255,0.55)";
  const border = "rgba(255,255,255,0.1)";

  return (
    <div
      className="relative w-full overflow-hidden rounded-t-[20px]"
      style={{
        height: `calc(100vh - ${peekHeight}px)`,
        backgroundColor: card.bg,
        boxShadow: "0 -12px 48px rgba(0,0,0,0.5)",
        display: "flex",
      }}
    >
      {/* ── Left info panel ─────────────────────────────────────────────── */}
      <div
        className="flex flex-col justify-between flex-shrink-0 p-10"
        style={{ width: 320, borderRight: `1px solid ${border}` }}
      >
        {/* Top: badge + title + subtitle */}
        <div>
          <span
            className="inline-block text-[0.65rem] font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-6"
            style={{ color: "#fff", background: "rgba(255,255,255,0.12)" }}
          >
            Band {card.band}
          </span>

          <h2
            className="font-extrabold leading-[1.15] tracking-[-0.03em] mb-2"
            style={{
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
              color: "#fff",
            }}
          >
            {card.title}
          </h2>

          <p className="text-base font-light" style={{ color: textMuted }}>
            {card.subtitle}
          </p>
        </div>

        {/* Bottom: description + members + CTA */}
        <div>
          <p
            className="text-[0.8rem] leading-[1.75] mb-7 max-w-[36ch]"
            style={{ color: textMuted }}
          >
            {card.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {card.members.map((m, idx) => (
              <MemberBadge key={idx} label={m} />
            ))}
          </div>

          <button
            className="inline-flex items-center gap-2 text-[0.8rem] font-medium px-5 py-[9px] rounded-full border cursor-pointer transition-colors duration-200"
            style={{
              color: "#fff",
              background: "rgba(255,255,255,0.15)",
              borderColor: "rgba(255,255,255,0.25)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.25)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
            }
          >
            Learn more
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Right visual panel ──────────────────────────────────────────── */}
      <div className="relative flex-1 overflow-hidden">
        {/* Radial gradient blob */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 65% 55% at 55% 50%, ${card.accent}44, transparent)`,
          }}
        />

        {/* Large watermark number */}
        <div
          className="absolute right-[-0.5rem] top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(10rem, 18vw, 20rem)",
            letterSpacing: "-0.08em",
            color: card.accent,
            opacity: 0.07,
          }}
        >
          {card.band}
        </div>

        {/* Subtitle watermark */}
        <div
          className="absolute left-8 bottom-10 font-bold tracking-[0.04em] select-none"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            color: card.accent,
            opacity: 0.2,
          }}
        >
          {card.subtitle}
        </div>

        {/* Top-right meta */}
        <div
          className="absolute top-8 right-8 text-[0.65rem] font-mono tracking-[0.1em] uppercase"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          BanG Dream! — {card.title}
        </div>

        {/* Accent line bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{
            background: `linear-gradient(to right, ${card.accent}00, ${card.accent}88, ${card.accent}00)`,
          }}
        />

        {/* Decorative circles */}
        <div
          className="absolute top-8 left-8 w-20 h-20 rounded-full border"
          style={{ borderColor: `${card.accent}33` }}
        />
        <div
          className="absolute top-11 left-11 w-[30px] h-[30px] rounded-full border"
          style={{
            background: `${card.accent}22`,
            borderColor: `${card.accent}55`,
          }}
        />
      </div>

      {/* ── Peek label ──────────────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center px-10 border-t"
        style={{
          height: peekHeight,
          backgroundColor: card.bg,
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <span
          className="text-[0.65rem] tracking-[0.15em] uppercase"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          {card.title} · {card.subtitle}
        </span>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function ProjectCardStack({
  cards = DEFAULT_CARDS,
}: Partial<CardStackProps>) {
  const { containerRef, PEEK_HEIGHT } = useCardStack(cards.length);

  return (
    <div ref={containerRef} className="relative w-full">
      {cards.map((card, i) => (
        <div
          key={card.id}
          className="card-wrapper relative w-full"
          id={`card-${i}`}
          style={{
            marginTop: i === 0 ? 0 : -PEEK_HEIGHT,
            zIndex: i + 1,
            willChange: "transform",
          }}
        >
          <BandCard card={card} peekHeight={PEEK_HEIGHT} />
        </div>
      ))}
    </div>
  );
}
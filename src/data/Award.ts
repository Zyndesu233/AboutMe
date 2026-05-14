export interface Award {
    prize: string,
    competition: string,
    shortName: string,
    year: string,
    description: string
};

const AWARD_LIST:Award[] = [
    {
        prize: "Second Runner-up",
        competition: "CUHK Cybersecurity CTF Competition, CUHK Division",
        shortName: "CUHKCTF",
        year: "2024",
        description: "I have demonstrated good cybersecurity skills, especially in the field of web security. I also learnt diverse skills like SQL injection and digital forensics."
    },
    {
        prize: "Merit",
        competition: "8th La Salle - Pui Ching Programming Challenge",
        shortName: "LSPC",
        year: "2024",
        description: "I have cooperated with teammates and performed good problem-solving skills using C++. I have also developed deep understanding about algorithms including dynamic programming and graph theory."
    },
];

export default AWARD_LIST;
type ExperienceDate = `${number}-${number}-${number}`;
export type ExperienceModel = {
  id: string;
  company: string;
  startDate: ExperienceDate;
  endDate?: ExperienceDate;
  image: string;
  type: "work" | "educational";
  highlight?: boolean;
};

export const experiencesList: ExperienceModel[] = [
  {
    id: "febrafar",
    company: "Febrafar",
    startDate: "2024-05-01",
    image: "/images/experiences/febrafar.png",
    type: "work",
    highlight: true,
  },
  {
    id: "tixit",
    company: "Tixit",
    startDate: "2023-10-01",
    endDate: "2024-04-01",
    image: "/images/experiences/tixit.png",
    type: "work",
  },
  {
    id: "pagtel",
    company: "Pagtel",
    startDate: "2022-06-01",
    endDate: "2024-03-01",
    image: "/images/experiences/pagtel.png",
    type: "work",
  },
  {
    id: "senai",
    company: "Senai",
    startDate: "2021-01-01",
    endDate: "2022-06-30",
    image: "/images/experiences/senai.png",
    type: "educational",
  },
  {
    id: "fiap-ads",
    company: "FIAP",
    startDate: "2023-01-01",
    endDate: "2024-12-31",
    image: "/images/experiences/fiap.png",
    type: "educational",
  },
  {
    id: "impacta",
    company: "Impacta",
    startDate: "2025-04-01",
    endDate: "2026-03-31",
    image: "/images/experiences/impacta.png",
    type: "educational",
  },
  {
    id: "fiap-eng",
    company: "FIAP",
    startDate: "2026-01-01",
    endDate: "2029-12-31",
    image: "/images/experiences/fiap.png",
    type: "educational",
  },
  {
    id: "rocketseat",
    company: "Rocketseat",
    startDate: "2021-01-01",
    endDate: "2022-12-31",
    image: "/images/experiences/rocketseat.png",
    type: "educational",
  },
];

const prefixes = [
  "React",
  "Next.js",
  "Svelte",
  "Web development",
  "JavaScript",
  "TypeScript",
  "Web",
  "UI/UX",
  "Front-end",
  "Full-stack",
  "Software",
  "Desenvolvimento web",
  "Desenvolvimento de software",
  "Desenvolvimento de aplicações web",
  "Desenvolvimento de aplicações",
];

const suffixes = [
  "developer",
  "programmer",
  "specialist",
  "enthusiast",
  "engineering",
  "expert",
  "designer",
  "development",
  "programming",
  "architecture",
  "coding",
  "projects",
  "portfolio",
  "programador",
  "desenvolvedor",
  "especialista",
  "entusiasta",
  "engenharia",
  "projetos",
  "portfólio",
];

export const keywords = [
  "Erick Nathan",
  "Erick Capito",
  "Erick Pereira",
  "Erick N.",
  "Erick Nathan Capito Pereira",
  "Erick Nathan Projects",
  "Erick Nathan portfolio",
  "UI/UX design",
  "Web application development",
  "UI development",
  "Front-end architecture",
  "Responsive web design",
  "Single-page applications",
  "Web development frameworks",
  "Web design best practices",
  "Web development technologies",
  "Front-end performance optimization",
  "Cross-browser compatibility",
  "Front-end programming",
  "Svelte web applications",
  "User interface design",
  "Web development tools",
  "Front-end software engineering",
  "JavaScript frameworks",
  "Front-end coding languages",
  "Front-end design patterns",
  "Web development workflow",
  "UI/UX best practices",
  "Front-end component libraries",
  "Responsive design frameworks",
  "Front-end development services",
  "Front-end project management",
  "Mobile-first development",
  "Web performance best practices",
  "Front-end user experience",
  ...prefixes
    .map((prefix) => suffixes.map((suffix) => `${prefix} ${suffix}`))
    .flat(),
];

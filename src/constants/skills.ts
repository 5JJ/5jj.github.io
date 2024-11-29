const languages = ["JavaScript", "TypeScript"] as const;
const technologies = [
  "NextJS",
  "React",
  "React Native",
  "Tailwind CSS",
  "SASS",
  "React Query",
  "Mobx",
  "Redux",
  "Jest",
  "Storybook",
  "Firebase",
  "Ruby on Rails",
  "React-testing-library",
  "MySQL",
  "JQuery",
  "AngularJS",
  "Bootstrap",
] as const;

const soft = [
  "Strong responsibility",
  "Positive attitude",
  "Punctuality",
  "Problem-solving",
  "Clean and maintainable code",
];

const skills = {
  languages,
  technologies,
  soft,
};

export const title = {
  languages: "LANGUGAGES",
  technologies: "TECHNOLOGIES",
  soft: "SOFT SKILLS",
} as const;

export default skills;

import { COUNTERDATA, THEME, FONTFAMILY, RESUMEDATA } from "./actions";

const initialState = {
  getCounter: 0,
  getTheme: "text-[red]",
  getFontFamily: "Roboto",
  resumeData: {
    name: "Your Name",
    position: "Your Position",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque ligula, laoreet condimentum lacus nec, fermentum condimentum sapien. Vivamus eget libero pulvinar, scelerisque mauris sed, bibendum ipsum",
    email: "example@domain.com",
    ph_no: "1234567890",
    location: "City, Country",
    linkedin: "linkedin.com/in/username",
    lsLayout: [
      {
        title: "Work Experience",
        type: "exp",
        record: [
          {
            role: "Position",
            company: "Company",
            location: "City, Country",
            date: "MM/YYYY-MM/YYYY",
            responsibilities: [
              "Develop high-quality software design and architecture",
              "Identify, prioritize and execute tasks in the software development life cycle",
              "Develop tools and applications by producing clean, efficient code",
            ],
          },
        ],
      },
      {
        title: "Education",
        type: "ed",
        record: [
          {
            degree: "Degree",
            university: "University",
            date: "MM/YYYY-MM/YYYY",
          },
        ],
      },
      {
        title: "Languages",
        type: "lang",
        record: [
          {
            lang: "Language",
            rate: 4,
          },
        ],
      },
    ],
    rsLayout: [
      {
        title: "Skills",
        type: "skill",
        record: { skills: ["Skill 1", "Skill 2", "Skill 3"] },
      },
      {
        title: "Organizations",
        type: "org",
        record: {
          organizations: [
            "United Nations Children’s Fund (UNICEF)",
            "South Asian Association for Regional Cooperation (SAARC)",
            "Asian-African Legal Consultative Organization",
            "CERN – European Organization for Nuclear Research",
          ],
        },
      },
    ],
  },
};

export default function Counter(state = initialState, action: any) {
  switch (action.type) {
    case COUNTERDATA:
      return { ...state, getCounter: action.payload };
    case THEME:
      return { ...state, getTheme: action.payload };
    case FONTFAMILY:
      return { ...state, getFontFamily: action.payload };
    case RESUMEDATA:
      return { ...state, resumeData: action.payload };
    default:
      return state;
  }
}

import {
  DocumentTextIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Generate from multiple types of content sources",
  desc: "You simply have to give text, URLs, or PDF files. And, Questable will do the rest of the jobs for you.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Extract",
      desc: "The pre-built crawler scapes text from an entered URL. Also, the PDF reader extracts content from a file.",
      icon: <DocumentTextIcon />,
    },
    {
      title: "Analyze",
      desc: "The AI-powered app analyzes text from a user to get the gist and to define the questions.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Generate",
      desc: "The quiz creator generates questions and examples categorized by type, difficulty, and topic.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Practice and manage your question data with no effort",
  desc: "You can test with, save, and retrieve the questions to improve your knowledge.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Practice",
      desc: "You can practice questions and get an evaluation with the quiz games by type.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Edit",
      desc: "You can edit, merge and reorganize questions and question groups with ease.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Manage",
      desc: "You can save questions to DB or your PC and retrieve them from it for re-use.",
      icon: <ArrowPathIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
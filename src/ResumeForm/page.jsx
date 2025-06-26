import React from "react";
import formStyles from "./styles/FormStyles.module.scss";
import BasicDetails from "./components/basicDetails";
import EducationDetails from "./components/educatioDetails";
import ExperienceDetails from "./components/expDetails";
import ProjectDetails from "./components/projectDetails";
import CertificateDetails from "./components/certificateDetails";
import ResearchDetails from "./components/researchDetails";
import AccomplishmentDetails from "./components/accomplishmentDetails";
import SkillDetails from "./components/skillDetails";
import LanguageDetails from "./components/languageDetails";

const ResumeForm = () => {
  return (
    <div className={formStyles.container}>
      <BasicDetails />
      <EducationDetails/>
      <ExperienceDetails/>
      <ProjectDetails/>
      <CertificateDetails/>
      <ResearchDetails/>
      <AccomplishmentDetails/>
      <SkillDetails/>
      <LanguageDetails/>
    </div>
  );
};

export default ResumeForm;
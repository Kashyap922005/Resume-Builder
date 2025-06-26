import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLangDetails } from "../../redux/slices/langDetailsSlice";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import eduStyles from "../styles/eduStyles.module.scss";

const LanguageDetails = () => {
  const dispatch = useDispatch();
  const LanguageData = useSelector((state) => state.langDetails.langDetails);

  const [language, setLanguage] = useState(LanguageData.length > 0 ? LanguageData : [
    { id: new Date().getTime(), skill: "" },
  ]);

  const handleChange = (index, value) => {
    const updatedLanguage = language.map((item, i) =>
      i === index ? { ...item, language: value } : item
    );
    setLanguage(updatedLanguage);
    dispatch(setLangDetails(updatedLanguage));
  };

  const handleAddLanguage = () => {
    const newLanguage = [...language, { id: new Date().getTime(), language: "" }];
    setLanguage(newLanguage);
    dispatch(setLangDetails(newLanguage));
  };

  const handleDeleteLanguage = (indexToRemove) => {
    const updatedLanguage = language.filter((_, i) => i !== indexToRemove);
    setLanguage(updatedLanguage);
    dispatch(setLangDetails(updatedLanguage));
  };

  return (
    <div className={eduStyles.container}>
      <div className={eduStyles.headerTitle}>Language Details</div>
      <div className={eduStyles.eduBody}>
        {language.map((item, index) => (
          <div key={item.id} className={eduStyles.skillRow}>
            <input
              placeholder="Enter a language"
              value={item.language}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <DeleteOutlined onClick={() => handleDeleteLanguage(index)} />
          </div>
        ))}
        <br />
        <Button onClick={handleAddLanguage}>Add More</Button>
      </div>
    </div>
  );
};

export default LanguageDetails;

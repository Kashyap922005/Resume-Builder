import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSkiDetails } from "../../redux/slices/skillDetailsSlice";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import eduStyles from "../styles/eduStyles.module.scss";

const SkillDetails = () => {
  const dispatch = useDispatch();
  const skillData = useSelector((state) => state.skiDetails.skiDetails);

  const [skills, setSkills] = useState(skillData.length > 0 ? skillData : [
    { id: new Date().getTime(), skill: "" },
  ]);

  const handleChange = (index, value) => {
    const updatedSkills = skills.map((item, i) =>
      i === index ? { ...item, skill: value } : item
    );
    setSkills(updatedSkills);
    dispatch(setSkiDetails(updatedSkills));
  };

  const handleAddSkill = () => {
    const newSkills = [...skills, { id: new Date().getTime(), skill: "" }];
    setSkills(newSkills);
    dispatch(setSkiDetails(newSkills));
  };

  const handleDeleteSkill = (indexToRemove) => {
    const updatedSkills = skills.filter((_, i) => i !== indexToRemove);
    setSkills(updatedSkills);
    dispatch(setSkiDetails(updatedSkills));
  };

  return (
    <div className={eduStyles.container}>
      <div className={eduStyles.headerTitle}>Skill Details</div>
      <div className={eduStyles.eduBody}>
        {skills.map((item, index) => (
          <div key={item.id} className={eduStyles.skillRow}>
            <input
              placeholder="Enter a skill"
              value={item.skill}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <DeleteOutlined onClick={() => handleDeleteSkill(index)} />
          </div>
        ))}
        <br />
        <Button onClick={handleAddSkill}>Add More</Button>
      </div>
    </div>
  );
};

export default SkillDetails;

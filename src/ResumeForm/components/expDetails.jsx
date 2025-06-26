import React, { useState } from "react";
import eduStyles from "../styles/eduStyles.module.scss";
import { Button, Collapse } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setExpDetails } from "../../redux/slices/expDetailsSlice";
import { DeleteOutlined } from "@ant-design/icons";

const ExperienceDetails = () => {
  const dispatch = useDispatch();
  const expDetails = useSelector((state) => state.expDetails.expDetails);

  const [experienceList, setExperienceList] = useState([
    {
      id: new Date().getTime(),
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    },
  ]);

  const handleAddValues = (index, name, value) => {
    const updatedList = experienceList.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );

    setExperienceList(updatedList);
    dispatch(setExpDetails(updatedList));
  };

  const handleDelete = (indexToRemove) => {
    const filtered = experienceList.filter((_, i) => i !== indexToRemove);
    setExperienceList(filtered);
    dispatch(setExpDetails(filtered));
  };

  return (
    <div className={eduStyles.container}>
      <div className={eduStyles.headerTitle}>Experience Details</div>

      <div className={eduStyles.eduBody}>
        {experienceList.map((eachExp, index) => {
          return (
            <Collapse
              collapsible="header"
              items={[
                {
                  key: index,
                  label: (
                    <div className={eduStyles.collapseHead}>
                      <div>
                        {eachExp.company?.trim()
                          ? eachExp.company
                          : `New Experience ${index + 1}`}
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(index);
                        }}
                      >
                        <DeleteOutlined />
                      </div>
                    </div>
                  ),
                  children: (
                    <div>
                      <input
                        name="company"
                        placeholder="Enter Company Name"
                        onChange={(e) =>
                          handleAddValues(index, "company", e.target.value)
                        }
                        value={eachExp.company || ""}
                      />
                      <input
                        name="role"
                        placeholder="Enter Role/Designation"
                        onChange={(e) =>
                          handleAddValues(index, "role", e.target.value)
                        }
                        value={eachExp.role || ""}
                      />
                      <input
                        name="startDate"
                        type="date"
                        placeholder="Start Date"
                        onChange={(e) =>
                          handleAddValues(index, "startDate", e.target.value)
                        }
                        value={eachExp.startDate || ""}
                      />
                      <input
                        name="endDate"
                        type="date"
                        placeholder="End Date"
                        onChange={(e) =>
                          handleAddValues(index, "endDate", e.target.value)
                        }
                        value={eachExp.endDate || ""}
                      />
                      {/* <input
                        name="city"
                        placeholder="City"
                        onChange={(e) =>
                          handleAddValues(index, "city", e.target.value)
                        }
                        value={eachExp.city || ""}
                      /> */}
                      <textarea
                        name="description"
                        placeholder="Description of your work"
                        onChange={(e) =>
                          handleAddValues(index, "description", e.target.value)
                        }
                        value={eachExp.description || ""}
                      />
                    </div>
                  ),
                },
              ]}
            />
          );
        })}

        <br />
        <Button
          onClick={() => {
            setExperienceList([
              ...experienceList,
              {
                id: new Date().getTime(),
                company: "",
                role: "",
                startDate: "",
                endDate: "",
                city: "",
                description: "",
              },
            ]);
          }}
        >
          Add More
        </Button>
      </div>
    </div>
  );
};

export default ExperienceDetails;

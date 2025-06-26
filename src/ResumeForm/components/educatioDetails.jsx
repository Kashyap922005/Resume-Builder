import React, { useEffect, useState } from "react";
import eduStyles from "../styles/eduStyles.module.scss";
import { Button, Collapse } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setEduDetails } from "../../redux/slices/eduDetailsSlice";
import { DeleteOutlined } from "@ant-design/icons";

const EduTitles = [
  "10th / Secondary Education",
  "12th / Diploma ",
  "Degree / B.Tech",
  "P.G",
];
const EducationDetails = () => {
  const dispatch = useDispatch();

  const eduDetails = useSelector((state) => state.eduDetails.eduDetails);

  const [educationLevel, setEducationLevel] = useState([
    {
      id: new Date().getTime(),
      type: "",
      board: "",
      school: "",
      hallticket: "",
      startDate: "",
      endDate: "",
      yearofPass: "",
      grade: "",
      city: "",
      stream: "",
      description: "",
    },
  ]);

  const handleAddValues = (index, name, value) => {
    const updateValue = educationLevel.map((item, i) => ({
      ...item,
    }));

    updateValue[index][name] = value;
    setEducationLevel(updateValue);
    dispatch(setEduDetails(updateValue));
  };

  return (
    <div className={eduStyles.container}>
      <div className={eduStyles.headerTitle}>Education Details</div>

      <div className={eduStyles.eduBody}>
        {educationLevel?.map((eachLevel, index) => {
          return (
            <Collapse
              collapsible="header"
              items={[
                {
                  key: index,
                  label: (
                    <div className={eduStyles.collapseHead}>
                      <div>{EduTitles[index]}</div>
                      {index == educationLevel?.length - 1 && (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            const removeLastElement = educationLevel?.slice(
                              0,
                              -1
                            );
                            setEducationLevel(removeLastElement);
                          }}
                        >
                          <DeleteOutlined />
                        </div>
                      )}
                    </div>
                  ),
                  children: (
                    <div>
                      <input
                        name="type"
                        placeholder="Enter Your Education Type"
                        onChange={(e) =>
                          handleAddValues(index, "type", e.target.value)
                        }
                        value={educationLevel[index]?.type || ""}
                      />
                      {/* <input
                        name="board"
                        placeholder="Enter Your Education Board"
                        onChange={(e) => handleAddValues(index, "board", e.target.value)}
  value={educationLevel[index]?.board || ""}
                      /> */}
                      <input
                        name="school"
                        placeholder="Enter Your Educational Institution name"
                        onChange={(e) =>
                          handleAddValues(index, "school", e.target.value)
                        }
                        value={educationLevel[index]?.school || ""}
                      />
                      <input
                        name="stream"
                        placeholder="Enter Your Stream"
                        onChange={(e) =>
                          handleAddValues(index, "stream", e.target.value)
                        }
                        value={educationLevel[index]?.stream || ""}
                      />
                      {/* <input
                        name="hallticket"
                        placeholder="Enter Your Education Type"
                        onChange={(e) =>
                          handleAddValues(index, "hallticket", e.target.value)
                        }
                        value={educationLevel[index]?.hallticket || ""}
                      /> */}
                      <input
                        name="startDate"
                        type="date"
                        placeholder="Enter Your Start Date"
                        onChange={(e) =>
                          handleAddValues(index, "startDate", e.target.value)
                        }
                        value={educationLevel[index]?.startDate || ""}
                      />
                      <input
                        name="endDate"
                        type="date"
                        placeholder="Enter Your End Date"
                        onChange={(e) =>
                          handleAddValues(index, "endDate", e.target.value)
                        }
                        value={educationLevel[index]?.endDate || ""}
                      />
                      
                      {/* <input
                        name="yearofPass"
                        placeholder="Enter Your Year of Pass"
                        onChange={(e) =>
                          handleAddValues(index, "yearofPass", e.target.value)
                        }
                        value={educationLevel[index]?.yearofPass || ""}
                      /> */}
                      <input
                        name="grade"
                        placeholder="Enter Your Grade"
                        onChange={(e) =>
                          handleAddValues(index, "grade", e.target.value)
                        }
                        value={educationLevel[index]?.grade || ""}
                      />
                      {/* <input
                        name="city"
                        placeholder="Enter Your City"
                        onChange={(e) =>
                          handleAddValues(index, "city", e.target.value)
                        }
                        value={educationLevel[index]?.city || ""}
                      /> */}
                      
                      <textarea
                        name="description"
                        placeholder="Enter Description"
                        onChange={(e) =>
                          handleAddValues(index, "description", e.target.value)
                        }
                        value={educationLevel[index]?.description || ""}
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
            if (educationLevel?.length == EduTitles?.length) {
              return;
            }
            setEducationLevel([
              ...educationLevel,
              { id: new Date().getTime() },
            ]);
          }}
        >
          Add More
        </Button>
      </div>
    </div>
  );
};

export default EducationDetails;

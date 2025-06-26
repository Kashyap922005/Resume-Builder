import React, { useState } from "react";
import eduStyles from "../styles/eduStyles.module.scss";
import { Button, Collapse } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setProDetails } from "../../redux/slices/proDetailsSlice";
import { DeleteOutlined } from "@ant-design/icons";

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const proDetails = useSelector((state) => state.proDetails.proDetails);

  const [projectList, setProjectList] = useState([
    {
      id: new Date().getTime(),
      company: "",
      project: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    },
  ]);

  const handleAddValues = (index, name, value) => {
    const updatedList = projectList.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );

    setProjectList(updatedList);
    dispatch(setProDetails(updatedList));
  };

  const handleDelete = (indexToRemove) => {
    const filtered = projectList.filter((_, i) => i !== indexToRemove);
    setProjectList(filtered);
    dispatch(setProDetails(filtered));
  };

  return (
    <div className={eduStyles.container}>
      <div className={eduStyles.headerTitle}>Project Details</div>

      <div className={eduStyles.eduBody}>
        {projectList.map((eachPro, index) => {
          return (
            <Collapse
              collapsible="header"
              items={[
                {
                  key: index,
                  label: (
                    <div className={eduStyles.collapseHead}>
                      <div>
                        {eachPro.company?.trim()
                          ? eachPro.company
                          : `New Project ${index + 1}`}
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
                        value={eachPro.company || ""}
                      />
                      <input
                        name="project"
                        placeholder="Enter Project"
                        onChange={(e) =>
                          handleAddValues(index, "project", e.target.value)
                        }
                        value={eachPro.project || ""}
                      />
                      <input
                        name="startDate"
                        type="date"
                        placeholder="Start Date"
                        onChange={(e) =>
                          handleAddValues(index, "startDate", e.target.value)
                        }
                        value={eachPro.startDate || ""}
                      />
                      <input
                        name="endDate"
                        type="date"
                        placeholder="End Date"
                        onChange={(e) =>
                          handleAddValues(index, "endDate", e.target.value)
                        }
                        value={eachPro.endDate || ""}
                      />
                      {/* <input
                        name="city"
                        placeholder="City"
                        onChange={(e) =>
                          handleAddValues(index, "city", e.target.value)
                        }
                        value={eachPro.city || ""}
                      /> */}
                      <textarea
                        name="description"
                        placeholder="Description of your work"
                        onChange={(e) =>
                          handleAddValues(index, "description", e.target.value)
                        }
                        value={eachPro.description || ""}
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
            setProjectList([
              ...projectList,
              {
                id: new Date().getTime(),
                company: "",
                project: "",
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

export default ProjectDetails;

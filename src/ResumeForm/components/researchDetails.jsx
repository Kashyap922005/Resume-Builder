import React, { useState } from "react";
import eduStyles from "../styles/eduStyles.module.scss";
import { Button, Collapse } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setResDetails } from "../../redux/slices/resDetailsSlice";
import { DeleteOutlined } from "@ant-design/icons";

const ResearchDetails = () => {
  const dispatch = useDispatch();
  const resDetails = useSelector((state) => state.resDetails.resDetails);

  const [researchList, setResearchList] = useState([
    {
      id: new Date().getTime(),
      organization: "",
      title: "",
      type: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleAddValues = (index, name, value) => {
    const updatedList = researchList.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );

    setResearchList(updatedList);
    dispatch(setResDetails(updatedList));
  };

  const handleDelete = (indexToRemove) => {
    const filtered = researchList.filter((_, i) => i !== indexToRemove);
    setResearchList(filtered);
    dispatch(setResDetails(filtered));
  };

  return (
    <div className={eduStyles.container}>
      <div className={eduStyles.headerTitle}>Research Details</div>

      <div className={eduStyles.eduBody}>
        {researchList.map((eachRes, index) => {
          return (
            <Collapse
              collapsible="header"
              items={[
                {
                  key: index,
                  label: (
                    <div className={eduStyles.collapseHead}>
                      <div>
                        {eachRes.title?.trim()
                          ? eachRes.title
                          : `New Research ${index + 1}`}
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
                        name="title"
                        placeholder="Enter Title"
                        onChange={(e) =>
                          handleAddValues(index, "title", e.target.value)
                        }
                        value={eachRes.title || ""}
                      />
                      <input
                        name="organization"
                        placeholder="Enter Organization Name"
                        onChange={(e) =>
                          handleAddValues(index, "organization", e.target.value)
                        }
                        value={eachRes.organization || ""}
                      />
                      <input
                        name="type"
                        placeholder="Enter Type"
                        onChange={(e) =>
                          handleAddValues(index, "type", e.target.value)
                        }
                        value={eachRes.type || ""}
                      />
                      <input
                        name="startDate"
                        type="date"
                        placeholder="Start Date"
                        onChange={(e) =>
                          handleAddValues(index, "startDate", e.target.value)
                        }
                        value={eachRes.startDate || ""}
                      />
                      <input
                        name="endDate"
                        type="date"
                        placeholder="End Date"
                        onChange={(e) =>
                          handleAddValues(index, "endDate", e.target.value)
                        }
                        value={eachRes.endDate || ""}
                      />
                      
                      <textarea
                        name="description"
                        placeholder="Description of your work"
                        onChange={(e) =>
                          handleAddValues(index, "description", e.target.value)
                        }
                        value={eachRes.description || ""}
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
            setResearchList([
              ...researchList,
              {
                id: new Date().getTime(),
                organization: "",
                title: "",
                type: "",
                startDate: "",
                endDate: "",
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

export default ResearchDetails;

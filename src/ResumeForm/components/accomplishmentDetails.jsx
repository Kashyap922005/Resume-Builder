import React, { useState } from "react";
import eduStyles from "../styles/eduStyles.module.scss";
import { Button, Collapse } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setAccDetails } from "../../redux/slices/accDetailsSlice";
import { DeleteOutlined } from "@ant-design/icons";

const AccomplishmentDetails = () => {
  const dispatch = useDispatch();
  const accDetails = useSelector((state) => state.accDetails.accDetails);

  const [accomplishmentList, setAccomplishmentList] = useState([
    {
      id: new Date().getTime(),
      company: "",
      accomplishment: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleAddValues = (index, name, value) => {
    const updatedList = accomplishmentList.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );

    setAccomplishmentList(updatedList);
    dispatch(setAccDetails(updatedList));
  };

  const handleDelete = (indexToRemove) => {
    const filtered = accomplishmentList.filter((_, i) => i !== indexToRemove);
    setAccomplishmentList(filtered);
    dispatch(setAccDetails(filtered));
  };

  return (
    <div className={eduStyles.container}>
      <div className={eduStyles.headerTitle}>Accomplishment Details</div>

      <div className={eduStyles.eduBody}>
        {accomplishmentList.map((eachAcc, index) => {
          return (
            <Collapse
              collapsible="header"
              items={[
                {
                  key: index,
                  label: (
                    <div className={eduStyles.collapseHead}>
                      <div>
                        {eachAcc.accomplishment?.trim()
                          ? eachAcc.accomplishment
                          : `New Accomplishment ${index + 1}`}
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
                        name="accomplishment"
                        placeholder="Enter Accomplishment"
                        onChange={(e) =>
                          handleAddValues(index, "accomplishment", e.target.value)
                        }
                        value={eachAcc.accomplishment || ""}
                      />
                      <input
                        name="company"
                        placeholder="Enter Company name"
                        onChange={(e) =>
                          handleAddValues(index, "company", e.target.value)
                        }
                        value={eachAcc.company || ""}
                      />
                      
                      <input
                        name="startDate"
                        type="date"
                        placeholder="Start Date"
                        onChange={(e) =>
                          handleAddValues(index, "startDate", e.target.value)
                        }
                        value={eachAcc.startDate || ""}
                      />
                      <input
                        name="endDate"
                        type="date"
                        placeholder="End Date"
                        onChange={(e) =>
                          handleAddValues(index, "endDate", e.target.value)
                        }
                        value={eachAcc.endDate || ""}
                      />

                      <textarea
                        name="description"
                        placeholder="Description of your work"
                        onChange={(e) =>
                          handleAddValues(index, "description", e.target.value)
                        }
                        value={eachAcc.description || ""}
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
            setAccomplishmentList([
              ...accomplishmentList,
              {
                id: new Date().getTime(),
                organization: "",
                company: "",
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

export default AccomplishmentDetails;

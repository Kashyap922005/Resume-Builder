import React, { useState } from "react";
import eduStyles from "../styles/eduStyles.module.scss";
import { Button, Collapse } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setCertDetails } from "../../redux/slices/certDetailsSlice";
import { DeleteOutlined } from "@ant-design/icons";

const CertificateDetails = () => {
  const dispatch = useDispatch();
  const certDetails = useSelector((state) => state.certDetails.certDetails);

  const [certificateList, setCertificateList] = useState([
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
    const updatedList = certificateList.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );

    setCertificateList(updatedList);
    dispatch(setCertDetails(updatedList));
  };

  const handleDelete = (indexToRemove) => {
    const filtered = certificateList.filter((_, i) => i !== indexToRemove);
    setCertificateList(filtered);
    dispatch(setCertDetails(filtered));
  };

  return (
    <div className={eduStyles.container}>
      <div className={eduStyles.headerTitle}>Certificate Details</div>

      <div className={eduStyles.eduBody}>
        {certificateList.map((eachCert, index) => {
          return (
            <Collapse
              collapsible="header"
              items={[
                {
                  key: index,
                  label: (
                    <div className={eduStyles.collapseHead}>
                      <div>
                        {eachCert.organization?.trim()
                          ? eachCert.organization
                          : `New Certification ${index + 1}`}
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
                        value={eachCert.title || ""}
                      />
                      <input
                        name="organization"
                        placeholder="Enter Organization Name"
                        onChange={(e) =>
                          handleAddValues(index, "organization", e.target.value)
                        }
                        value={eachCert.organization || ""}
                      />
                      <input
                        name="type"
                        placeholder="Enter Type"
                        onChange={(e) =>
                          handleAddValues(index, "type", e.target.value)
                        }
                        value={eachCert.type || ""}
                      />
                      <input
                        name="startDate"
                        type="date"
                        placeholder="Start Date"
                        onChange={(e) =>
                          handleAddValues(index, "startDate", e.target.value)
                        }
                        value={eachCert.startDate || ""}
                      />
                      <input
                        name="endDate"
                        type="date"
                        placeholder="End Date"
                        onChange={(e) =>
                          handleAddValues(index, "endDate", e.target.value)
                        }
                        value={eachCert.endDate || ""}
                      />
                      
                      <textarea
                        name="description"
                        placeholder="Description of your work"
                        onChange={(e) =>
                          handleAddValues(index, "description", e.target.value)
                        }
                        value={eachCert.description || ""}
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
            setCertificateList([
              ...certificateList,
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

export default CertificateDetails;

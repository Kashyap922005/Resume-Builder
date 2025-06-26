import React from "react";
import basicDetailsStyles from "../styles/basicDetails.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addBasicDetails } from "../../redux/slices/basicDetailsSlice";

const BasicDetails = () => {
  const dispatch = useDispatch();

  const basicDetails = useSelector((state) => state.basicDetails.basicDetails);

  return (
    <div className={basicDetailsStyles.container}>
      <div className={basicDetailsStyles.headerTitle}>Basic Details</div>

      <div className={basicDetailsStyles.basicDetailsBody}>
        <input
          name="firstName"
          placeholder="First Name"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                firstName: e.target.value,
              })
            )
          }
          value={basicDetails?.firstName}
        />
        <input
          name="middleName"
          placeholder="Middle Name"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                middleName: e.target.value,
              })
            )
          }
          value={basicDetails?.middleName}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                lastName: e.target.value,
              })
            )
          }
          value={basicDetails?.lastName}
        />
        <input
          name="location"
          placeholder="Location"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                location: e.target.value,
              })
            )
          }
          value={basicDetails?.location}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                email: e.target.value,
              })
            )
          }
          value={basicDetails?.email}
        />
        <input
          name="phone"
          type="number"
          placeholder="Phone Number"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                phone: Number(e.target.value),
              })
            )
          }
          value={basicDetails?.phone}
        />
        <input
          name="profile"
          placeholder="Profile"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                profile: e.target.value,
              })
            )
          }
          value={basicDetails?.profile}
        />
        <input
          name="linkedin"
          placeholder="linkedin profile link"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                linkedin: e.target.value,
              })
            )
          }
          value={basicDetails?.linkedin}
        />

        <input
          name="github"
          placeholder="github profile link"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                github: e.target.value,
              })
            )
          }
          value={basicDetails?.github}
        />
      </div>
      <textarea
        name="proffesionalSummary"
        placeholder="Professional Summary"
        onChange={(e) =>
          dispatch(
            addBasicDetails({
              ...basicDetails,
              proffesionalSummary: e.target.value,
            })
          )
        }
        value={basicDetails?.proffesionalSummary}
      />
    </div>
  );
};

export default BasicDetails;
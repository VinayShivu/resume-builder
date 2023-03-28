import { useState, useEffect } from "react";
import { useTheme } from "../hooks/useThemeHook";
import { useUpdate } from "../hooks/useUpdateHook";

const Header = () => {
  const [theme] = useTheme();
  const [resumeData, setResumeData] = useUpdate();
  const [flagr, setFlagr] = useState("");

  useEffect(() => {
    return () => {};
  }, []);

  function onChangeData(event: any, field: string) {
    setResumeData({ ...resumeData, [field]: event.target.value });
  }
  return (
    <div className="items-center sm:flex justify-between">
      <div className="sm:w-1/2">
        {flagr === "name" ? (
          <input
            className={`text-2xl font-bold outline-none ${theme.primary_fg()}`}
            onChange={(event) => onChangeData(event, "name")}
            value={resumeData.name}
            onBlur={(event) => {
              if (event.target.value === "") {
                setResumeData({
                  ...resumeData,
                  name: resumeData.name,
                });
              }
              setFlagr("");
            }}
          ></input>
        ) : (
          <div
            className={`text-2xl font-bold ${theme.primary_fg()}`}
            onClick={() => setFlagr("name")}
          >
            {resumeData.name}
          </div>
        )}
        {flagr === "position" ? (
          <input
            className="text-xl outline-none"
            onChange={(event) => onChangeData(event, "position")}
            value={resumeData.position}
            onBlur={(event) => {
              if (event.target.value === "") {
                setResumeData({
                  ...resumeData,
                  name: resumeData.position,
                });
              }
              setFlagr("");
            }}
          ></input>
        ) : (
          <div className="text-xl" onClick={() => setFlagr("position")}>
            {resumeData.position}
          </div>
        )}
        {flagr === "description" ? (
          <textarea
            rows={3}
            cols={50}
            className="text-ellipsis mt-3 outline-none w-full"
            onChange={(event) => onChangeData(event, "description")}
            value={resumeData.description}
            onBlur={(event) => {
              if (event.target.value === "") {
                setResumeData({ ...resumeData, name: resumeData.description });
              }
              setFlagr("");
            }}
          ></textarea>
        ) : (
          <div
            className="text-ellipsis mt-3"
            onClick={() => setFlagr("description")}
          >
            {resumeData.description}
          </div>
        )}
      </div>
      <div className="flex flex-col items-end mt-5 ">
        <div className="flex md:flex-row items-center flex-row-reverse w-full justify-end">
          {flagr === "email" ? (
            <input
              className="mx-2 outline-none"
              onChange={(event) => onChangeData(event, "email")}
              value={resumeData.email}
              onBlur={(event) => {
                if (event.target.value === "") {
                  setResumeData({ ...resumeData, name: resumeData.email });
                }
                setFlagr("");
              }}
            ></input>
          ) : (
            <div className="mx-2" onClick={() => setFlagr("email")}>
              {resumeData.email}
            </div>
          )}
          <i className={`fa-solid fa-envelope ${theme.primary_fg()}`}></i>
        </div>
        <div className="pt-2 flex md:flex-row items-center flex-row-reverse w-full justify-end">
          {flagr === "ph_no" ? (
            <input
              className="mx-2 outline-none"
              onChange={(event) => onChangeData(event, "ph_no")}
              value={resumeData.ph_no}
              onBlur={(event) => {
                if (event.target.value === "") {
                  setResumeData({ ...resumeData, name: resumeData.ph_no });
                }
                setFlagr("");
              }}
            ></input>
          ) : (
            <div className="mx-2" onClick={() => setFlagr("ph_no")}>
              {resumeData.ph_no}
            </div>
          )}
          <i
            className={`fa-solid fa-mobile-screen-button ${theme.primary_fg()}`}
          ></i>
        </div>
        <div className="pt-2 flex md:flex-row items-center flex-row-reverse w-full justify-end">
          {flagr === "location" ? (
            <input
              className="mx-2 outline-none"
              onChange={(event) => onChangeData(event, "location")}
              value={resumeData.location}
              onBlur={(event) => {
                if (event.target.value === "") {
                  setResumeData({ ...resumeData, name: resumeData.location });
                }
                setFlagr("");
              }}
            ></input>
          ) : (
            <div className="mx-2" onClick={() => setFlagr("location")}>
              {resumeData.location}
            </div>
          )}
          <i className={`fa-solid fa-location-dot ${theme.primary_fg()}`}></i>
        </div>
        <div className="pt-2 flex md:flex-row items-center flex-row-reverse w-full justify-end">
          {flagr === "linkedin" ? (
            <input
              className="mx-2 outline-none"
              onChange={(event) => onChangeData(event, "linkedin")}
              value={resumeData.linkedin}
              onBlur={(event) => {
                if (event.target.value === "") {
                  setResumeData({ ...resumeData, name: resumeData.linkedin });
                }
                setFlagr("");
              }}
            ></input>
          ) : (
            <div className="mx-2" onClick={() => setFlagr("linkedin")}>
              {resumeData.linkedin}
            </div>
          )}
          <i className={`fa-brands fa-linkedin ${theme.primary_fg()}`}></i>
        </div>
      </div>
    </div>
  );
};

export default Header;

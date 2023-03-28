import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "../hooks/useThemeHook";
import { useUpdate } from "../hooks/useUpdateHook";

const RSLayout = () => {
  const [theme] = useTheme();
  const [resumeData, setResumeData] = useUpdate();
  const [flagr, setFlagr] = useState("");
  const resData = useSelector((state: any) => state.getData);
  const [indexing, setIndexing] = useState(-1);

  const onClickFlagger = (field: string, index: number) => {
    setFlagr(field);
    setIndexing(index);
  };

  const addSkills = () => {
    let skillenth = resumeData.rsLayout[0].record.skills.length + 1;
    let newItem = `Skill ${skillenth}`;
    resumeData.rsLayout[0].record.skills.push(newItem);
    setResumeData({ ...resumeData });
  };

  const removeSkill = (i: number) => {
    resumeData.rsLayout[0].record.skills.splice(i, 1);
    setResumeData({ ...resumeData });
  };

  const addOrganization = () => {
    let orgLength = resumeData.rsLayout[1].record.organizations.length + 1;
    let newOrg = `organizations ${orgLength}`;
    resumeData.rsLayout[1].record.organizations.push(newOrg);
    setResumeData({ ...resumeData });
  };

  return (
    <>
      <div className="mt-10 sm:w-1/2 mx-8">
        <div className="flex flex-row justify-between items-center">
          {flagr === "title" ? (
            <>
              <input
                className={`text-2xl font-bold border-y-2 outline-none w-20 border-black ${theme.primary_fg()}`}
                value={resumeData.rsLayout[0].title.toUpperCase()}
                onChange={(event) => {
                  resumeData.rsLayout[0].title = event.target.value;
                  setResumeData({
                    ...resumeData,
                  });
                }}
                onBlur={(event) => {
                  if (event.target.value === "") {
                    resumeData.rsLayout[0].title = resData.rsLayout[0].title;
                    setResumeData({
                      ...resumeData,
                    });
                  }
                  setFlagr("");
                }}
              ></input>
              <div
                onClick={() => {
                  addSkills();
                }}
              >
                <i
                  className={` fa-solid fa-circle-plus cursor-pointer text-xl ${theme.primary_fg()}`}
                ></i>
              </div>
            </>
          ) : (
            <span
              className={`text-xl font-bold border-y-2 border-black ${theme.primary_fg()}`}
              onClick={() => setFlagr("title")}
            >
              {resumeData.rsLayout[0].title.toUpperCase()}
            </span>
          )}
        </div>
        <div className="flex flex-wrap">
          {resumeData.rsLayout[0].record.skills.map((item: any, index: any) => {
            return (
              <>
                {flagr === "skills" && indexing === index ? (
                  <div>
                    <input
                      className={`flex py-1 px-1 mx-2 my-2 rounded-md w-16 outline-none ${theme.primary_fg()} bg-white border-2 ${theme.border()}`}
                      value={item}
                      onChange={(event) => {
                        resumeData.rsLayout[0].record.skills[index] =
                          event.target.value;
                        setResumeData({ ...resumeData });
                      }}
                      onBlur={(event) => {
                        if (event.target.value === "") {
                          resumeData.rsLayout[0].record.skills[index] =
                            resData.rsLayout[0].record.skills;
                          setResumeData({
                            ...resumeData,
                          });
                        }
                        setFlagr("");
                      }}
                    ></input>
                    {index >= 1 && flagr === "skills" && (
                      <i
                        onClick={() => removeSkill(index)}
                        className={`absolute mt-[-58px] ml-[0px] fa fa-times text-white rounded-full ${theme.bg()} p-1  cursor-pointer`}
                      ></i>
                    )}
                  </div>
                ) : (
                  <div
                    onClick={() => onClickFlagger("skills", index)}
                    className={`py-1 px-2 mx-2 my-2 rounded-md ${theme.secondary_fg()} ${theme.bg()}`}
                  >
                    {item}
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div className="flex flex-row justify-between items-center">
          {flagr === "orgtitle" ? (
            <>
              <input
                className={`text-xl font-bold border-y-2 outline-none w-44 my-6 border-black ${theme.primary_fg()}`}
                value={resumeData.rsLayout[1].title.toUpperCase()}
                onChange={(event) => {
                  resumeData.rsLayout[1].title = event.target.value;
                  setResumeData({
                    ...resumeData,
                  });
                }}
                onBlur={(event) => {
                  if (event.target.value === "") {
                    resumeData.rsLayout[1].title = resData.lsLayout[1].title;
                    setResumeData({
                      ...resumeData,
                    });
                  }
                  setFlagr("");
                }}
              ></input>
              <div
                onClick={() => {
                  addOrganization();
                }}
              >
                <i
                  className={`ml-8 fa-solid fa-circle-plus cursor-pointer text-xl ${theme.primary_fg()}`}
                ></i>
              </div>
            </>
          ) : (
            <span
              className={`text-xl font-bold border-y-2 border-black my-6 ${theme.primary_fg()}`}
              onClick={() => setFlagr("orgtitle")}
            >
              {resumeData.rsLayout[1].title.toUpperCase()}
            </span>
          )}
        </div>
        <div>
          {resumeData.rsLayout[1].record.organizations.map(
            (orgData: any, index: number) => {
              return (
                <div className="flex flex-row justify-between items-center">
                  {flagr === "orginput" + index ? (
                    <input
                      className="text-sm my-2 font-bold w-full outline-none"
                      value={orgData}
                      onChange={(event: any) => {
                        orgData = event.target.value;
                        setResumeData({
                          ...resumeData,
                        });
                      }}
                      onBlur={(event) => {
                        if (event.target.value === "") {
                          resumeData.rsLayout[1].record.organizations[index] =
                            resData.rsLayout[1].record.organizations[index];
                          setResumeData({
                            ...resumeData,
                          });
                        }
                        setFlagr("");
                      }}
                    ></input>
                  ) : (
                    <div
                      className="text-sm my-2 font-bold"
                      onClick={() => setFlagr("orginput" + index)}
                    >
                      {orgData}
                    </div>
                  )}
                  {index >= 1 && flagr === "orginput" + index && (
                    <div
                      className="ml-10 text-sm"
                      onClick={() => {
                        resumeData.rsLayout[1].record.organizations.splice(
                          index,
                          1
                        );
                        setResumeData({ ...resumeData });
                      }}
                    >
                      <i
                        className={`fa-solid fa-trash ${theme.primary_fg()}`}
                      ></i>
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
export default RSLayout;

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "../hooks/useThemeHook";
import { useUpdate } from "../hooks/useUpdateHook";

const LSLayout = () => {
  const [theme] = useTheme();
  const [resumeData, setResumeData] = useUpdate();
  const [flagr, setFlagr] = useState("");
  const resData = useSelector((state: any) => state.getData);

  useEffect(() => {
    return () => {};
  }, []);

  const addExpiernce = (i: number) => {
    return {
      role: "Position" + ` ${i + 1}`,
      company: "Company" + ` ${i + 1}`,
      location: "City, Country",
      date: "MM/YYYY-MM/YYYY",
      responsibilities: [
        "Develop high-quality software design and architecture",
        "Identify, prioritize and execute tasks in the software development life cycle",
        "Develop tools and applications by producing clean, efficient code",
      ],
    };
  };
  const addEducation = (i: number) => {
    return {
      degree: "Degree" + ` ${i + 1}`,
      university: "University" + ` ${i + 1}`,
      date: "MM/YYYY-MM/YYYY",
    };
  };
  const addLanguage = (i: number) => {
    return {
      lang: `Language ${i + 1}`,
      rate: 1,
    };
  };

  const workExperienceDiv = () => {
    return (
      <div className="mt-10">
        <div className="flex flex-row justify-between items-center">
          {flagr === "title" ? (
            <>
              <input
                className={`text-xl font-bold border-y-2 outline-none border-black ${theme.primary_fg()}`}
                value={resumeData.lsLayout[0].title.toUpperCase()}
                onChange={(event) => {
                  resumeData.lsLayout[0].title = event.target.value;
                  setResumeData({
                    ...resumeData,
                  });
                }}
                onBlur={(event) => {
                  if (event.target.value === "") {
                    resumeData.lsLayout[0].title = resData.lsLayout[0].title;
                    setResumeData({
                      ...resumeData,
                    });
                  }
                  setFlagr("");
                }}
              ></input>
              <div
                onClick={() => {
                  resumeData.lsLayout[0].record.push(
                    addExpiernce(resumeData.lsLayout[0].record.length)
                  );
                  setResumeData({ ...resumeData });
                }}
              >
                <i
                  className={`ml-8 fa-solid fa-circle-plus cursor-pointer text-xl ${theme.primary_fg()}`}
                ></i>
              </div>
            </>
          ) : (
            <span
              className={`text-xl font-bold border-y-2 border-black ${theme.primary_fg()}`}
              onClick={() => setFlagr("title")}
            >
              {resumeData.lsLayout[0].title.toUpperCase()}
            </span>
          )}
        </div>
        {resumeData.lsLayout[0].record.map((record: any, index: number) => {
          return (
            <>
              <div className="flex flex-row justify-between items-center">
                {flagr === "role" + index ? (
                  <input
                    className="mt-5 text-xl font-bold outline-none"
                    value={record.role}
                    onChange={(event: any) => {
                      record.role = event.target.value;
                      setResumeData({
                        ...resumeData,
                      });
                    }}
                    onBlur={(event: any) => {
                      if (event.target.value.trim() === "") {
                        record.role = resData.lsLayout[0].record[0].role;
                        setResumeData({
                          ...resumeData,
                        });
                      }
                      setFlagr("");
                    }}
                  ></input>
                ) : (
                  <div
                    className="mt-5 text-xl font-bold"
                    onClick={() => setFlagr("role" + index)}
                  >
                    {record.role}
                  </div>
                )}
                {index >= 1 && flagr === "role" + index && (
                  <div
                    className="ml-10 text-sm"
                    onClick={() => {
                      resumeData.lsLayout[0].record.splice(index, 1);
                      setResumeData({ ...resumeData });
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </div>
                )}
              </div>
              {flagr === "company" ? (
                <input
                  className="font-normal outline-none"
                  value={record.company}
                  onChange={(event: any) => {
                    record.company = event.target.value;
                    setResumeData({
                      ...resumeData,
                    });
                  }}
                  onBlur={(event: any) => {
                    if (event.target.value.trim() === "") {
                      record.company = resData.lsLayout[0].record[0].company;
                      setResumeData({
                        ...resumeData,
                      });
                    }
                    setFlagr("");
                  }}
                ></input>
              ) : (
                <div
                  className="font-normal"
                  onClick={() => setFlagr("company")}
                >
                  {record.company}
                </div>
              )}
              <div className="sm:flex sm:justify-between italic">
                {flagr === "date" ? (
                  <input
                    className="outline-none"
                    value={record.date}
                    onChange={(event: any) => {
                      record.date = event.target.value;
                      setResumeData({
                        ...resumeData,
                      });
                    }}
                    onBlur={(event: any) => {
                      if (event.target.value.trim() === "") {
                        record.date = resData.lsLayout[0].record[0].date;
                        setResumeData({
                          ...resumeData,
                        });
                      }
                      setFlagr("");
                    }}
                  ></input>
                ) : (
                  <div onClick={() => setFlagr("date")}>{record.date}</div>
                )}
                {flagr === "location" ? (
                  <input
                    className="outline-none"
                    value={record.location}
                    onChange={(event: any) => {
                      record.location = event.target.value;
                      setResumeData({
                        ...resumeData,
                      });
                    }}
                    onBlur={(event: any) => {
                      if (event.target.value.trim() === "") {
                        record.location =
                          resData.lsLayout[0].record[0].location;
                        setResumeData({
                          ...resumeData,
                        });
                      }
                      setFlagr("");
                    }}
                  ></input>
                ) : (
                  <div onClick={() => setFlagr("location")}>
                    {record.location}
                  </div>
                )}
              </div>
              {record.responsibilities.map((respon: any, i: number) => {
                return (
                  <div className="mt-3">
                    <div className="flex items-start">
                      <div className={`mb-1 ${theme.primary_fg()}`}>-</div>
                      {flagr === "responsibilities" + index + i ? (
                        <div className="flex">
                          <input
                            className="text-sm mt-1 outline-none w-full"
                            value={
                              resumeData.lsLayout[0].record[index]
                                .responsibilities[i]
                            }
                            onChange={(event: any) => {
                              resumeData.lsLayout[0].record[
                                index
                              ].responsibilities[i] = event.target.value;
                              setResumeData({
                                ...resumeData,
                              });
                            }}
                            onBlur={(event: any) => {
                              if (event.target.value === "") {
                                resumeData.lsLayout[0].record[
                                  index
                                ].responsibilities[i] =
                                  resData.lsLayout[0].record[
                                    index
                                  ].responsibilities[i];
                                setResumeData({
                                  ...resumeData,
                                });
                              }
                              setFlagr("");
                            }}
                          ></input>
                          <div className="flex flex-row ml-10 items-center">
                            <i
                              className={`fa-solid fa-circle-plus mx-2 cursor-pointer`}
                              onClick={() => {
                                resumeData.lsLayout[0].record[
                                  index
                                ].responsibilities.splice(
                                  i,
                                  0,
                                  resumeData.lsLayout[0].record[index]
                                    .responsibilities[i]
                                );
                                setResumeData({ ...resumeData });
                              }}
                            ></i>
                            {i >= 1 && (
                              <i
                                className="fa-solid fa-trash mx-2 "
                                onClick={() => {
                                  resumeData.lsLayout[0].record[
                                    index
                                  ].responsibilities.splice(i, 1);
                                  setResumeData({ ...resumeData });
                                }}
                              ></i>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div
                          className="text-sm mt-1"
                          onClick={() => {
                            setFlagr("responsibilities" + index + i);
                          }}
                        >
                          {respon}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    );
  };

  const educationDiv = () => {
    return (
      <>
        <div className="mt-10">
          <div className="flex flex-row justify-between items-center">
            {flagr === "edutitle" ? (
              <>
                <input
                  className={`text-xl font-bold border-y-2 outline-none w-36 border-black ${theme.primary_fg()}`}
                  value={resumeData.lsLayout[1].title.toUpperCase()}
                  onChange={(event) => {
                    resumeData.lsLayout[1].title = event.target.value;
                    setResumeData({
                      ...resumeData,
                    });
                  }}
                  onBlur={(event) => {
                    if (event.target.value === "") {
                      resumeData.lsLayout[1].title = resData.lsLayout[1].title;
                      setResumeData({
                        ...resumeData,
                      });
                    }
                    setFlagr("");
                  }}
                ></input>
                <div
                  onClick={() => {
                    resumeData.lsLayout[1].record.push(
                      addEducation(resumeData.lsLayout[1].record.length)
                    );
                    setResumeData({ ...resumeData });
                  }}
                >
                  <i
                    className={`ml-8 fa-solid fa-circle-plus cursor-pointer text-xl ${theme.primary_fg()}`}
                  ></i>
                </div>
              </>
            ) : (
              <span
                className={`text-xl font-bold border-y-2 border-black ${theme.primary_fg()}`}
                onClick={() => setFlagr("edutitle")}
              >
                {resumeData.lsLayout[1].title.toUpperCase()}
              </span>
            )}
          </div>
          {resumeData.lsLayout[1].record.map(
            (eduRecord: any, eduIndex: number) => {
              return (
                <>
                  <div className="flex flex-row justify-between items-center">
                    {flagr === "degree" + eduIndex ? (
                      <input
                        className="mt-5 text-xl font-bold outline-none"
                        value={resumeData.lsLayout[1].record[eduIndex].degree}
                        onChange={(event: any) => {
                          resumeData.lsLayout[1].record[eduIndex].degree =
                            event.target.value;
                          setResumeData({
                            ...resumeData,
                          });
                        }}
                        onBlur={(event: any) => {
                          if (event.target.value.trim() === "") {
                            resumeData.lsLayout[1].record[eduIndex].degree =
                              resData.lsLayout[1].record[0].degree;
                            setResumeData({
                              ...resumeData,
                            });
                          }
                          setFlagr("");
                        }}
                      ></input>
                    ) : (
                      <div
                        className="mt-5 text-xl font-bold"
                        onClick={() => setFlagr("degree" + eduIndex)}
                      >
                        {eduRecord.degree}
                      </div>
                    )}
                    {eduIndex >= 1 && flagr === "degree" + eduIndex && (
                      <div
                        className="ml-10 text-sm"
                        onClick={() => {
                          resumeData.lsLayout[1].record.splice(eduIndex, 1);
                          setResumeData({ ...resumeData });
                        }}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </div>
                    )}
                  </div>
                  {flagr === "university" ? (
                    <input
                      className="font-normal outline-none"
                      value={resumeData.lsLayout[1].record[eduIndex].university}
                      onChange={(event: any) => {
                        resumeData.lsLayout[1].record[eduIndex].university =
                          event.target.value;
                        setResumeData({
                          ...resumeData,
                        });
                      }}
                      onBlur={(event: any) => {
                        if (event.target.value.trim() === "") {
                          resumeData.lsLayout[1].record[eduIndex].university =
                            resData.lsLayout[1].record[0].university;
                          setResumeData({
                            ...resumeData,
                          });
                        }
                        setFlagr("");
                      }}
                    ></input>
                  ) : (
                    <div
                      className="font-normal"
                      onClick={() => setFlagr("university")}
                    >
                      {eduRecord.university}
                    </div>
                  )}
                  {flagr === "edudate" ? (
                    <input
                      className="outline-none italic w-full"
                      value={resumeData.lsLayout[1].record[eduIndex].date}
                      onChange={(event: any) => {
                        resumeData.lsLayout[1].record[eduIndex].date =
                          event.target.value;
                        setResumeData({
                          ...resumeData,
                        });
                      }}
                      onBlur={(event: any) => {
                        if (event.target.value.trim() === "") {
                          resumeData.lsLayout[1].record[eduIndex].date =
                            resData.lsLayout[1].record[0].date;
                          setResumeData({
                            ...resumeData,
                          });
                        }
                        setFlagr("");
                      }}
                    ></input>
                  ) : (
                    <div className="italic" onClick={() => setFlagr("edudate")}>
                      {eduRecord.date}
                    </div>
                  )}
                </>
              );
            }
          )}
        </div>
      </>
    );
  };

  const languageDiv = () => {
    return (
      <>
        <div className="mt-10">
          <div className="flex flex-row justify-between items-center">
            {flagr === "lantitle" ? (
              <>
                <input
                  className={`text-xl font-bold border-y-2 outline-none w-36 border-black ${theme.primary_fg()}`}
                  value={resumeData.lsLayout[2].title.toUpperCase()}
                  onChange={(event) => {
                    resumeData.lsLayout[2].record.lang = event.target.value;
                    setResumeData({
                      ...resumeData,
                    });
                  }}
                  onBlur={(event) => {
                    if (event.target.value === "") {
                      resumeData.lsLayout[2].title = resData.lsLayout[2].title;
                      setResumeData({
                        ...resumeData,
                      });
                    }
                    setFlagr("");
                  }}
                ></input>
                <div
                  onClick={() => {
                    resumeData.lsLayout[2].record.push(
                      addLanguage(resumeData.lsLayout[2].record.length)
                    );
                    setResumeData({ ...resumeData });
                  }}
                >
                  <i
                    className={`ml-8 fa-solid fa-circle-plus cursor-pointer text-xl ${theme.primary_fg()}`}
                  ></i>
                </div>
              </>
            ) : (
              <span
                className={`text-xl font-bold border-y-2 border-black ${theme.primary_fg()}`}
                onClick={() => setFlagr("lantitle")}
              >
                {resumeData.lsLayout[2].title.toUpperCase()}
              </span>
            )}
          </div>
          {resumeData.lsLayout[2].record.map(
            (lanRecord: any, lanIndex: number) => {
              return (
                <>
                  <div className="flex flex-row justify-between items-center">
                    {flagr === "lang" + lanIndex ? (
                      <>
                        <input
                          className="mt-5 text-base outline-none"
                          value={lanRecord.lang}
                          onChange={(event) => {
                            lanRecord.lang = event.target.value;
                            setResumeData({
                              ...resumeData,
                            });
                          }}
                          onBlur={(event) => {
                            if (event.target.value === "") {
                              lanRecord.lang =
                                resData.lsLayout[2].record[lanIndex].lang;
                              setResumeData({
                                ...resumeData,
                              });
                            }
                            setFlagr("");
                          }}
                        ></input>
                      </>
                    ) : (
                      <div
                        className="mt-5 text-base"
                        onClick={() => setFlagr("lang" + lanIndex)}
                      >
                        {lanRecord.lang}
                      </div>
                    )}
                    <div className="flex flex-row items-center mt-5 ">
                      <div className="flex mr-5">
                        {[...Array(5)].map((_num, i) => {
                          return (
                            <div
                              className={`${
                                lanRecord.rate <= i
                                  ? "bg-transparent"
                                  : theme.bg()
                              }  h-3 w-3 m-2 rounded-full border-2 cursor-pointer ${theme.border()} `}
                              onClick={() => {
                                lanRecord.rate = i + 1;
                                setResumeData({ ...resumeData });
                              }}
                            ></div>
                          );
                        })}
                      </div>
                      {lanIndex >= 1 && flagr === "lang" + lanIndex && (
                        <div
                          className="text-sm"
                          onClick={() => {
                            resumeData.lsLayout[2].record.splice(lanIndex, 1);
                            setResumeData({ ...resumeData });
                          }}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              );
            }
          )}
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col sm:w-1/2">
      {workExperienceDiv()}
      {educationDiv()}
      {languageDiv()}
    </div>
  );
};

export default LSLayout;

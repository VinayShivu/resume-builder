import { useState } from "react";
import Header from "../components/Header";
import { fontNames } from "../config/fontList";
import { useTheme } from "../hooks/useThemeHook";
import { useFontFamily } from "../hooks/useFontFamilyHook";
import LSLayout from "../components/LSLayout";
import RSLayout from "../components/RSLayout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Resume = () => {
  const [, setTheme] = useTheme();
  const [, setFont] = useFontFamily();
  const [flagr, setFlagr] = useState("");
  const [fontFam] = useFontFamily();
  const navigate = useNavigate();
  const resumeBuilderData = useSelector((state: any) => state.resumeData);

  const jsonDownload = () => {
    const blob = new Blob([JSON.stringify(resumeBuilderData)], {
      type: "text/json",
    });
    const data = document.createElement("a");
    data.download = "resume.json";
    data.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    data.dispatchEvent(clickEvt);
    data.remove();

    navigate("downloaded")
  }

  return (
    <div className={`flex flex-col items-center p-5 ${fontFam}`}>
      <div className="font-bold text-2xl">Resume Builder</div>
      <div className="border-solid border-2 p-5 mt-10 md:mx-56">
        <Header />
        <div className="flex">
          <LSLayout />
          <RSLayout />
        </div>
      </div>
      <div className="fixed cursor-pointer rounded-full flex flex-col bg-gray-300 bottom-20 right-4 shadow-lg border-2">
        <div
          className="w-11 h-12 flex justify-center items-center"
          onClick={() => jsonDownload()}
        >
          <i className="fa fa-download"></i>
        </div>
      </div>
      <div className="fixed flex flex-col bg-gray-300 bottom-4 right-4 border-2 w-12 h-12 rounded-3xl p-0 cursor-pointer">
        <div
          className="w-11 h-12 p-0 flex justify-center items-center"
          onClick={() => setFlagr("brushClicked")}
        >
          <i className="fa fa-brush"></i>
        </div>
      </div>
      {flagr === "brushClicked" && (
        <div className="fixed flex flex-col bg-gray-300 bottom-4 right-4 border-2 w-64 h-96 rounded-lg p-4">
          <div
            className="flex p-2 justify-end mb-4 cursor-pointer"
            onClick={() => setFlagr("")}
          >
            <i className="fa fa-times"></i>
          </div>
          <span className="text-lg font-bold mb-2">Select Theme</span>
          <div className="bg-gray-200 rounded-md w-auto py-2 px-5 flex justify-between items-center">
            <div
              className="w-10 h-10 bg-blue-bg rounded-full cursor-pointer"
              onClick={() => setTheme("blue")}
            ></div>
            <div
              className="w-10 h-10 bg-orange-bg rounded-full cursor-pointer"
              onClick={() => setTheme("orange")}
            ></div>
            <div
              className="w-10 h-10 bg-red-bg rounded-full cursor-pointer"
              onClick={() => setTheme("red")}
            ></div>
          </div>
          <span className="text-lg font-bold mt-8 mb-2">Select Font</span>
          <div className="flex items-center flex-wrap">
            {fontNames.map((item) => (
              <div
                className="p-2 bg-gray-200 m-1 w-auto font-medium border-2 rounded-md border-white cursor-pointer"
                onClick={() => setFont(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;

import { useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useThemeHook";

const GoBackScreen = () => {
  const [theme] = useTheme();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-slate-400">
      <div className="text-2xl my-5">File Downloaded</div>
      <div
        className={`${theme.bg()} text-xl border-2 rounded-md border-white cursor-pointer px-4 py-2 ${theme.secondary_fg()}`}
        onClick={() => navigate("/")}
      >
        Go Back
      </div>
    </div>
  );
};

export default GoBackScreen;

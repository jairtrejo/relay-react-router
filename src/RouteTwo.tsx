import { useNavigate } from "react-router-dom";
import AppChrome from "./AppChrome";

export default function RouteTwo() {
  const navigate = useNavigate();

  return (
    <AppChrome>
      <h2>Route two</h2>
      <button
        type="button"
        onClick={() => {
          navigate("/one");
        }}
      >
        one
      </button>
    </AppChrome>
  );
}


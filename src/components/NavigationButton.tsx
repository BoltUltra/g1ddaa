import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const HistoryNavigation = () => {
  const navigate = useNavigate();
  const [canGoBack, setCanGoBack] = React.useState(false);
  const [canGoForward, setCanGoForward] = React.useState(false);

  React.useEffect(() => {
    setCanGoBack(window.history.length > 1);
    setCanGoForward(window.history.state?.forward?.length > 0);

    const handlePopState = () => {
      setCanGoBack(window.history.length > 1);
      setCanGoForward(window.history.state?.forward?.length > 0);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleBack = () => {
    if (canGoBack) {
      navigate(-1);
    }
  };

  const handleForward = () => {
    if (canGoForward) {
      navigate(1);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={handleBack}
        disabled={!canGoBack}
        className={`h-5 w-5 flex items-center justify-center rounded-md transition-colors ${
          canGoBack
            ? "bg-gray-100 hover:bg-gray-200 cursor-pointer"
            : "bg-gray-50 cursor-not-allowed"
        }`}
        aria-label="Go back"
      >
        <FaCaretLeft
          className={canGoBack ? "text-gray-700" : "text-gray-300"}
          size={14}
        />
      </button>
      <button
        onClick={handleForward}
        disabled={!canGoForward}
        className={`h-5 w-5 flex items-center justify-center rounded-md transition-colors ${
          canGoForward
            ? "bg-gray-100 hover:bg-gray-200 cursor-pointer"
            : "bg-gray-50 cursor-not-allowed"
        }`}
        aria-label="Go forward"
      >
        <FaCaretRight
          className={canGoForward ? "text-gray-700" : "text-gray-300"}
          size={14}
        />
      </button>
    </div>
  );
};

export default HistoryNavigation;

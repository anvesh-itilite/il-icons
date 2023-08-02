import { useState } from "react";
import IconList from "./components/IconList";
import Icon, { IconMap } from "./assets/Icon";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer, toast } from "react-toastify";
import ReactDOMServer from "react-dom/server";

let iconArray = Object.entries(IconMap);

function App() {
  const [search, setSearch] = useState("");

  // Copy to clipboard code

  const [isCopied, setIsCopied] = useState(false);
  const handleIconClick = (returnStatement) => {
    copyToClipboard(returnStatement);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500); // Hide "Path copied" message after 1.5 seconds
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Text copied to clipboard:", text);
        toast.success("SVG copied", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          draggable: false,
          transition: Slide,
        });
      },
      (error) => {
        console.error("Failed to copy text to clipboard:", error);
        toast.error("Copy failed", {
          position: "bottom-center",
          autoClose: 1000,
        });
      }
    );
  };

  // Copy to clipboard code ends

  return (
    <>
      <div className="container mx-auto mt-10 px-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search icons"
          className="mb-10 w-80 rounded-lg border border-gray-200 px-4 py-2"
        ></input>

        <div className="text-body1 font-semibold text-gray-700">24px icons</div>
        <div className="mt-2 grid gap-px overflow-clip rounded-lg border border-gray-200 bg-white sm:grid-cols-2 md:grid-cols-4">
          {iconArray
            .filter((a) => {
              return search.toLowerCase() === ""
                ? a
                : a[0].toLowerCase().includes(search);
            })
            .map(([iconName, IconComponent], i) => {
              const returnStatement = ReactDOMServer.renderToString(
                <Icon name={iconName} color="currentColor" />
              ); // Get the return statement as a string
              return (
                <button
                  key={i}
                  onClick={() => handleIconClick(returnStatement)}
                  className="flex items-center gap-4 p-4 font-['IBM_Plex_Sans'] text-body2 text-gray-700 outline outline-1 outline-gray-100 hover:bg-orange-80"
                >
                  <div className="flex h-6 w-6 items-center justify-center ">
                    <Icon name={iconName} color="currentColor" />
                  </div>
                  <span>{IconComponent.name}</span>
                </button>
              );
            })}
        </div>
        <ToastContainer newestOnTop />
        {/* {isCopied && <div className="toast-message">Path copied</div>} */}
      </div>
    </>
  );
}

export default App;

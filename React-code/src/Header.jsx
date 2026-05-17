import "./All.css";
import { useState, useReducer, useEffect } from "react";
import { Search, X, Moon, Sun, User } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Maincomponent() {
  const [hide, setHide] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Header ">
      {hide || <HeadLogo />}
      <SearchBar setHide={setHide} hide={hide} windowWidth={windowWidth} />
      {hide || <ThemeToggle />}
      {hide || <LoginSignUpICON windowWidth={windowWidth} />}
    </div>
  );
}

function HeadLogo() {
  return (
    <a href="#" className={`HeaderLogo`}>
      <img
        alt="logo"
        src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
        className={` w-auto h-auto`}
      />
    </a>
  );
}

const SearchBar = (prop) => {
  // FullSearchWidth FUNCTION ----
  function FullSearchWidth() {
    return (
      <div className="flex items-center justify-between w-full mt-2  ">
        <input
          type="text"
          placeholder="Search..."
          className="InputField border-2cc  rounded-full p-2 mr-2 bg-white"
        />
        <div
          className="size-8 flex justify-center items-center text-themeIcon rounded-full"
          onClick={() => {
            prop.setHide(false);
          }}
        >
          <X size={18} />
        </div>
      </div>
    );
  }

  // search bar for mobile----
  function SearchBarForMobile() {
    return (
      <>
        <div
          className={`SearchBarMobile ${prop.hide && "hidden"}`}
          onClick={() => {
            prop.setHide(true);
          }}
        >
          <Search size={18} />
        </div>

        {prop.hide ? <FullSearchWidth /> : null}
      </>
    );
  }

  // search bar for desktop----
  function SearchBarDesktop() {
    const [value, setValue] = useState("");

    return (
      <>
        <label className="SearchBar">
          <input
            type="text"
            className="InputField"
            id="searchbar"
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          {value ? (
            <div className="SearchIcons" onClick={() => setValue("")}>
              <X size={18} />
            </div>
          ) : (
            <div className="SearchIcons">
              <Search size={18} />
            </div>
          )}
        </label>
      </>
    );
  }
  // return function of SearchBar
  return prop.windowWidth <= 431 ? SearchBarForMobile() : SearchBarDesktop();
};

const ThemeToggle = () => {
  const Reducer = (state, action) => {
    const globaltheme = document.querySelector("body");

    if (action === "DarkTheme") {
      globaltheme.setAttribute("class", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      globaltheme.setAttribute("class", null);
      localStorage.setItem("theme", null);
    }
  };

  const selectedTheme = localStorage.getItem("theme");
  selectedTheme === "dark" ? Reducer("", "DarkTheme") : null;

  const [themeT, setthemeT] = useState(selectedTheme === "dark" ? false : true);
  const [state, dispatch] = useReducer(Reducer, null);

  return (
    <div
      className="themeToggle"
      onClick={() => {
        setthemeT(!themeT);
        themeT ? dispatch("DarkTheme") : dispatch(null);
      }}
    >
      {themeT ? <Moon size={18} /> : <Sun size={18} />}
    </div>
  );
};

const LoginSignUpICON = (props) => {
  return (
    <div className="gap-x-3 flex cursor-pointer">
      {props.windowWidth <= 440 || (
        <button size="lg" variant="outline" className=" cursor-pointer">
          <b>Login</b>
        </button>
      )}
      <Button variant="outline" size="lg">
        {/* {props.windowWidth <= 440 ? <User /> : <b>SignUp</b>} */}
        <User />
        SignUp
      </Button>
    </div>
  );
};

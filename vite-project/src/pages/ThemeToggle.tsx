import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import "@/index.css"


export const ThemeToggle = () => {
    // contain "USER'S SYSTEM DEFAULT THEME" if Dark then variable contain -> true else false
    const usrDefltTheme = window.matchMedia("(prefers-color-scheme: dark)",).matches;

    const [themeT, setthemeT] = useState<boolean>(() => { // useState hook
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "dark";
        return usrDefltTheme;
    });

    const Toggle = (state: string) => { // Theme Toggle function
        if (state === "DarkTheme") {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setthemeT(true);
        }
        else if (state === "LightTheme") {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setthemeT(false);
        }
    };

    useEffect(() => {
        themeT ? Toggle("DarkTheme") : null;
    }, [themeT]);

    //  return Element--------*
    return (
        <button
            className="themeToggle"
            onClick={() => {
                setthemeT(!themeT);
                themeT ? Toggle("LightTheme") : Toggle("DarkTheme");
            }}
        >
            {themeT ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
};
"use client"

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import "../globals.css"


export const ThemeToggle = () => {
    

    const [themeT, setthemeT] = useState<boolean>(false);
    

    const Toggle = (state: string) => { 
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
        (themeT || (localStorage.getItem("theme") === "dark")) ? Toggle("DarkTheme") : null;
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
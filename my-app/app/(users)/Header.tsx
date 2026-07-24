"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar"
import { ThemeToggle } from "./themeToggle";
import { LoginButton } from "../login/page";
import { SignUpButton } from "../signup/page";



export default function Header() {
    const [hide, setHide] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (<>
        <header className="Header">
            {hide || <Link href="/"> <HeadLogo /> </Link>}
            <SearchBar setHide={setHide} hide={hide} windowWidth={windowWidth} />
            {hide || <ThemeToggle />}
            {hide || <ul className="flex gap-3">
                {windowWidth <= 530 ? "" : <li> <Link href="/login" ><LoginButton /></Link></li>}
                <li> <Link href="/signup" > <SignUpButton />  </Link></li>
            </ul>}

        </header>

    </>
    );
}


function HeadLogo() {
    return (
        <img
            alt="logo"
            src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
            className={`HeaderLogo`}
        />

    );
}


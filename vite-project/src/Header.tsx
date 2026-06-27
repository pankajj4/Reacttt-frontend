import { useState } from "react";
import { LoginButton } from "./pages/Login";
import { SignUpButton } from "./pages/SignUp";
import { ThemeToggle } from "./pages/ThemeToggle";
import { SearchBar } from "./pages/SearchBar";
import { NavLink, Outlet } from "react-router";
import "./index.css"

// *------------------------------------ Default Function -----------*/
export function Header({ windowWidth }: { windowWidth: number }) {

    const [hide, setHide] = useState<boolean>(false);

    return (<>
        <ul className="Header">
            <li><NavLink to="/"> <HeadLogo /> </NavLink>  </li>
            <li> <SearchBar setHide={setHide} hide={hide} windowWidth={windowWidth} /> </li>
            <li> <ThemeToggle /> </li>
            <ul className="flex gap-3">
                {windowWidth <= 530 ? "" : <li> <NavLink to="/login" ><LoginButton /></NavLink></li>}
                <li> <NavLink to="/signup" > <SignUpButton />  </NavLink></li>
            </ul>
        </ul>
        <Outlet />
    </>
    );
}



// *------------------------------------ HeadLogo Function ---------*/
function HeadLogo() {
    return (
        <img
            alt="logo"
            src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
            className={`w-auto h-auto`}
        />

    );
}











// ------------------Main SearchBar function (which returns SearchBarDesktop function)----------------*
// function SearchBar(prop: SearchBarProps) {
//     const [value, setValue] = useState<string>("");

//     if (prop.windowWidth <= 431) {
//         return (
//             <>
//                 {!prop.hide && (
//                     <div className="SearchBarMobile" onClick={() => prop.setHide(true)}>
//                         <Search size={18} />
//                     </div>
//                 )}

//                 {prop.hide && (
//                     <div className="flex items-center justify-between w-full mt-2">
//                         <input
//                             type="text"
//                             id="fullSearchWidth"
//                             placeholder="Search..."
//                             className="InputField border-2 rounded-full p-2 mr-2 bg-white"
//                             value={value}
//                             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                                 setValue(e.target.value)
//                             }
//                         />
//                         <div
//                             className="size-8 flex justify-center items-center text-themeIcon rounded-full"
//                             onClick={() => {
//                                 prop.setHide(false);
//                                 setValue("");
//                             }}
//                         >
//                             <X size={18} />
//                         </div>
//                     </div>
//                 )}
//             </>
//         );
//     }

//     return <SearchBarDesktop value={value} setValue={setValue} />;
// }

/*---------------------------------- ThemeToggle Function -----*/
// const ThemeToggle = () => {
//     // contain "USER'S SYSTEM DEFAULT THEME" if Dark then variable contain -> true else false
//     const usrDefltTheme = window.matchMedia("(prefers-color-scheme: dark)",).matches;

//     const [themeT, setthemeT] = useState<boolean>(() => { // useState hook
//         const saved = localStorage.getItem("theme");
//         if (saved) return saved === "dark";
//         return usrDefltTheme;
//     });

//     const Toggle = (state: string) => { // Theme Toggle function
//         if (state === "DarkTheme") {
//             document.body.classList.add("dark");
//             localStorage.setItem("theme", "dark");
//             setthemeT(true);
//         }
//         else if (state === "LightTheme") {
//             document.body.classList.remove("dark");
//             localStorage.setItem("theme", "light");
//             setthemeT(false);
//         }
//     };

//     useEffect(() => {
//         themeT ? Toggle("DarkTheme") : null;
//     }, [themeT]);

//     //  return Element--------*
//     return (
//         <button
//             className="themeToggle"
//             onClick={() => {
//                 setthemeT(!themeT);
//                 themeT ? Toggle("LightTheme") : Toggle("DarkTheme");
//             }}
//         >
//             {themeT ? <Sun size={18} /> : <Moon size={18} />}
//         </button>
//     );
// };


/*---------------------------------- Login SignUp Icon Function -----*/
// const LoginSignUpICON = (props: { windowWidth: number }) => {
//     return (
//         <div className="gap-x-3 flex cursor-pointer">
//             {props.windowWidth <= 559 || (
//                 <Button size="lg" variant="ghost" className=" cursor-pointer">
//                     <b>Login</b>
//                 </Button>
//             )}
//             <Button variant="outline" size="lg" className=" cursor-pointer" >
//                 <User />
//                 SignUp
//             </Button>
//         </div>
//     );
// };

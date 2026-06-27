import { Button } from "@/components/ui/button";
import "@/index.css"
import { useNavigate } from "react-router";



export function SignUpButton() {
    return (<Button size="lg" variant="outline" className={"cursor-pointer"}>
        <b>SignUp</b>
    </Button>)
}

export const SignUp = () => {
const Navigate = useNavigate();

    return (
        <div className="FormHtmlBody">
            <div className="MainFormDiv">
                <p className="text-[.7rem] select-none cursor-pointer text-black " onClick={()=>Navigate(-1)}>
                    {"<-Back"}
                </p>
                <h1 className=" text-center select-none text-black text-[1.75rem]  mt-3 mb-8 ">
                    <b>Create Account </b>
                </h1>
                <div className="w-full flex flex-col gap-4.5 mb-3 mt-5">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        autoComplete="given-name"
                        className="FormUI"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        autoComplete="given-name"
                        className="FormUI"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        autoComplete="given-name"
                        className="FormUI"
                    />
                    <button className="px-3 py-2.5 font-sans rounded-[1.25rem] border-0 outline-none bg-teal-600 text-white cursor-pointer shadow-[rgba(0,0,0,0.24)_0px_3px_8px] active:shadow-none">
                        Create account
                    </button>
                </div>
                <p className="m-0 text-[1rem] text-[#747474] select-none">
                    Already have an account? {"   "}
                    <span className="text-[0.8rem] underline decoration-teal-600 text-teal-600 cursor-pointer select-none font-extrabold" onClick={()=>Navigate("/login")}>
                        LogIn
                    </span>
                </p>
            </div>
        </div>
    );
              



};



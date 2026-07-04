import { Button } from "@/components/ui/button";
import "@/index.css"
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useNavigate, Form, type ActionFunctionArgs } from "react-router";



export function SignUpButton() {
    return (<Button size="lg" variant="outline" className={"cursor-pointer"}>
        <b>SignUp</b>
    </Button>)
}

export const SignUp = () => {
    const Navigate = useNavigate();
    const [passHidden, setPassHid] = useState<boolean>(true);

    return (
        <div className="FormHtmlBody">
            <div className="MainFormDiv">
                <button className="text-[.7rem] select-none cursor-pointer text-black " onClick={() => Navigate(-1)}>
                    {"<-Back"}
                </button>
                <h1 className=" text-center select-none text-black text-[1.75rem]  mt-3 mb-8 ">
                    <b>Create Account </b>
                </h1>
                <Form className="w-full flex flex-col gap-4.5 mb-3 mt-5" method="post" action="/signup">
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
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
                    <div className="FormUI flex p-0 items-center ">

                        <input
                            type={passHidden ? "password" : "text"}
                            placeholder="Password"
                            name="password"
                            autoComplete="given-name"
                            className="FormUI border-none "
                        />
                        <button type="button" onClick={() => setPassHid(!passHidden)} className="cursor-pointer mr-1 ">
                            {passHidden ? <EyeClosed size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <button type="submit" className="px-3 py-2.5 font-sans rounded-[1.25rem] border-0 outline-none bg-teal-600 text-white cursor-pointer shadow-[rgba(0,0,0,0.24)_0px_3px_8px] active:shadow-none">
                        Create account
                    </button>
                </Form>
                <p className="m-0 text-[1rem] text-[#747474] select-none">
                    Already have an account? {"   "}
                    <button className="text-[0.8rem] underline decoration-teal-600 text-teal-600 cursor-pointer select-none font-extrabold" onClick={() => Navigate("/login")}>
                        LogIn
                    </button>
                </p>
            </div>
        </div>
    );
};


export const SignUpAction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    alert(JSON.stringify(data, null, 2))

}


import { Button } from "@/components/ui/button";
// import { User } from "lucide-react";
import "@/index.css"

export const Login = (props: { windowWidth: number }) => {
    return (
        <>
            <h1>Login</h1>
        </>
    );
};

export function LoginButton() {
    return <Button size="lg" variant="ghost"  className={"cursor-pointer"}> 
        <b>Login</b>
    </Button>

}
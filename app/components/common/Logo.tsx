const logoDark = "/logo-dark.png";
const logoLight = "/logo-light.png";
import Image from "next/image";
import Link from "next/link";

interface Mode {
    mode: "light" | "dark";
}

export const Logo = ({ mode }: Mode) => {
    return (
        <Link className="h-auto w-auto" href="/">
            {mode === "dark" ? 
                <Image src={logoDark} width={219.54} height={36} alt="Logo Dark" /> : 
                <Image src={logoLight} width={219.54} height={36} alt="Logo Light" 
            />}
        </Link>
    );
}
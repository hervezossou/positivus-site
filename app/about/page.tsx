import { NavLink } from "../components/common/atoms/NavLink";

export default function Page() {
    return (
        <main>
            <h1>About Page</h1>
            <NavLink href="/about" label="About" />
        </main>
    )
}
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";


export default function LayoutPage() {

    return <>
        <NavBar />

        <main className="grow overflow-scroll">
            <Outlet />
        </main>

        <Footer />
    </>
}
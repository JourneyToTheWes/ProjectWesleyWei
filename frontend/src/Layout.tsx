import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import Navbar from "./components/Navbar";

export default function Layout() {
    return (
        <div className="min-h-screen">
            <ScrollToTop />
            <Navbar />

            <main>
                <Outlet />
            </main>
        </div>
    );
}

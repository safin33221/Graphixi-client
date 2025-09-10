import type { ReactNode } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

export default function CommonLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <nav>
                <Navbar />
            </nav>
            <main className="grow-1">

                {children}
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

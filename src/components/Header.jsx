import { useState, useEffect } from "react";
import { headerLinks } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
    const [glassy, setGlassy] = useState(false);
    // Animate elements in the header
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            ".nav-links",
            { y: -30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.6,
                ease: "power2.out",
            }
        );
    }, []);
    // Listen to scroll changes once
    useEffect(() => {
        const handleGlassy = () => {
            setGlassy(window.scrollY >= 60);
        };
        window.addEventListener("scroll", handleGlassy);
        return () => window.removeEventListener("scroll", handleGlassy);
    }, []);

    // Animate only when glassy is true
    useGSAP(() => {
        const nav = document.querySelector("nav");

        if (glassy) {
            gsap.to(nav, {
                backgroundColor: "#00000050",
                backdropFilter: "blur(10px)",
                duration: 0.6,
                ease: "power1.inOut",
            });
        } else {
            gsap.to(nav, {
                backgroundColor: "transparent",
                backdropFilter: "blur(0px)",
                duration: 0.6,
                ease: "power1.inOut",
            });
        }
    }, [glassy]);

    return (
        <nav id="main" className="fixed top-0 left-0 w-full z-50 p-4">
            <div className="flex justify-between items-center">
                <span>Portfolio</span>
                <ul className="flex gap-6">
                    {headerLinks.map((e) => (
                        <li key={e.id} className="nav-links">
                            {e.title}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Header;

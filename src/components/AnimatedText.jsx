import React, { useEffect, useState } from "react";

const AnimatedText = () => {
    const texts = ["Web Developer", "Front-end Dev", "Mobile Developer"];
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = texts[currentIndex];
        const speed = deleting ? 50 : 150;

        const timer = setTimeout(() => {
            setCurrentText(
                deleting
                    ? current.substring(0, currentText.length - 1)
                    : current.substring(0, currentText.length + 1)
            );

            if (!deleting && currentText === current) {
                setTimeout(() => setDeleting(true), 2000); // pause before deleting
            } else if (deleting && currentText === "") {
                setDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % texts.length);
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [currentText, deleting, currentIndex, texts]);

    return (
        <div className="text-center md:text-start">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {currentText}
                <span className="inline-block h-7 md:h-14 w-0.5 bg-white animate-pulse ml-2"></span>
            </h1>
        </div>
    );
};

export default AnimatedText;

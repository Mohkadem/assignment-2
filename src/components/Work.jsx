import { useState } from "react";
import { works, buttons } from "../../constants/index";
import Card from "./Card";

const Work = () => {
    const [active, setActive] = useState(buttons[0].id);
    const [search, setSearch] = useState("");
    const filteredWord = search
        ? works.filter((work) =>
              work.title.toLowerCase().includes(search.toLowerCase())
          )
        : works;

    const filteredWorks = works.filter((work) => {
        const matchesCategory =
            active === "all" ? true : work.category === active;
        const matchesSearch = work.title
            .toLowerCase()
            .includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    return (
        <div id="work" className="work h-screen overflow-hidden scroll-mt-20 ">
            <div className="buttons">
                {buttons.map((e) => (
                    <button
                        key={e.id}
                        className={`button ${
                            active === e.id ? "bg-blue-400" : "bg-transparent"
                        }`}
                        onClick={() => setActive(e.id)}
                    >
                        {e.title}
                    </button>
                ))}
            </div>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search works...."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <section>
                <div className="cards">
                    {filteredWord.length > 0 ? (
                        filteredWord.map((e) => (
                            <Card
                                key={e.id}
                                title={e.title}
                                disc={e.disc || "Amazing project"}
                                className="bg-gray-100 dark:bg-gray-800"
                            />
                        ))
                    ) : (
                        <p>No works found.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Work;

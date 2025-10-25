const Title = ({ title, sub }) => {
    return (
        <div className="flex flex-col items-center text-center gap-5">
            <div className="hero">
                <p>{sub}</p>
            </div>
            <div className="font-semibold md:text-3xl  text-center">
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Title;

const Card = ({ title, disc, img }) => {
    return (
        <div
            className="card"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
            }}
        >
            <h1>{title}</h1>
            <p>{disc}</p>
        </div>
    );
};

export default Card;

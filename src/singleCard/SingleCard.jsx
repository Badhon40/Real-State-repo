import { Link } from "react-router-dom";


const SingleCard = ({data}) => {
    const {image, estate_title,id, description}=data;
    return (
        <div>
            <div className="card h-96 card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                <Link to={`/card/${id}`}><button className="btn bg-red-600 text-white">View Details</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleCard;
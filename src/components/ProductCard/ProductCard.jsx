import "./ProductCard.css"
import { Link } from "react-router-dom";

const ProductCard = ({ label, category, id }) => {
    return (
        <div>
            <h3>{label}</h3>
            <p>{category}</p>
            <Link className="link" to={id.toString()}>{label}</Link>
        </div>
    )
}

export default ProductCard;
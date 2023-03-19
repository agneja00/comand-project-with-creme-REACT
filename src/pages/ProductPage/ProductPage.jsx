import "./ProductPage.css"
import { useParams } from "react-router-dom";
import productsList from "../../data/products";

const ProductPage = () => {
    const { id } = useParams();
    console.log(id);
    const product = productsList.find((product) => product.id === Number.parseInt(id)) || {};
    return (
        <section className="section">
            <div className="container">
                <div className="img-container">
                    <img className="image" src={product.img} alt={product.label} />
                </div>
                <h2>{product.label}</h2>
                <span>{product.category}</span>
                <p>{product.about}</p>
                <b>{product.price}$</b>
            </div>
        </section>
    )
}

export default ProductPage;
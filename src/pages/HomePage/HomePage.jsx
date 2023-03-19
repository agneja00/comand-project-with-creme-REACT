import "./HomePage.css";
import { Link } from 'react-router-dom';
import routes from "../../constants/routes";

const HomePage = () => {
    return (
        <div className="home">
            <h1>
                My react router project
            </h1>
            <Link className="link-btn" to={routes.productsPage}>Products Page</Link>
        </div>
    )
}

export default HomePage;
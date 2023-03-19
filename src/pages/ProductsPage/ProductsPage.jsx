import "./ProductsPage.css"
import productsList from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import Select from "../../components/Select/Select";
import { useState } from "react";

const optionsList = productsList.reduce((acc, product) => {
    acc.push({
        value: product.category,
        text: product.category,
    })
    return acc;
}, [{ value: "all", text: "All" }])

const optionsElements = optionsList.map((option) => (<option key={option.value} value={option.value}> {option.text} </option>));
const defaultOption = optionsList[0].value;

const ProductsPage = () => {
    const [selectedOption, setSelectedOption] = useState(defaultOption);

    const handleChange = (event) => {
        setSelectedOption(event.target.value)
    }

    const filteredProducts = selectedOption === defaultOption ? productsList : productsList.filter(product => product.category === selectedOption)

    return (
        <div className="products-page-container">
            <Select options={optionsElements} onChange={handleChange} />
            <div className="grid">
                {filteredProducts && filteredProducts.map((product) => {
                    return <ProductCard label={product.label} category={product.category} key={product.id} id={product.id} />
                })}
            </div>
        </div>
    )
}

export default ProductsPage;
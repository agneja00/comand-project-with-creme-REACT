import "./Select.css"

const Select = ({ options, onChange }) => {
    return (
        <select className="select" name="products" onChange={onChange}>
            {options}
        </select>
    )
}

export default Select;
import Price from "./Price";
function Products({ title, index}) {
    let oldPrices = ["100", "200", "300", "400"];
    let newPrices = ["90", "180", "270", "360"];
    let Description = ["This is a best product", "This is 2nd a best product", "This is 3rd a best product", "This is 4th a best product"];
    return (
        <div className="m-4 p-6 border-2  border-b-black rounded-4xl shadow-lg w-60 h-40">
            <h4>{title}</h4>
            <p>{Description[index]}</p>
            <Price oldPrice={oldPrices[index]} newPrice={newPrices[index]} />
        </div>
    );
}
export default Products;
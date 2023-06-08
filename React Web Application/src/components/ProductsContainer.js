import ProductCard from "./ProductCard";

const ProductsContainer = ({ pokes }) => {
	return (
		<div className="products-container">
			{pokes.map((poke) => {
				const uniqueKey = poke.uniqueId ? poke.uniqueId : poke.pokeId;
				return <ProductCard key={uniqueKey} poke={poke} />;
			})}
		</div>
	);
};

export default ProductsContainer;

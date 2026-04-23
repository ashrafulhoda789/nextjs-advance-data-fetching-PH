import Product from "@/components/Product";

const getProducts = async() =>{
    const res = await fetch('http://localhost:5000/products', {cache: 'no-store'});
    return res.json();
}

const ProductsPage = async() => {

    const products = await getProducts();
    return (
        <div>
            <h2>Products: {products.length}</h2>
            <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;
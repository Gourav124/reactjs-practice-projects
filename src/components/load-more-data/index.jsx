import { useEffect, useState } from "react"
import './styles.css';

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        setLoading(true);
        try {
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
            );

            const result = await response.json();
            setLoading(false);

            setProducts((prev) => [...prev, ...result.products]);

        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    return (
        <div className="load-more-container">

            <div className="product-container">
                {products.map((item) => (
                    <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>

            <div className="button-container">
                <button onClick={() => setCount(count + 1)}>
                    {loading ? "Loading..." : "Load More Products"}
                </button>
            </div>
        </div>
    );
}
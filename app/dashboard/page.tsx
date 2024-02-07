import ProductCard from "./components/ProductCard";
import { productsData } from "./utils/productsData";

const page = () => {
  return (
    <div className="w-5/6 mx-auto mt-8">
      {productsData.map((product) => (
        <div className="mt-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default page;

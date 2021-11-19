import { Link } from "react-router-dom";
import "./Product.css";

export default function Product() {
  return (
    <div className="Product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
    </div>
  );
}

import { useCart } from "react-use-cart";
import { useThemeHook } from "../GloabalComponents/ThemeProvider";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";


const ProductCard = (props) => {
  let { image, price, title, id, rating } = props.data;
  const [theme] = useThemeHook();
  const { addItem } = useCart();
  const addToCart = () => {
    addItem(props.data);
  };
  return (
    <Card
      style={{ width: "18rem", height: "auto" }}
      className={`${
        theme ? "bg-light-black text-light" : "bg-light text-black"
      } text-center p-0 overflow-hidden shadow mx-auto mb-4`}
    >
      <Link to={`/product-details/${id}`}>
        <div
          style={{
            background: "white",
            height: "15rem",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "inherit",
          }}
        >
          <div style={{ width: "9rem" }}>
            <Card.Img variant="top" src={image} className="img-fluid" />
          </div>
        </div>
      </Link>
      <Card.Body>
        <Card.Title
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Card.Title>
        <Card.Title>
          Rs. <span className="h3">{price}</span>
        </Card.Title>
        <Button
          className={`${
            theme ? "bg-dark-primary text-black" : "bg-light-primary"
          } d-flex align-item-center m-auto border-0`}
          onClick={() => addToCart()}
        >
          <BsPlusLg size="1.8rem" />
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

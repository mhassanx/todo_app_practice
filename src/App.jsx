import "./App.css";
import Product from "./Product";
import "./Product.css";
import Todo from "./Todo";

function App() {
  let products = [
    {
      title: "laptop",
      desc: "this is a laptop",
      price: 1000,
    },
    {
      title: "mobile",
      desc: "this is a mobile",
      price: 3500,
    },
    {
      title: "laptop",
      desc: "this is a laptop",
      price: 1000,
    },
  ];

  
  return (
    <div>
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          desc={product.desc}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default App;

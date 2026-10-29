export default function Product({ title, desc, price }) {
  let isDiscount = price > 3000 ? "You got 5% discount" : "";
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{desc}</p>

      <p>{price}</p>
    </div>
  );
}

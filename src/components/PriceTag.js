function PriceTag(props) {
  function formatPrice(price) {
    return parseFloat(price).toFixed(2);
  }
  return (
    <>
      <div>
        <span className="fw-bold text-success">&#x20B9;{formatPrice(props.price)}</span>
      </div>
    </>
  );
}

export default PriceTag;

const NavigationCart = ({ cartItems, addToCart }) => {
  return (
    <>
    <div>
      <button className="navigation-cart__button">Cart</button>
      <ul className="menu">
        {cartItems.map(item => (
          <li>
            {item.title} - Size {item.variant.size} - {item.quantity}
            <button onClick={() => addToCart(item)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
    <style jsx>
      {`
        .menu {
          width: 200px;
        }
        .navigation-cart__button {
          display: block;
          border: 2px solid black;
          padding: 5px;
          width: auto;
          background: white;
      }

        .navigation-cart__button:hover {
            background: grey;
            color: white;
            cursor: pointer;
        }
      `}
    </style>
    </>
  );
}

export default NavigationCart;
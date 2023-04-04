import NavigationCart from '../../components/navigation-cart';

const CartSection = ({ cartItems, addToCart }) => {
  return (
    <NavigationCart cartItems={cartItems} addToCart={addToCart} />
  );
}

export default CartSection;
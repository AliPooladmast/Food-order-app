import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { connect } from "react-redux";
import { setIsCartShown } from "../../actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onCloseCart: () => dispatch(setIsCartShown(false)),
});

const Cart = (props) => {
  const { onCloseCart } = props;

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}{" "}
    </ul>
  );
  return (
    <Modal>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>29.25</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

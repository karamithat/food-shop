import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/common/Logo/index";
import Menu from "../../components/common/Menu/index";
import Footer from "../../components/common/Footer/index";
import "./styles.css";
import EmptyCart from "../../components/Cart/EmptyCart";
import { selectCartItems, selectCartItemsCount, selectCartTotal } from "../../redux/cart/cart.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Cart = ({cartCount,cartList,cartTotal}) => {
  return (
    <>
      <div className="cartHeader">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {cartCount===0 ?<EmptyCart/> : (
      

      <div className="orders">
        <h1 className="ordersHeading">Your Orders</h1>
        <div className="ordersMenu">
          <Menu list={cartList} />
        </div>
        <h3 className="ordersTotal">Your Total ${cartTotal}</h3>
      </div>
      ) }
      <Footer />
      
 
    </>
  );
};


const mapStateToProps = createStructuredSelector({
  cartCount:selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
})

export default connect(mapStateToProps)(Cart);

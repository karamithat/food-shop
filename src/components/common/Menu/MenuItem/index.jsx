import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { cartAddItem, cartRemoveItem } from '../../../../redux/cart/cart.action';
import { selectCartItems, selectCartItemsCount } from '../../../../redux/cart/cart.selector';
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import "./styles.css";



const MenuItem = ({item, cartCount, cartList,cartAddItem,cartRemoveItem}) => {
  const { id, img, name, price, info } = item;


  const handleQuantity = () => {
    let quantity = 0;
    if(cartCount!==0){
      const foundItemInCart = cartList.find((item) => item.id === id);

      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }

    return quantity;
  }
  return (
    <div className='item'>
      <img src={img} alt="item" />
      <div className="itemHeadDesc">
        <p className='headDescName'>{name}</p>
        <p className='headDescInfo'><small>{info}</small></p>
      </div>
      <div className="itemFootDesc">
        <span className='footDescPrice'>${price}</span>
        <ButtonAddRemoveItem quantity={handleQuantity()} handleAddItem={()=>cartAddItem(item)} handleRemoveItem={()=>cartRemoveItem(item)}/>
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartCount:selectCartItemsCount,
  cartList: selectCartItems,
})

const mapDispatchToProps = dispatch => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps,mapDispatchToProps)(MenuItem);
import React from "react";
import './../../index.css'
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import {FaHome} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";

function Cart() {
  const navigate = useNavigate();
  const paymentGatway =()=>{
      navigate('/payment');
  }
  
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
    // console.log(items);
  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;
  return (
    <>
     <Payment /> 
    
    {/* go back to home */}
     <li className="cart_home">
              <NavLink to="/home" className='fs-1 pt-5 '
              style={({isActive})=> {return {backgroundColor: isActive ? '#6d1b7b' : ''}}}> <FaHome/> </NavLink>
    </li>
    {/* card table */}
      <section className=" cart_item1 py-4 container w-75">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              cart({totalUniqueItems}) total Items:({totalItems})
            </h5>
            <table className="table table-light table-hover m-0">
              <tbody className="tbody">
                {items.map((ele, index) => {
                  return (
                    <tr key={index} id="cart_item1">
                      <td>
                        <img src={ele. imgUrl} alt="photo" width={100} />
                      </td>
                      <td>{ele.name} </td>
                      <td>{ele.price} </td>
                      <td> Quantity:{ele.quantity} </td>
                      <td>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(ele.id, ele.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(ele.id, ele.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger p-2 ms-1 mt-2"
                          onClick={() => removeItem(ele.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2>Total Price: ₹ {cartTotal}</h2>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={emptyCart}>
              Clear Cart
            </button>
            <button className="btn btn-primary m-2" onClick={paymentGatway}>Order</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;

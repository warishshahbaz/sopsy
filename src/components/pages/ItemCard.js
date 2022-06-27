import React from 'react'
import { useCart } from 'react-use-cart'

function ItemCard({text,id}) {
  const {addItem} = useCart()
  return (
  <>
     <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={id}>
        <div class="card p-0 overflow-hidden h-100 shadow">
          <img class="cart_img" src={text.imgUrl} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{text.name}</h5>
            <p class="card-text">{text.price}$</p>
            <button class="btn btn-success" onClick={(id)=>addItem(text)} >
              Add Cart
            </button>
          </div>
        </div>
      </div>
  </>
  )
}

export default ItemCard
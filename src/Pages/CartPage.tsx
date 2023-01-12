import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteFromCart, updateQuantity } from '../features/DataSlice'
type StateType={
  Cart:{
     id:number  
     image:string   
     price:number 
     quantity:number
     rating:number
     title:string
     total:number
     type:string
   }[],
 User:{
      username:string
      password:string
      mobile:number
   }[]
}

type CartType={
    id:number  
    image:string   
    price:number 
    quantity:number
    rating:number
    title:string
    total:number
    type:string
}
const CartPage = () => {
  const cart = useSelector((state:StateType) => state.Cart)
  const dispatch = useDispatch()
  console.log(cart)
  if (cart.length === 0)
    return <div className="container d-flex justify-content-center py-2 border my-2 bg-warning"><Link to='/'>Go to home </Link> No items in Cart</div>

  return (
    <>
      <div className="container d-flex justify-content-between col-12 p-2 ">
        <div className="col-9 pe-2">
          {
            <table className="table border ">
              <thead>
                <tr>
                  {
                    Object.keys(cart[0]).map((x: string) => {
                      if (x !== 'rating')
                        return <th scope="col">{x}</th>

                    })
                  }
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map((x: CartType, i: number) => {
                    return <tr>
                      <th scope="row"><p>{x.id}</p></th>
                      <td><p>{x.title}</p></td>
                      <td><p>{x.type}</p></td>
                      <td><img src={x.image} style={{ width: '50px' }} alt="" /></td>
                      <td><p>₹&nbsp;{x.price.toFixed(1)}</p></td>
                      <td><button className="btn btn-warning" style={{ width: '35px' }} onClick={() => dispatch(updateQuantity({ index: i, quantity: (x.quantity - 1) }))}>-</button> <button className='btn btn-light' style={{ width: '35px' }}>{x.quantity}</button> <button onClick={() => dispatch(updateQuantity({ index: i, quantity: x.quantity + 1 }))} style={{ width: '35px' }} className="btn btn-warning">+</button> </td>
                      <td><p>₹&nbsp;{(x.quantity * x.price).toFixed()}</p></td>
                      <td><button className='btn btn-danger' onClick={() => dispatch(deleteFromCart(i))}><i className="bi bi-trash"></i></button></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          }
        </div>
        <div className="col-3 card bg-light p-3">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Coupan" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span className="input-group-text" id="basic-addon2">APPLY</span>
          </div>

          <p className="fs-6 my-1">PRICE DETAILS</p>
          <div className="d-flex justify-content-between align-items-center">
            <p>Sub Total</p>
            <p>₹&nbsp;{
                      cart.reduce((total: number, currentValue: CartType) => {
                        return total + (currentValue.quantity * currentValue.price)
                      }, 0).toFixed()
                      }
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p>Promotional Discount</p>
            <p>₹&nbsp;0.00</p>
          </div>
          <div className="d-flex justify-content-between align-items-center border-top-1 border border-bottom-0 border-start-0 border-end-0 pt-2">
            <p>Grand Total</p>
            <p>₹&nbsp;
                  {cart.reduce((total: number, currentValue: CartType) => {
                    return total + (currentValue.quantity * currentValue.price)
                  }, 0).toFixed()
                  }
            </p>
          </div>
          <button className="btn btn-success mt-2">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </>
  )
}

export default CartPage
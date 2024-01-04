import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { removeItem } from "../redux/action/cartAction";



const MyCart=()=>{
    const cartData=useSelector(state=>state)
    const dispatch=useDispatch()
    console.log(cartData)
    return(
        <div>
            <h1 style={{textAlign:"center"}}>My Cart</h1>
            <div className="allitems">
                {
                    cartData.map((item,index)=>(
                        <div className="product" key={index}>
                            <img src={item.thumbnail}/>
                            <p>Title:{item.title}</p>
                            <p>Price:{item.price}</p>
                            <button onClick={()=>dispatch(removeItem(item.id))}>Remove</button>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default MyCart;
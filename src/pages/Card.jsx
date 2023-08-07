import { useSelector,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cardSlice";
import { useEffect } from "react";
import Cart from "../components/cart/Cart";
const Card = () => {
    const dispatch = useDispatch();
    const {carts,totalAmount,itemCount} = useSelector((state)=> state.carts)
  const navigate = useNavigate();
  

  
  
  useEffect(()=>{
  dispatch(getCartTotal())
  },[dispatch])
  
  return (
    <div>
      {
        carts?.length > 0 ? 
        <div>
      {
        carts?.map((cart,i) =>(
            <Cart key={i} cart={cart} />
        ))
      }
          <div className="flex items-center justify-end text-2xl">TOPLAM TUTAR : <span className="font-bold text-3xl ml-2">{totalAmount} TL</span></div>
        </div> :
        <div>
            Kartınız Boş......
        </div>
      }
    </div>
  )
}

export default Card

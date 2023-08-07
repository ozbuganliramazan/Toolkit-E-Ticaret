import { useState } from "react"
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/cardSlice";


const DetailComp = ({ProductDetail}) => {
    const dispatch =useDispatch();
    const [quantity,setQuantity]=useState(0);

const decrement = ()=>{
if (quantity > 0) {
    setQuantity(quantity -1)
}
}

const increment = ()=>{
if(quantity < ProductDetail?.rating?.count){
    setQuantity(quantity + 1)
}
}

const addBasket = () =>{
dispatch(addToCard({id: ProductDetail?.id, title: ProductDetail?.title, image: ProductDetail?.image, price: ProductDetail?.price, description: ProductDetail?.description, quantity: quantity}))
}


  return (
    <div className="flex gap-10 my-10">
      <img className="w-[500px] h-[500px] object-cover"  src={ProductDetail?.image} />
      <div className="">
      <div className="text-3xl font-bold">{ProductDetail?.title} </div>
      <div className="my-2">{ProductDetail.description} </div>
      <div className="my-2 text-xl text-red-300">Rating : {ProductDetail?.rating?.rate} </div>
      <div className="my-2 text-xl text-red-300">Count : {ProductDetail?.rating?.count} </div>
      <div className="text-3xl font-bold">Price: {ProductDetail?.price} <span className="text-sm ">TL</span> </div>
      <div className="flex items-center gap-5 my-4">
        <div onClick={decrement} className="text-5xl cursor-pointer">-</div>
        <input  className="w-12 text-center text-4xl font-bold" type="text" value={quantity} />
        <div onClick={increment} className="text-4xl cursor-pointer">+</div>
      </div>
      <div onClick={addBasket} className="my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-[16] items-center justify-center">Sepete Ekle</div>
      </div>
    </div>
  )
}

export default DetailComp

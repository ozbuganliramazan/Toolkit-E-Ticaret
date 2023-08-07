import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getDetailProduct } from "../redux/productSlice";
import DetailComp from "../components/detail/DetailComp";
import Loding from "../components/Loding";



const Detail = () => {
    const {id}= useParams();
    const dispatch = useDispatch();
    const {ProductDetail, ProductDetailStatus}=useSelector(state => state.products);

    useEffect(()=>{
    dispatch(getDetailProduct(id))
    },[dispatch,id])
  return (
    <div>
        {
            ProductDetailStatus == "LOADING" ? <Loding/> :      <DetailComp ProductDetail={ProductDetail} />
        }

    </div>
  )
}

export default Detail

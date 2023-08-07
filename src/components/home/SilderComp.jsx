import Slider from "react-slick";

const SilderComp = () => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 2000,
       
      };
  return (
    <div>
        <Slider {...settings}>
            
        </Slider>
    </div>
  )
}

export default SilderComp
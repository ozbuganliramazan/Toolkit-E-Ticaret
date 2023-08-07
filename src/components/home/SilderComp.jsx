import Slider from "react-slick";

const SilderComp = () => {
    const settings = {
        infinite: true,
       // dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 2000,
       
      };
  return (
    <div>
        <Slider {...settings}>
          <div className="!flex items-center bg-gray-100 px-6">
            <div className="">
            <div className="text-5xl font-bold">En Kaliteli Ayakkabılar Burda</div>
            <div className="text-lg my-4 ">Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir. Eğer bir Lorem Ipsum pasajı kullanacaksanız, metin aralarına utandırıcı sözcükler gizlenmediğinden emin olmanız gerekir.</div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">İncele</div>
            </div>
           <img src="https://replikayakkabi.com/wp-content/uploads/2023/05/ithal-ari3-350x331.jpg"/>
            </div>
            <div className="!flex items-center bg-gray-100 px-6">
            <div className="">
            <div className="text-5xl font-bold">En Kaliteli Ayakkabılar Burda</div>
            <div className="text-lg my-4 ">Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir. Eğer bir Lorem Ipsum pasajı kullanacaksanız, metin aralarına utandırıcı sözcükler gizlenmediğinden emin olmanız gerekir.</div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">İncele</div>
            </div>
           <img src="https://replikayakkabi.com/wp-content/uploads/2023/05/ithal-ari3-350x331.jpg"/>
            </div>
        </Slider>
    </div>
  )
}

export default SilderComp
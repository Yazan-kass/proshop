import PaymentStatus from "../components/PaymentStatus"; 
import Header from '../components/Header';
import Product from '../components/Product';
import Star, { HalfStar } from '../components/Icon/stars';
import img11 from "../assets/img11.PNG";
import img12 from "../assets/img10.PNG";
import img13 from "../assets/img9.PNG";
function Payment() {
    return(
        <>
        <Header/>
        <PaymentStatus OrderNumber={'65AS1D56ASD156DS'} ShippingAddress={'56051 Jones Falls, Philippines, Turkey - 62502'} OrderItems={'1x iPhone 11 Pro 256GB Memory ,1x Apple Airpods Wireless Bluetooth Headset'}/>
        <div className="container flex">
          <div className="TopRateProducts">
            <div className="Text_Dots flex">
              <div className="Text">
                <h3>Recently viewed</h3>
              </div>
            </div>
            <div className="HorizentalLine">
              <hr />
            </div>
            <div className="TopProducts flex">
              <Product
                title="Canon Eos 80D DSLR Camera"
                Price="799.99"
                ImgUrl={img11}
                rate={
                  <div className="flex">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <HalfStar />
                  </div>
                }
              />
              <Product
                title="Logitech G-Series Gaming Mouse"
                Price="49.99"
                ImgUrl={img12}
                rate={
                  <div className="flex">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                }
              />
              <Product
                title="Amazon Echo Dot 3rd Generation"
                Price="29.99"
                ImgUrl={img13}
                rate={
                  <div className="flex">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                }
              />
            </div>
          </div>
        </div>
        </>
    );
}
export default Payment;
import Header from "../components/Header";
import Carousel from "../components/Slider/Carousel";
import img4 from "../assets/img2.PNG";
import img5 from "../assets/img3.PNG";
import img6 from "../assets/img5.PNG";
import img7 from "../assets/img4.PNG";
import img8 from "../assets/img8.PNG";
import img9 from "../assets/img7.PNG";
import img10 from "../assets/img6.PNG";
import img11 from "../assets/img11.PNG";
import img12 from "../assets/img10.PNG";
import img13 from "../assets/img9.PNG";
import Dot from "../components/Dot";
import Category from "../components/Category";
import Star, { EmptyStar, HalfStar } from "../components/Icon/stars";
import Product from "../components/Product";
import React from "react";

function Home() {
  return (
    <main>
      <Header />
      <div className="content">
        <Carousel />
        <div className="container flex">
          <div className="FeaturedCategories">
            <div className="Text_Dots flex">
              <div className="Text">
                <h3>Featured Categories</h3>
              </div>
              <div className="Dots flex">
                <Dot bgColor={"#FCDD06"} />
                <Dot bgColor={"#70707030"} />
                <Dot bgColor={"#70707030"} />
                <Dot bgColor={"#70707030"} />
              </div>
            </div>
            <div className="HorizentalLine">
              <hr />
            </div>
            <div className="Categories flex">
              <Category title={"LAPTOPS"} ImgUrl={img4} />
              <Category title={"COMPUTER COMPONENTS"} ImgUrl={img5} />
              <Category title={"DEVICES"} ImgUrl={img6} />
              <Category title={"ACCESSORIES"} ImgUrl={img7} />
            </div>
          </div>
        </div>
        <div className="ProductsSection" style={{ background: "#F7F8FC" }}>
          <div className="container flex">
            <div className="FeaturedProducts flex">
              <h3>Featured Products</h3>
              <div className="HorizentalLine">
                <hr />
              </div>
            </div>
            <div className="products flex">
              <Product
                title="Apple iPhone 11 Pro 256GB Memory"
                Price="499.99"
                ImgUrl={img8}
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
                NewPrice
                title="Apple Airpods Wireless Bluetooth Headset"
                OldPrice="$89.99"
                Price="99.99"
                ImgUrl={img9}
                rate={
                  <div className="flex">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                  </div>
                }
              />
              <Product
                title="Sony Playstation 4 Pro White Version"
                Price="399.99"
                ImgUrl={img10}
                rate={
                  <div className="flex">
                    <Star />
                    <EmptyStar />
                    <EmptyStar />
                    <EmptyStar />
                    <EmptyStar />
                  </div>
                }
              />
            </div>
            <div className="Dots flex">
              <Dot bgColor={"#70707030"} />
              <Dot bgColor={"#FCDD06"} />
              <Dot bgColor={"#70707030"} />
            </div>
          </div>
        </div>
        <div className="container flex">
          <div className="TopRateProducts">
            <div className="Text_Dots flex">
              <div className="Text">
                <h3>TOP RATE PRODUCTS</h3>
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
      </div>
    </main>
  );
}

export default Home;

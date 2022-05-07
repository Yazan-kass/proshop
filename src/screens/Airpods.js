import "../ProuctPage/style.css";
import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import img1 from "../assets/img22.PNG";
import img2 from "../assets/img7.PNG";
import img3 from "../assets/img24.PNG";
import img4 from "../assets/img25.PNG";
import TechnicalDetail from "../components/TechnicalDetail";
import Review from "../components/Review";
import Star, { EmptyStar, HalfStar } from "../components/Icon/stars";
import Product from "../components/Product";
import img8 from "../assets/img9.PNG";
import img9 from "../assets/img7.PNG";
import img10 from "../assets/img6.PNG";
import Dot from "../components/Dot";

function Iphone() {
  return (
    <>
      <Header />
      <div className="ProductDetailContainer container flex">
        <section className="ProductDetail">
          <ProductDetail
            ProductName="Apple Airpods Wireless Bluetooth Headset"
            Img1={img1}
            Img2={img2}
            Img3={img3}
            Img4={img4}
            ProductPrice="89.99"
            // Color='Blue'
            ProductDescription="Et placeat odio voluptas saepe ullam enim sed. Sint rem sint. Ex enim aperiam consequatur. Est temporibus ab. Pariatur aut ut temporibus culpa. Aut adipisci veniam esse. Quidem dolor corporis consequuntur non sunt et neque. Aut dolorem repellat quo architecto sint minima doloremque. At quae laborum incidunt vel voluptas dolor similique aut. Aut sunt saepe tempore eos sint ut amet voluptatibus dicta. Nihil nemo animi. Est laboriosam tempore. Porro id voluptates a nesciunt natus qui. Qui mollitia iusto. Perspiciatis reiciendis laborum consequuntur sint porro omnis et facere. Voluptatem vitae quo. Similique atque cumque culpa temporibus consequatur voluptatibus id. Cupiditate alias quas non ab veritatis et. Sed et qui consequatur aut. Eum consequuntur necessitatibus veritatis voluptatem qui velit repellat numquam tempore. Qui quam eos modi. Libero corporis ut et. Eligendi est expedita aspernatur non repellendus nihil perferendis. Et deserunt doloremque esse. Iusto veniam odio consequatur sint illum. Quis dolor doloribus. Nemo ut sit adipisci dolores iure. Est qui rerum ullam mollitia molestiae magnam porro at fugit. Neque ut debitis ut porro rerum. Occaecati temporibus voluptatem quo eaque. Voluptas impedit veritatis dolore assumenda. Aut doloribus unde repellat pariatur consequatur. Blanditiis voluptas aut tempora facilis fugi."
          />
        </section>
      </div>
      <div className="SpecificationContainer container">
        <div className="Specification">
          <h2>Specification</h2>
          <div className="SpecificationBox">
            <h5>Technical Details</h5>
            <div className="Boxes flex">
              <div className="flex">
                <TechnicalDetail Attrib="Brand:" AttribVal="Apple" />
                <TechnicalDetail Attrib="Brand:" AttribVal="perspiciatis" />
              </div>
              <div className="flex">
                <TechnicalDetail Attrib="voluptate" AttribVal="dolore" />
                <TechnicalDetail Attrib="repellendus" AttribVal="culpa" />
              </div>
              <div className="flex">
                <TechnicalDetail Attrib="Brand:" AttribVal="ut" />
                <TechnicalDetail Attrib="Brand:" AttribVal="eaque" />
              </div>
              <div className="flex">
                <TechnicalDetail Attrib="blanditiis" AttribVal="inventored" />
                <TechnicalDetail Attrib="laboriosam " AttribVal="provident" />
              </div>
              <div className="flex">
                <TechnicalDetail Attrib="Brand: " AttribVal="ducimus" />
                <TechnicalDetail Attrib="Brand: " AttribVal="sequi" />
              </div>
              <div className="flex">
                <TechnicalDetail Attrib="quisquam " AttribVal="amet" />
                <TechnicalDetail Attrib="et " AttribVal="accusantium" />
              </div>
              <div className="flex">
                <TechnicalDetail Attrib="Brand: " AttribVal="Apple" />
                <TechnicalDetail Attrib="Brand: " AttribVal="qui" />
              </div>
              <div className="flex">
                <TechnicalDetail Attrib="debitis " AttribVal="quis" />
                <TechnicalDetail Attrib="voluptatem " AttribVal="et" />
              </div>
              <div className="flex">
                <TechnicalDetail Attrib="Brand: " AttribVal="laborum" />
                <TechnicalDetail Attrib="Brand: " AttribVal="aut" />
              </div>
              <div className="flex">
                <TechnicalDetail Attrib="id " AttribVal="reiciendis" />
                <TechnicalDetail Attrib="id " AttribVal="omnis" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ReviewsContainer container">
        <div className="Reviews">
          <h2>Reviews</h2>
          <div className="ReviewsBox">
            <Review
              UserName="Jenifer Medhurst"
              rate={
                <div className="flex">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <HalfStar />
                </div>
              }
              Date="28th March 2022"
              Review="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita."
            />
            <Review
              UserName="Dr. Ward Farrell"
              rate={
                <div className="flex">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <HalfStar />
                </div>
              }
              Date="19th February 2021"
              Review="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita."
            />
            <Review
              UserName="Edythe Heaney"
              rate={
                <div className="flex">
                  <Star />
                  <Star />
                  <Star />
                  <EmptyStar />
                  <EmptyStar />
                </div>
              }
              Date="21st February 2021"
              Review="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita."
            />
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
                title="Amazon Echo Dot 3rd Generation"
                Price="29.99"
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
    </>
  );
}

export default Iphone;

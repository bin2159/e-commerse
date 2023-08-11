import { Col, Container, Row } from "react-bootstrap";
import ProductList from "./ProductList";
import { useContext, useState } from "react";
import MusicContext from "../../../context/MusicContext";
import Notify from "./Notify";

const ProductData = ({ prodId }) => {
  const [toast, setToast] = useState(false);
  const [notifyItem, setNotifyItem] = useState("");
  const notifyHandler = (item) => {
    setNotifyItem(item);
  };
  const toastHandler = () => {
    setToast();
  };
  const musicCtx = useContext(MusicContext);
  const {
    musicProducts: { items },
  } = musicCtx;
  const item = items.filter((item) => item.id === prodId);
  return (
    <>
      {" "}
      <Container>
        <Row>
          <ProductList
            product={item}
            setToast={toastHandler}
            setNotifyItem={notifyHandler}
          />
          <Col className="m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            eligendi accusamus reiciendis aliquam eos quibusdam ipsa illum
            officiis aut blanditiis adipisci, recusandae iure a commodi ratione
            temporibus sint architecto culpa. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Distinctio, neque ratione, placeat
            voluptatem atque eius molestiae minus tempora culpa nobis eaque
            facere, et magnam quae vitae architecto maxime soluta error? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sit sequi facilis
            maiores explicabo earum repellat consequatur laboriosam adipisci
            aliquam a vitae sapiente voluptas, eligendi repudiandae voluptatibus
            labore numquam suscipit cupiditate. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Repudiandae porro vitae doloremque
            sequi similique ea modi, quibusdam dolorum molestiae aperiam, dicta
            sed beatae? Voluptates cum quo, exercitationem labore et non.
          </Col>
        </Row>
      </Container>
      <Notify show={toast} setShow={setToast} item={notifyItem} />{" "}
    </>
  );
};

export default ProductData;

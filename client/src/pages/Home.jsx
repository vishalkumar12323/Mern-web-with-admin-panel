import { Carousel } from "../components/Carousel";
import { RegisterModal } from "../components/RegisterModal";
import { LoginModal } from "../components/LoginModal";
import { Layout1 } from "../components/Layout1";

function Home() {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Carousel />
      <Layout1 />
    </>
  );
}

export { Home };

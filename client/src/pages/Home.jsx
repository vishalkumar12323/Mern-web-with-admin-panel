import { Carousel } from "../components/Carousel";
import { RegisterModal } from "../components/RegisterModal";
import { LoginModal } from "../components/LoginModal";

function Home() {
  return (
    <>
      <div className="w-full h-[100vh]">
        <div className="flex justify-center items-center mx-auto my-auto">
          <RegisterModal />
          <LoginModal />
        </div>
        <Carousel />
      </div>
    </>
  );
}

export { Home };

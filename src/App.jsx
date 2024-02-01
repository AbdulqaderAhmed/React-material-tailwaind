import HeaderWithMegaMenu from "./include/HeaderWithMegaMenu";
import DataList from "./Components/Cards/DataList";
import Footer from "./include/Footer";
import CarouselList from "./Components/Carousel/CarouselList";

export default function App() {
  return (
    <div className=" text-center mx-auto max-w-screen-xl py-3">
      <HeaderWithMegaMenu />
      <CarouselList />
      <DataList />
      <Footer />
    </div>
  );
}

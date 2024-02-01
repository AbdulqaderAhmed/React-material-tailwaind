import { Carousel } from "@material-tailwind/react";
import A from "../../assets/img/A1.jfif";
import B from "../../assets/img/A2.jfif";
import C from "../../assets/img/A3.jfif";

export default function CarouselList() {
  const imgList = [
    { src: A, alt: "Image 1" },
    { src: B, alt: "Image 2" },
    { src: C, alt: "Image 3" },
  ];
  return (
    <Carousel
      loop={true}
      autoplay={true}
      autoplayDelay={5000}
      transition={{ duration: 2 }}
      className="rounded-xl my-4 h-96 shadow-2xl"
    >
      {imgList.map(({ src, alt }, index) => {
        return (
          <img
            src={src}
            alt={alt}
            key={index}
            className="h-full w-full object-cover"
          />
        );
      })}
    </Carousel>
  );
}

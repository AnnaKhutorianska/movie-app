import { FC } from "react";
import Image from "next/image";

interface PosterProps {
  img: string
  style: any
}

const Poster: FC<PosterProps> = ({img, style}) => {
  return (
    <Image
      src={`https://image.tmdb.org/t/p/original/${img}`}
      style={style}
      width={240}
      height={300}
      alt="movie image"
    />
  );
};

export default Poster;

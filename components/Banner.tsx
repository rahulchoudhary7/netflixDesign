import Image from "next/image";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const[showModal, setShowModal] = useRecoilState(modalState)
  const[currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  function truncate(string : string, n: number){
    return string?.length>n ? string.substring(0 ,n-1)+'...' : string
  }

  // return (
  //   <div className="flex ">
  //     <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
  //       <div className="absolute top-0 left-0 -z-10 h-[40vh] w-[100%] lg:h-[95vh]">
  //         <Image
  //           layout="fill"
  //           src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
  //           objectFit="cover"
  //         />
  //       </div>

  //       <h1 className="text-2xl font-bold md:text-2xl lg:text-5xl">
  //         {movie?.title || movie?.name || movie?.original_name}
  //       </h1>
  //       <p className="max-w-xs text-sm text-shadow-sm md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
  //         {truncate(movie?.overview!, 115)}
  //       </p>

  //       <div className="flex space-x-3">
  //         <button className="bannerButton bg-white text-black">
  //           <FaPlay className="h-3 w-3 text-black md:h-5 md:w-5" />
  //           Play
  //         </button>
  //         <button className="bannerButton bg-[gray]/70">
  //           More Info
  //           <InformationCircleIcon className="h-3 w-3 md:h-8 md:w-6" />
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen justify-center">
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl py-70">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md justify-end md:max-w-lg md:text-xs lg:max-w-2xl lg:text-lg">
          {truncate(movie?.overview!, 155)}
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>

        <button
            className="bannerButton bg-[gray]/70"
            onClick={()=>{
              setCurrentMovie(movie)
              setShowModal(true)
            }}
        >
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info
        </button>
      </div>
    </div>
  )
}

export default Banner

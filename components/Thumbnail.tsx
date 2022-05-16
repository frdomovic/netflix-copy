import React from 'react'
import { Movie } from '../typings'
import Image from 'next/image'
interface Props {
  //movie: Movie | DocumentData
  movie: Movie
}

export default function Thumbnail({ movie }: Props) {
  return (
    <div
      className="md:min-w[260px] relative h-28 min-w-[180px] cursor-pointer transition
    duration-200 ease-out md:h-36 md:hover:scale-105"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

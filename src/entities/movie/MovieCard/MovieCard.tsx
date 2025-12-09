import { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "../../../pages/home/FavoriteButton";
import { Modal } from "../../../components/ui/Modal";
import { Movie } from "../../../product/productsSlice";

interface Props {
  movie: Movie;
}

 function MovieCard({ movie }: Props ) {
    const [isOpenTrailer, setIsOpenTrailer] = useState(false);

    const openTrailer = useCallback(() => {
        setIsOpenTrailer(true)
    }, [])

    return (
        <div className="relative w-[200px] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg">
            {isOpenTrailer && (
                <Modal
                    onClose={() => {
                        setIsOpenTrailer(false);
                    }}
                >
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${movie.trailerRutubeId}?controls=0`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </Modal>
            )}

            <img
                src={movie.image}
                alt="Movie Poster"
                className="w-full h-auto object-cover"
            />

            <div className='absolute top-0 left-0 m-2 text-white text-xl hover:text-red-600 transition'>
                <FavoriteButton />
                <button
                    className='p-1'
                    onClick={openTrailer}
                >
                    🎬
                </button>

                <Link to={`/movie/${movie.trailerRutubeId}`} 
                className='btn'
                >
                    🦋⃟
                </Link>

            </div>
            <div className="absolute bottom-0 left-0 w-full 
                bg-gradient-to-t from-black/80 to-transparent p-2 text-sm
                text-white font-semibold">
                IMDb: {movie.rating}
            </div>
        </div>
    );
}

export default memo(MovieCard)
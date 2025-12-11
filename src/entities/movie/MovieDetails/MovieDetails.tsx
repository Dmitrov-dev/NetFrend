import { Suspense, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AddCommentButton } from "./ButtonComment";
import { CommentsSection } from "./CommentSelection";

interface Movie {
  image: string;
  name: string;
  trailerRutubeId: string;
}

interface RootState {
  products: Movie[];
}

export function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const products = useSelector((state: RootState) => state.products);

  const previousMemoRef = useRef<Movie | null>(null);
  const previousProductsRef = useRef<Movie[]>([]);

  const movie = useMemo(() => {
    return products.find(movie => movie.trailerRutubeId === id);
  }, [products, id]);

  if (!movie) {
    return (
      <p className="text-center mt-10 text-gray-300">
        Фильм не найден 😡(ಥ﹏ಥ)😡
      </p>
    );
  }

  return (
    <div>
      <img
        src={movie.image}
        alt="Movie Poster"
        className="w-1/3 h-auto object-cover"
      />
      <h1 className="text-4xl font-bold text-gray-300">Карточка фильма #{id}</h1>
      <h2 className="text-sm text-gray-300">{movie.name}</h2>
      <p className="text-gray-300 text-sm"> ОПИСАНИЕ</p>
      <Suspense fallback={<div>Загрузка епта...</div>}>
        {/* Передаём идентификатор текущего фильма */}
        <CommentsSection movieId={movie.trailerRutubeId} />
      </Suspense>
    </div>
  );
}

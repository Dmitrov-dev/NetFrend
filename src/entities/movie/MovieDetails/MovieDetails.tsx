import { lazy, Suspense, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


interface Movie {
  image: string;
  name: string;
  trailerRutubeId: string;
}

interface RootState {
  products: Movie[];
}

const LazyMovieComments = lazy(() =>
  import('./MovieComments').then(c => ({ default: c.MovieComments }))
);

export function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const products = useSelector((state: RootState) => state.products);

  // Реф для хранения предыдущего результата
  const previousMemoRef = useRef<Movie | null>(null);
  const previousProductsRef = useRef<Movie[]>([]);

  const movie = useMemo(() => {
    const foundMovie = products.find(movie => movie.trailerRutubeId === id);

    // Глубокое сравнение предыдущего состояния
    if (
      previousMemoRef.current &&
      previousProductsRef.current === products &&
      previousMemoRef.current.trailerRutubeId === foundMovie?.trailerRutubeId
    ) {
      // Если совпадает, возвращаем предыдущее значение
      return previousMemoRef.current;
    }

    // Иначе обновляем рефы
    previousMemoRef.current = foundMovie || null;
    previousProductsRef.current = products;

    return foundMovie;
  }, [products, id]);

  if (!movie)
    return (
      <p className="text-center mt-10 text-gray-300">Фильм не найден 😡(ಥ﹏ಥ)😡</p>
    );

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
        <LazyMovieComments/>
      </Suspense>
    </div>
  );
}

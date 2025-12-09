import { useMemo, useRef } from "react"; 
import MovieCard from "../../entities/movie/MovieCard/MovieCard"; 
import { Movie } from "../../product/productsSlice"; 
import { useSelector } from "react-redux"; 
import { RootState } from "../../product/store"; 
import { SliderButtonLeft } from "./componets/button/SliderButtonLeft"; 
import { SliderButtonRight } from "./componets/button/SliderButtonRight";

interface SliderFilmProps {  
  searchTerm: string; 
}

export function SliderFilm({ searchTerm }: SliderFilmProps) {  
  const products = useSelector((state: RootState) => state.products as Movie[]);  
  const sliderRef = useRef<HTMLDivElement>(null);

const movies = useMemo(() => {
  if (products.length > 0 && typeof searchTerm === 'string') {
    return products.filter((movie: Movie) => {
      return typeof movie.name === 'string' && movie.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
  return [];
}, [searchTerm, products]);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center gap-3 flex-grow">
        <SliderButtonLeft sliderRef={sliderRef} />
        <div
          ref={sliderRef}
          className="flex gap-6 flex-nowrap overflow-x-auto pb-4 scroll-smooth w-full hide-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          {movies.length ? (
            movies.map((movie: Movie) => (
              <div key={movie.id} className="min-w-[260px] max-w-[300px] flex-shrink-0">
                <MovieCard movie={movie} />
              </div>
            ))
          ) : (
            <p>Фильм не найден</p>
          )}
        </div>
        <SliderButtonRight sliderRef={sliderRef} />
      </div>
    </div>
  );
}

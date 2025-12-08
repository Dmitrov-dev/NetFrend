import { useMemo, useState, useRef } from 'react'
import MovieCard from '../../entities/movie/MovieCard/MovieCard'
import { useDebounce } from '../../hooks/useDebounce'
import { useTheme } from '../../hooks/useTheme'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../../product/store'
import { IMovie } from '../../entities/movie/MovieCard/movie.interface'

function App() {
  // const { width, height } = useWindowSize(); размеры экрана
  const { theme, toggleTheme } = useTheme()
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  const products = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch<AppDispatch>()

  const movies = useMemo(() => {
    return products.filter((movie: IMovie) =>
      movie.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
  }, [debouncedSearch, products])

  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = 300;
    sliderRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  }

  return (
    <div className={`min-h-screen min-w-screen h-screen w-screen overflow-hidden px-6 py-5 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Ограниченный по экрану интерфейс */}
      <div className="flex flex-col h-full w-full">
        {/* <div>
          <p>Текущая ширина окна: {width}px</p>
          <p>Текущая высота окна: {height}px</p>
          {width > 768 ? <p>десктоп</p> : <p>Мобильник</p>}
        </div> */}
        <header className="mb-10 flex items-center justify-between ">
          <img src={theme === 'dark' ? 'лого2.png' : 'logo1.png'} alt="Gigacha" className="h-30 w-auto" />
          <div className="flex gap-2 items-center">
            <input
              type="search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className={`border px-2 py-1 rounded outline-0 ${theme === 'dark'
                ? 'bg-black text-white border-white/15'
                : 'bg-white text-black border-black/15'}`}
            />
            <button
              onClick={toggleTheme}
              className={`text-sm px-3 py-1 rounded border transition w-30
                  ${theme === 'dark'
                ? 'border-white/10 hover:bg-white/10'
                : 'border-black/20 hover:bg-black hover:text-white'}`}
            >
              {theme === 'dark' ? '🧑🏻‍💻 Light' : '🧑🏿‍💻 Dark'}
            </button>
          </div>
        </header>
        {/* Слайдер с фильмами */}
        <div className="flex items-center gap-3 flex-grow">
          <button
            onClick={() => scroll('left')}
            className="p-2 bg-gray-200/70 rounded hover:bg-gray-300 text-lg disabled:opacity-50"
            aria-label="Scroll left"
          >
            ←
          </button>
          <div
          ref={sliderRef}
          className="flex gap-6 flex-nowrap overflow-x-auto pb-4 scroll-smooth w-full hide-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
          >
          {movies.length ? (
          movies.map((movie: IMovie) => (
          <div key={movie.name} className="min-w-[260px] max-w-[300px] flex-shrink-0">
          <MovieCard movie={movie} />
         </div>
         ))
        ) : (
         <p>Фильм не найден</p>
         )}
          </div>

          <button
            onClick={() => scroll('right')}
            className="p-2 bg-gray-200/70 rounded hover:bg-gray-300 text-lg disabled:opacity-50"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
export default App

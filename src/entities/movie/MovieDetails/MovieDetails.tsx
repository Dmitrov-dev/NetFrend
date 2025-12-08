import { lazy, Suspense, useMemo } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

// Предполагаемая структура состояния и фильма
interface Movie {
  image: string
  name: string
  trailerRutubeId: string
  // добавьте все нужные поля
}

interface RootState {
  products: Movie[]
}

const LazyMovieComments = lazy(() =>
  import('./MovieComments').then(c => ({ default: c.MovieComments }))
)

export function MovieDetails() {
  const { id } = useParams<{ id: string }>()
  // Сообщаем useSelector правильный тип состояния
  const products = useSelector((state: RootState) => state.products)

  // Явная типизация movie
  const movie = useMemo(() => {
    return products.find(movie => movie.trailerRutubeId === id)
  }, [products, id])

  if (!movie)
    return <p className="text-center mt-10 text-gray-300">Фильм не найден 😡(ಥ﹏ಥ)😡 </p>

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
        <LazyMovieComments />
      </Suspense>
    </div>
  )
}
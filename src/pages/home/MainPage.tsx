
import { Header } from '../../shared/headers/Header'
import { useTheme } from '../../hooks/useTheme'
import { SliderFilm } from '../../widgets/slider/Slider'


function App() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen min-w-screen h-screen w-screen overflow-hidden px-6 py-5 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header />
      <SliderFilm searchTerm={''} />
    </div>
  )
}

export default App

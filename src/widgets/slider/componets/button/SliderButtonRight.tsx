import { RefObject, useRef } from "react"

type SliderButtonRightProps = {
  sliderRef: React.RefObject<HTMLDivElement | null>;
};

export function SliderButtonRight({ sliderRef }: SliderButtonRightProps) {
        
          const scroll = (direction: 'left' | 'right') => {
            if (!sliderRef.current) return
            const scrollAmount = 300
            sliderRef.current.scrollBy({
              left: direction === 'right' ? scrollAmount : -scrollAmount,
              behavior: 'smooth',
            })
        }
    return  <button
            onClick={() => scroll('right')}
            className="p-2 bg-gray-200/70 rounded hover:bg-gray-300 text-lg disabled:opacity-50"
            aria-label="Scroll right"
          >
            →
          </button>
}

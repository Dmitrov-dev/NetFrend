import { RefObject, useRef } from "react"

type SliderButtonLeftProps = {
  sliderRef: React.RefObject<HTMLDivElement | null>;
};

export function SliderButtonLeft({ sliderRef }: SliderButtonLeftProps) {
    
    const scroll = (direction: 'left' | 'right') => {
        if (!sliderRef.current) return
        const scrollAmount = 300
        sliderRef.current.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        })
    };

    return (
        <button
            onClick={() => scroll('left')}
            className="p-2 bg-gray-200/70 rounded hover:bg-gray-300 text-lg disabled:opacity-50"
            aria-label="Scroll left"
        >
            ←
        </button>
    );
}



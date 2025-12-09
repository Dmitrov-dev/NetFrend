import { type PropsWithChildren, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props extends PropsWithChildren{
  onClose: () => void
}

export function Modal({ children, onClose}: Props) {
  const handlEsc = useCallback((e: KeyboardEvent) => {
    if(e.key === 'Escape') onClose();
  }, [onClose])

  useEffect(() => {
    window.addEventListener('keydown', handlEsc);
    return() => window.removeEventListener('keydown', handlEsc)
  }, [handlEsc])

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-xl bg-neutral-900 text-white  rounded-2xl shadow-lg animate-fadeIn"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-0  left-0 -mt-3 -ml-3 text-white text-xl hover:text-red-600 transition"
          aria-label="Close modal"
        >
          𓆩†𓆪   
        </button>
        <div className="flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
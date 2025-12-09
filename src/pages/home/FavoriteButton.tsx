import { memo, useEffect, useState } from "react"

 function FavoriteButton() {
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
}, [isFavorite])

    return <button onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? '❤️' : '🤍'}
    </button>
}


export default memo(FavoriteButton)


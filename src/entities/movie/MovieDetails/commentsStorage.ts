
export type Comment = {
  id: number;         // Уникальный идентификатор комментария
  text: string;       // Текст комментария
  createdAt: string;  // Дата и время создания (в строке)
};

// Генерация уникального ключа для localStorage для каждого фильма
function getStorageKey(movieId: string) {
  return `comments_MOVIEID_${movieId}`;
}

// Чтение комментариев для конкретного фильма из LocalStorage
export function loadComments(movieId: string): Comment[] {
  try {
    const saved = localStorage.getItem(getStorageKey(movieId));
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

// Сохранение комментариев для конкретного фильма
export function saveComments(movieId: string, comments: Comment[]) {
  localStorage.setItem(getStorageKey(movieId), JSON.stringify(comments));
}

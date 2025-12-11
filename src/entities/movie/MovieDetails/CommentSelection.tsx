// Комментарии для себя ДОЛБАЕБА или это БАОБАБ


import React, { useState, useEffect, useCallback } from "react";
import { Comment, loadComments, saveComments } from "./commentsStorage";
import { AddCommentButton } from "./ButtonComment";

type CommentsSectionProps = {
  movieId: string; // Уникальный идентификатор фильма
};

export function CommentsSection({ movieId }: CommentsSectionProps) {
  // Для каждого фильма загружаем его собственные комментарии
  const [comments, setComments] = useState<Comment[]>(() => loadComments(movieId));
  const [newComment, setNewComment] = useState<string>("");

  // Сохраняем комментарии для конкретного фильма при каждом изменении
  useEffect(() => {
    saveComments(movieId, comments);
  }, [comments, movieId]);

  // Обработчик поля ввода
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => setNewComment(e.target.value),
    []
  );

  // Обработчик добавления
  const handleAddComment = useCallback(() => {
    const trimmed = newComment.trim();
    if (!trimmed) return;
    setComments(prev => [
      {
        id: Date.now(),
        text: trimmed,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
    setNewComment("");
  }, [newComment]);

  // UI - когда нибудь я их создам
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Комментарии или этот баобаб</h2>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={3}
        placeholder="Введите ваш комментарий..."
        value={newComment}
        onChange={handleInputChange}
      />
      <AddCommentButton onClick={handleAddComment} />
      <ul className="mt-6 space-y-4">
        {comments.map((c) => (
          <li key={c.id} className="border-b pb-2">
            <p className="text-gray-800">{c.text}</p>
            <span className="text-sm text-gray-500">
              {new Date(c.createdAt).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AddCommentButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      onClick={onClick}
    >
      Добавить комментарий или это баобаб 🌳❤️
    </button>
  );
}
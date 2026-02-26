
function DAppCard({ title, likes, author, imageUrl }) {

  return (
    <div className="bg-zinc-800/70 backdrop-blur-lg rounded-3xl p-6 w-72 h-80 flex flex-col justify-between shadow-xl hover:scale-105 transition-transform duration-300">
      {/* Header */}
      <div className="flex justify-between items-center text-xs text-zinc-400 tracking-widest">
        <span>{title}</span>
        <span className="flex items-center gap-1">
          [{likes}]
          <span>♡</span>
        </span>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center">
        <img
          src={imageUrl}
          alt={title}
          className="w-40 h-28 object-cover rounded-2xl"
        />
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-zinc-600 rounded-full overflow-hidden">
          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${author}`}
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-sm text-zinc-300">{author}</span>
      </div>
    </div>
  )
}

export default DAppCard;
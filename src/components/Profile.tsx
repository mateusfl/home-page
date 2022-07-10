export function Profile() {
  return (
    <div className="pb-6 pt-4 flex flex-col items-center gap-1">
      <img
        className="h-32 w-32 border-white border-4 rounded-full shadow-md"
        src="/profile.jpg"
        alt="img"
      />
      <p className="pt-2 text-2xl">Mateus Felipe</p>
      <p className="text-md opacity-50">Desenvolvedor web</p>
    </div>
  )
}

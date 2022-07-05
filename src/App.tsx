import { Profile } from './components/Profile'

function App() {
  return (
    <div className="bg-gradient-to-b from-violet-500 to-pink-400 h-screen w-screen py-8 md:p-48">
      <div
        className="container mx-auto bg-gray-300 max-h-fit max-w-md w-3/4 
        border rounded-xl 
        flex flex-col gap-3 items-center justify-center "
      >
        <Profile />
        <a href="https://github.com/mateusfl">link</a>
        <a href="https://github.com/mateusfl">link</a>
        <a href="https://github.com/mateusfl">link</a>
        <a href="https://github.com/mateusfl">link</a>
      </div>
    </div>
  )
}

export default App

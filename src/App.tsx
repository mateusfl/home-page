import { Link } from './components/Link'
import { Profile } from './components/Profile'

function App() {
  return (
    <body className="bg-gradient-to-b from-violet-500 to-pink-400 h-screen w-screen py-8 md:p-48">
      <div
        className="container mx-auto bg-gray-300 max-h-fit max-w-md w-3/4 bg-opacity-60
        rounded-xl
        font-quicksand
        flex flex-col items-center justify-around "
      >
        <Profile />
        <Link
          url={'https://github.com/mateusfl'}
          name={'Github'}
          emoji={'🐱'}
        />
        <Link
          url={'https://instagram.com/mateus_fsd'}
          name={'Instagram'}
          emoji={'📷'}
        />
        <Link
          url={'https://linkedin.com/in/mateus-felipe-1770b2196/'}
          name={'Linkedin'}
          emoji={'💼'}
        />
      </div>
    </body>
  )
}

export default App

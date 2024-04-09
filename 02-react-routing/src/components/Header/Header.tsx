import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-sm">
        <nav className="flex  justify-between px-8 items-center py-3">
            <h1 className="text-xl font-bold">Logo</h1>
            <ul className="flex space-x-10">
                <Link to={'/'} className="font-semibold">Home</Link>
                <Link to={'/contact'} className="font-semibold">Contact</Link>
                <Link to={'/github'} className="font-semibold">Github</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header
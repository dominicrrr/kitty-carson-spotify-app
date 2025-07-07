import { NavLink, Link } from "react-router-dom"
import { routes } from "@/routes"
import { Github } from "react-bootstrap-icons"

export const Footer = () => {
  return (
    <footer className="min-h-[200px] w-full bg-green-100 flex flex-col items-center justify-center gap-4">
      
        <nav className="flex gap-6">
            <NavLink
            to={routes.home.path}
            className={({ isActive }) =>
                isActive ? "text-green-700 font-semibold underline" : "text-black"
            }
            >
            Home
            </NavLink>
            <NavLink
            to={routes.login.path}
            className={({ isActive }) =>
                isActive ? "text-green-700 font-semibold underline" : "text-black"
            }
            >
            Login
            </NavLink>
            <NavLink
            to={routes.about.path}
            className={({ isActive }) =>
                isActive ? "text-green-700 font-semibold underline" : "text-black"
            }
            >
            About
            </NavLink>
        </nav>
        <Link to="https://github.com/dominicrrr/kitty-carson-spotify-app">
            <div className="flex gap-6">
                <Github className="hover:cursor-pointer " size={32}></Github>
            </div>
        </Link>
      <p className="text-sm text-gray-600">&copy; Kitty Carson Guess</p>
    </footer>
  )
}

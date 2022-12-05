import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink'

const Layout = () => {
    return (
        <>
        <header>
            <CustomLink to="/">Start Game</CustomLink>
            <CustomLink to="/posts">Leaderboard</CustomLink>
        </header>

        <main className="container">
            <Outlet />
        </main>

        <footer className="container">&copy; SnakeGame</footer>
        </>
    )
}

export {Layout}

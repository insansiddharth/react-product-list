import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar=()=>{

    return (
        <div>
            <nav>
                <Link className="navitem p-4 mx-3" to="/category/top-wear-kurtas"> Top Wear </Link>
                <Link className="navitem p-4 mx-3" to="/category/bottom-wear" > Bottom Wear </Link>
                <Link className="navitem p-4 mx-3" to="/category/w-cosmetics"> Cosmetics </Link>
                <Link className="navitem p-4 mx-3" to="/category/footwear"> Footwear </Link>
                <Link className="navitem p-4 mx-3" to="/category/drapes-wear"> Drapes </Link>
                <Link className="navitem p-4 mx-3" to="/category/wishful"> Wishful </Link>
            </nav>
        </div>
    )

}

export default Navbar;
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar=()=>{

    return (
        <div>
            <nav>
                <Link className="navitem" to="/category/top-wear-kurtas"> Top Wear </Link>
                <Link className="navitem" to="/category/bottom-wear" > Bottom Wear </Link>
                <Link className="navitem" to="/category/w-cosmetics"> Cosmetics </Link>
                <Link className="navitem" to="/category/footwear"> Footwear </Link>
            </nav>
        </div>
    )

}

export default Navbar;
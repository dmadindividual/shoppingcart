import { Link } from "react-router-dom"
import { IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
const Navbar = () => {
  const cart = useSelector((state)=> state.cart)
  return (

<nav className="bg-black h-11 flex justify-between">
  <Link to="/" className="text-white px-4 py-2 font-black">
    Products
    </Link>

    <Link to="/cart" className="text-white px-4 py-2 ">
      <IconButton>
      <ShoppingCartIcon className="text-white relative" />
      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">{cart.length}</span>

      </IconButton>
    </Link>


</nav>

  
  )
}

export default Navbar
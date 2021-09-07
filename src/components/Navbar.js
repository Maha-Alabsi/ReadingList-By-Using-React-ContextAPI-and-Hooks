import { useContext } from "react"
import { BookContext } from "../context/BookContext"

const Navbar = () => {
    const {books}=useContext(BookContext);
    return (
        <div className='navbar'>
            <h1>Hello Reading List</h1>
            <p>Currently youo have {books.length} books to get throw...</p>
        </div>
    )
}

export default Navbar;
import { useState, useEffect } from "react"
import harrypotter from "../src/English_Harry_Potter_4_Epub_9781781105672.jpg"
import Lightning from "../src/Lightning-Thief-flat-cover.png"

const Books = () => {
    const [books, setBooks] = useState([]);

    const covers = {
        "harrypotter": harrypotter,
        "Lightning": Lightning
    }

    const getBooks = () => {
        fetch('http://localhost:3001')
        .then((res)=> res.json())
        .then((res) => setBooks(res))
        .catch((err) => console.log(err))
      }
    
      useEffect(() => {
        getBooks()
      }, [])
    return (
        <div className="card m-3 d-flex flex-row">
            {
                books.map((book) => {
                    return (
                        <div class="card w-25 mx-4">
                            <img src={covers[book.cover]} class="card-img-top h-75"/>
                            <div class="card-body">
                                <h5 class="card-title">{book.title}</h5>
                                <p class="card-text">{book.desc}</p>
                                <a href="#" class="btn btn-primary">check</a>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
        
     );
}
 
export default Books;
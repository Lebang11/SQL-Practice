import { useState } from "react";
import axios from "axios";

const NewBook = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [cover, setCover] = useState('');

    const CreateBook = async () => {
        console.log(name);
        console.log(title);
        console.log(description);
        console.log(cover);


        await axios.post('http://localhost:3001/books',
        {
            name,
            title,
            description,
            cover
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

        // window.location.reload(false);
    }

    return ( 
        <div>
            <form className="card p-5 m-5">
            <div class="mb-3">
                <label for="title" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" onChange={(e) => {
                    setName(e.target.value)
                }}/>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" onChange={(e) => {
                    setTitle(e.target.value)
                }}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Description</label>
                <input type="text" class="form-control" id="description" onChange={(e) => {
                    setDescription(e.target.value)
                }}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Cover Name</label>
                <input type="text" class="form-control" id="cover" onChange={(e) => {
                    setCover(e.target.value)
                }}/>
            </div>
            <button type="button" class="btn btn-primary" onClick={CreateBook}>Create</button>
            </form>
        </div>
     );
}
 
export default NewBook;
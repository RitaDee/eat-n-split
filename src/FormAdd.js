import { useState } from "react";
import Button from "./Button";
const FormAddFriend = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
  return (
    <form className="form-add-friend">
    
    <label>👫 Friend name</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

    <label>🌄 Image URL</label>
    <input type="text" />

    <Button>Add</Button>
    </form>
  )
}

export default FormAddFriend;
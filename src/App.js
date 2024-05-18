import { useState } from "react";
import FormAddFriend from "./FormAdd";
import { FriendsList } from "./FriendsList";
import Button from "./Button";
import { FormSplitBill } from "./FormSplitBill";

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () => {
    setShowAddFriend ((showAddFriend) => !showAddFriend);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
       {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add friend"}</Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;

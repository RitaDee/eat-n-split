import { useState } from "react";
import FormAddFriend from "./FormAdd";
import { FriendsList } from "./FriendsList";
import Button from "./Button";
import { FormSplitBill } from "./FormSplitBill";

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
       {showAddFriend && <FormAddFriend />}
        <Button>Add friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;

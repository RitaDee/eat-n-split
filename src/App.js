import { useState } from "react";
import FormAddFriend from "./FormAdd";
import { FriendsList } from "./FriendsList";
import Button from "./Button";
import { FormSplitBill } from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () => {
    setShowAddFriend ((showAddFriend) => !showAddFriend);
  }

  const handleAddFriend = (friend) => {
    setFriends((friends) => [ ...friends, friend ])
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
       {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add friend"}</Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;

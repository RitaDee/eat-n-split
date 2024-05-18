import FormAddFriend from "./FormAdd";
import { FriendsList } from "./FriendsList";
import Button from "./Button";

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>
    </div>
  );
};

export default App;

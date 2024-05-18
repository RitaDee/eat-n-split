import FormAddFriend from "./FormAdd";
import { FriendsList } from "./FriendsList";

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
      </div>
    </div>
  );
};

export default App;

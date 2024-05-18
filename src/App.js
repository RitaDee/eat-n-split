import FormAddFriend from "./FormAdd";
import { FriendsList } from "./FriendsList";
import Button from "./Button";
import { FormSplitBill } from "./FormSplitBill";

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;

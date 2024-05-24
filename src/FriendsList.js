import { Friend } from "./Friend";

export const FriendsList = ({ friends, onSelection, selectedFriends }) => {

    return (
        <ul>{friends.map((friend) => (
            <Friend 
                friend={friend} 
                key={friend.id} 
                onSelection={onSelection}
                selectedFriends={selectedFriends}
                />
        ))}</ul>
    )
}



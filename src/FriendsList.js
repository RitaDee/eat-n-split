import { Friend } from "./Friend";

export const FriendsList = ({ friends, onSelection }) => {

    return (
        <ul>{friends.map((friend) => (
            <Friend friend={friend} key={friend.id} onSelection={onSelection} />
        ))}</ul>
    )
}



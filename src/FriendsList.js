import { Friend } from "./Friend";

export const FriendsList = ({ friends }) => {

    return (
        <ul>{friends.map((friend) => (
            <Friend friend={friend} key={friend.id}  />
        ))}</ul>
    )
}



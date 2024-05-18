export const Friend = ({friend}) => {
    return (
        <li key={friend.id}>
            <img src={friend.image} alt={friend.name} />
           
                <h4>{friend.name}</h4>
                
                {/* {friend.balance < 0 && (
                    <p className="red">You owe {friend.name} {Math.abs(friend.balance)}€</p>
                )}  */}

                {friend.balance > 0 && (
                    <p className="green">{friend.name} owes you {Math.abs(friend.balance)}€</p>
                )} 

                {friend.balance === 0 && (
                    <p>You and {friend.name} are even</p>
                )} 
           
           <button className="button">Select</button>
        </li>
    )
};
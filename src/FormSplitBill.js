export const FormSplitBill = ({ selectedFriends }) => {
  return (
    <form className='form-split-bill'>
        <h2>Split a bill with {selectedFriends.name} </h2>

        <label>💰 Bill value</label>
        <input type="text" />

        <label>🧍‍♀️Your expense</label>
        <input type="text" />

        <label>👫 {selectedFriends.name}'s expense</label>
        <input type="text" disabled />

        <label>🤑 Who is paying the bill</label>
        <select>
            <option value="user">You</option>
            <option value="friend">{selectedFriends.name}</option>
        </select>
    </form>
  )
}

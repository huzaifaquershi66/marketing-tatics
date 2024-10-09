
import { useSelector } from "react-redux";

const UserDataDisplay = () => {
  const userData = useSelector((state) => state.userData);
  console.log(userData); // Redux store se data le rahe hain

  const handlesubmit = ()=>{
    alert("product succesfully submit to user")
  }

  return (
      <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">User Data</h1>
          {userData.users.length > 0 ? (
              userData.users.map((user, index) => (
                  <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
                      <h2 className="text-xl font-semibold">User {index + 1} Transaction Data:</h2>
                      <ul className="list-disc list-inside">
                          {user.price && <li>Price: {user.price}</li>}
                          {user.transactionId && <li>Transaction ID: {user.transactionId}</li>}
                          {user.phonenumber && <li>Phone Number: {user.phonenumber}</li>}
                      </ul>
                      <button onClick={handlesubmit} className="h-10 w-20 bg-blue-600 text-white rounded">Submit</button>
                  </div>
              ))
          ) : (
              <p>No user data available.</p>
          )}
      </div>
  );
};
export default UserDataDisplay
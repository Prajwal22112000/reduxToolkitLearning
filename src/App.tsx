import "./App.css";
import Chance from "chance"
import { useDispatch } from "react-redux";
import { addUser, deleteAllUsers } from "./components/UserDetails";
import ShowUsers from "./components/ShowUsers";
import "./App.css"

function App() {
  const dispatch = useDispatch();
  function addUserFn(name:string) {
    dispatch(addUser(name));
  }

  function deleteAllUsersFn() {
    dispatch(deleteAllUsers(name));
  }

  return (
    <>
      <button onClick={()=>addUserFn(Chance().name({middle:true}))}> Click Here To add Users</button>
      <div>
        <h1>The Users will be displyed here</h1>
        <ShowUsers/>
      </div>
      <button onClick={()=>deleteAllUsersFn()}>Click Here to Delete All Names</button>
    </>
  );
}

export default App;

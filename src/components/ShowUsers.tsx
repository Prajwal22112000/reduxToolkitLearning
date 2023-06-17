import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "./UserDetails";
import { MdDelete } from "react-icons/md";

const ShowUsers = () => {
  const dispatch = useDispatch();
  const data: Array<string> = useSelector((state: any) => {
    return state.users;
  });

  function removeUserFn(index: number) {
    dispatch(deleteUser(index));
  }
  return (
    <div className="showUser">
      {data.map((user, index) => {
        return (
          <h3 key={index}>
            <button
              className="deleteIcon"
              onClick={() => {
                removeUserFn(index);
              }}
            >
              <MdDelete key={index}/>
            </button>
            {user}
          </h3>
        );
      })}
    </div>
  );
};

export default ShowUsers;

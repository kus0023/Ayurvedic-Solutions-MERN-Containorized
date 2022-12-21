import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/Auth.action";
import { successMessage } from "../../utils/messages/ToastMessages";

function LogedInLinks() {
  const dispatch = useDispatch();

  return (
    <>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link
          to=""
          onClick={() => {
            successMessage("Logged Out");
            //TODO: Remove all the history pages and then logout.
            window.history.replaceState(null, null, "/"); //Not working
            
            dispatch(logout());
          }}
        >
          Logout
        </Link>
      </li>
    </>
  );
}

export default LogedInLinks;

import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { IoGitPullRequestSharp } from "react-icons/io5";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
      <MenuItem
        icon={IoGitPullRequestSharp}
        label="Users Requests"
        address="users-requests"
      />
    </>
  );
};

export default AdminMenu;

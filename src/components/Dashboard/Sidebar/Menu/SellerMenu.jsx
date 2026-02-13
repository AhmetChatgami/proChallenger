import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
const SellerMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label='Add Contest'
        address='add-contest'
      />
      <MenuItem icon={MdHomeWork} label='My Inventory' address='my-inventory' />
      <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Contests'
        address='manage-contests'
      />
    </>
  )
}

export default SellerMenu

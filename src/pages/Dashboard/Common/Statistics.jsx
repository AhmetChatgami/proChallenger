import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics'
import SellerStatistics from '../../../components/Dashboard/Statistics/SellerStatistics';
import CustomerStatistics from '../../../components/Dashboard/Statistics/CustomerStatistics';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import useRole from '../../../hooks/useRole'
const Statistics = () => {
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) return <LoadingSpinner/>;
  return (
    <div>
      {role === 'admin' && <AdminStatistics />}
      {role === 'creator' && <SellerStatistics/>}
      {role === 'customer' && <CustomerStatistics/> }
    </div>
  )
}

export default Statistics

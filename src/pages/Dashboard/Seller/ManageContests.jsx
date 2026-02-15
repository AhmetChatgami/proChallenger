import SellerOrderDataRow from "../../../components/Dashboard/TableRows/SellerOrderDataRow";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageContests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure(); 

  const {
    data: registered = [], 
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["registered", user?.email],
    queryFn: async () => {
      
      const result = await axiosSecure.get(`/manage-contests/${user?.email}`);
      return result.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">Name</th>
                    <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">Customer</th>
                    <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">Winning Prize</th>
                    <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">Quantity</th>
                    <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">Status</th>
                    <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">Action</th>
                  </tr>
                </thead>
                <tbody>
            
                  {Array.isArray(registered) && registered.length > 0 ? (
                    registered.map((contest) => (
                      <SellerOrderDataRow 
                        key={contest._id} 
                        contest={contest} 
                        refetch={refetch} 
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-4">No contests found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageContests;
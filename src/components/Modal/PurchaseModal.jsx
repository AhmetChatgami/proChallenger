import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const PurchaseModal = ({ closeModal, isOpen, contest }) => {
  // Total Price Calculation

  const { user } = useAuth();
  const { _id, name, category, price, quantity, creator, description, image } =
    contest || {};

  const handlePayment = async () => {
    const paymentInfo = {
      contestId: _id,
      name,
      category,
      price,
      quantity: quantity || 1,
      description,
      image,
      creator,
      customer: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };
    console.log(paymentInfo);


    const {data} = await axios.post(
      `${import.meta.env.VITE_API_URL}/create-checkout-session`,
      paymentInfo,
    );

    window.location.href= data.url
    console.log(data.url);
  };


//   const handlePayment = async () => {
//   try {
//     const paymentInfo = {
//       contestId: _id,
//       name,
//       category,
//       price,// নিশ্চিত করা হচ্ছে এটি নাম্বার
//       quantity: (quantity) || 1,
//       description,
//       image,
//       creator,
//       customer: {
//         name: user?.displayName,
//         email: user?.email,
//         image: user?.photoURL,
//       },
//     };

//     const { data } = await axios.post(
//       `${import.meta.env.VITE_API_URL}/create-checkout-session`,
//       paymentInfo
//     );

//     if (data.url) {
//       window.location.href = data.url;
//     }
//   } catch (error) {
//     console.error("Payment Error:", error.response?.data?.message || error.message);
//     alert("Payment initiation failed! Please check console for details.");
//   }
// };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none "
      onClose={closeModal}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl rounded-2xl"
          >
            <DialogTitle
              as="h3"
              className="text-lg font-medium text-center leading-6 text-gray-900"
            >
              Be Sure Before Join The Contest
            </DialogTitle>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Contest: {name}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Category: {category} </p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Customer: {user?.displayName}
              </p>
            </div>

            <div className="mt-2">
              <p className="text-sm text-gray-500">Price: ${price}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Available: {quantity}</p>
            </div>
            <div className="flex mt-2 justify-around">
              <button
                onClick={handlePayment}
                type="button"
                className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              >
                Proceed to Pay
              </button>
              <button
                type="button"
                className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default PurchaseModal;

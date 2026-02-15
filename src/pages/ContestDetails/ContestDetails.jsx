import Container from "../../components/Shared/Container";
import Heading from "../../components/Shared/Heading";
import Button from "../../components/Shared/Button/Button";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import Countdown from "react-countdown"; 

const ContestDetails = () => {
  let [isOpen, setIsOpen] = useState(false);

  const { id } = useParams();
  const {
    data: contest = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["contest", id],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/contests/${id}`
      );
      return result.data;
    },
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isLoading) return <LoadingSpinner />;

 
  const { 
    image, name, description, category, price, creator, 
    deadline, participantsCount, prizeMoney, winner 
  } = contest;

  // checking is deadline has passed
  const isEnded = new Date() > new Date(deadline);

  return (
    <Container>
      <div className="mx-auto flex flex-col lg:flex-row justify-between w-full gap-12 my-10">
        {/* Left Side: Image */}
        <div className="flex flex-col gap-6 flex-1">
          <div className="w-full overflow-hidden rounded-xl shadow-lg">
            <img className="object-cover w-full h-[400px]" src={image} alt="contest" />
          </div>
        </div>

        {/* Right Side: Info */}
        <div className="md:gap-10 flex-1">
          <div className="flex justify-between items-start">
            <Heading title={`${name}`} subtitle={`Category: ${category}`} />
            {/* 1. Timmer section */}
            <div className="text-right">
              <p className="text-sm font-bold text-gray-500 uppercase">Ends In:</p>
              <div className="text-red-500 font-bold text-xl">
                <Countdown date={new Date(deadline)} />
              </div>
            </div>
          </div>

          <hr className="my-6" />
          <div className="text-lg font-light text-neutral-500">{description}</div>
          <hr className="my-6" />

          {/* 2. Prize & Participate info */}
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">Prize Money</p>
              <p className="text-2xl font-bold text-green-600">${prizeMoney}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total Participants</p>
              <p className="text-2xl font-bold text-blue-600">{participantsCount || 0}</p>
            </div>
          </div>

          <hr className="my-6" />

          {/* 3. creator info */}
          <div className="flex flex-row items-center gap-2">
            <span className="font-semibold">Contest Creator:</span>
            <img
              className="rounded-full"
              height="35"
              width="35"
              alt="Avatar"
              src={creator?.image}
            />
            <div className="font-medium">{creator?.name}</div>
          </div>

          <hr className="my-6" />

          {/* 4. payment registration */}
          <div className="flex justify-between items-center">
            <div>
               <p className="text-sm text-gray-500 font-bold">Registration Fee</p>
               <p className="font-bold text-3xl text-gray-700">${price}</p>
            </div>
            
            <div>
              {/* button disable by deadline */}
              <Button
                onClick={() => setIsOpen(true)}
                label={isEnded ? "Contest Ended" : "Register Now"}
                disabled={isEnded}
              />
            </div>
          </div>

          {/* 5. If wiiner display available */}
          {winner && (
            <div className="mt-8 p-4 bg-yellow-50 border-2 border-yellow-400 border-dashed rounded-xl flex items-center gap-4">
               <div className="text-3xl">🏆</div>
               <div>
                 <h3 className="font-bold text-yellow-800">Winner Declared!</h3>
                 <p className="text-gray-700">Winner: <strong>{winner.name}</strong></p>
               </div>
            </div>
          )}
        </div>
      </div>

      <PurchaseModal
        contest={contest}
        closeModal={closeModal}
        isOpen={isOpen}
        refetch={refetch} 
      />
    </Container>
  );
};

export default ContestDetails;
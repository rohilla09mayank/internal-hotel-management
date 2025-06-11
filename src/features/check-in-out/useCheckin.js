import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingin } = useMutation({
    mutationFn: ({ bookingId, breakfast }) => {
      console.log(breakfast);
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      });
    },
    onSuccess: () => {
      toast.success(`Booking Successfully Checked-in`);
      queryClient.invalidateQueries({ active: true });
      navigate(`/dashboard`);
    },
    onError: () => toast.error("Failed to Check-in"),
  });

  return { checkin, isCheckingin };
}

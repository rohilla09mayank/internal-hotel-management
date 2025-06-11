import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useGetBooking() {
  const { bookingId: id } = useParams();
  const { isLoading, data: bookingData } = useQuery({
    queryKey: ["bookings", id],
    queryFn: () => getBooking(id),
    retry: false,
  });

  return { isLoading, bookingData };
}

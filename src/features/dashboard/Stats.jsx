import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, cabinsCount, numDays }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce(
    (sum, curr) => sum + Number(curr.totalPrice),
    0
  );

  const totalCheckins = confirmedStays.length;

  const numerator = confirmedStays.reduce(
    (sum, curr) => sum + Number(curr.numNights),
    0
  );
  const denominator = Number(numDays) * cabinsCount;
  const occupancyRate = numerator / denominator;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />

      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={totalCheckins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={`${Math.round(occupancyRate * 100)}%`}
      />
    </>
  );
}

export default Stats;

import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useGetBooking } from "../bookings/useGetBooking";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const [addBreakfast, setAddBreakfast] = useState(false);
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { isLoading, bookingData: booking } = useGetBooking();
  const { checkin, isCheckingin } = useCheckin();

  useEffect(
    function () {
      setConfirmPaid(booking?.isPaid ?? false);
    },
    [booking]
  );

  const { settings, isLoading: isFetchingSettings } = useSettings();
  if (isLoading || isFetchingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const breakfastCost = settings.BreakfastPrice * numGuests * numNights;

  function handleCheckin() {
    if (!confirmPaid) return;

    const breakfast = addBreakfast
      ? {
          hasBreakfast: true,
          extrasPrice: Number(breakfastCost),
          totalPrice: Number(totalPrice + breakfastCost),
        }
      : {};

    checkin({ bookingId, breakfast });
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            disabled={isCheckingin}
            onChange={() => {
              setAddBreakfast((prev) => !prev);
              setConfirmPaid((confirm) => !confirm);
            }}
          >
            I wish to purchase breakfast for {numGuests} guests at{" "}
            {formatCurrency(breakfastCost)}
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={confirmPaid}
          disabled={confirmPaid || isCheckingin}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(totalPrice + breakfastCost)} (${formatCurrency(
                totalPrice
              )} + ${formatCurrency(breakfastCost)})`}
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingin}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;

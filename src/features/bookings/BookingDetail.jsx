import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";

import { useGetBooking } from "./useGetBooking";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import { useCheckin } from "../check-in-out/useCheckin";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { isLoading, bookingData } = useGetBooking();
  const navigate = useNavigate();
  const moveBack = useMoveBack();

  const { checkout, isCheckingOut } = useCheckout();
  const { checkin, isCheckingin } = useCheckin();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  if (isLoading) return <Spinner />;
  if (!bookingData) return <Empty resourceName="booking" />;
  const { id, status } = bookingData;
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{id}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={bookingData} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button
            disabled={isCheckingin}
            onClick={() => {
              checkin(id);
              navigate(`/checkin/${id}`);
            }}
          >
            Checkin
          </Button>
        )}
        {status === "checked-in" && (
          <Button onClick={() => checkout(id)} disabled={isCheckingOut}>
            Check out
          </Button>
        )}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;

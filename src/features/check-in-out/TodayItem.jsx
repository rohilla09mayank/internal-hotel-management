/* eslint-disable react/prop-types */
import styled from "styled-components";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";
import { Link } from "react-router-dom";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;
  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} nights</div>
      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Checkin
        </Button>
      )}
      {status === "checked-in" && (
        <CheckoutButton bookingId={id}>Checkin</CheckoutButton>
      )}
    </StyledTodayItem>
  );
}

export default TodayItem;

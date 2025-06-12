import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const LogoText = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  color: var(--color-brand-500);
  margin-top: 10px;
`;

function Logo() {
  return (
    <StyledLogo>
      <LogoText>Admin Panel</LogoText>
    </StyledLogo>
  );
}

export default Logo;

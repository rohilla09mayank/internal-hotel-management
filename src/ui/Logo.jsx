import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

// const Img = styled.img`
//   height: 9.6rem;
//   width: auto;
// `;

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
      {/* <Img src="/logo-light.png" alt="Logo" /> */}
      <LogoText>Admin Panel</LogoText>
    </StyledLogo>
  );
}

export default Logo;

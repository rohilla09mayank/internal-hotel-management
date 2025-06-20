import styled from "styled-components";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log into your account</Heading>
      <LoginForm />
      <div>
        <Heading as="h5">Demo Account</Heading>
        <Heading as="h6">
          <b>Email</b> : test@email.com
        </Heading>
        <Heading as="h6">
          <b>Password</b> : 12345678
        </Heading>
      </div>
    </LoginLayout>
  );
}

export default Login;

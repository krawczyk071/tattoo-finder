import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid var(--primary); /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

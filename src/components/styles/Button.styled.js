import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ primary }) =>
    primary ? css`var(--accent)` : "rgba(23, 26, 32, 0.8)"};
  border: none;
  margin-bottom: 1px;
  border-radius: 6px;
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 15px;
  height: 36px;
  line-height: 20px;
  margin-left: 8px;
  margin-right: 6px;
  min-width: 185px;
  padding: 0 16px 0 16px;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 4px 0.5rem -0.125rem rgba(0, 0, 0, 0.1),
    0 0.125rem 0.25rem -0.125rem rgba(0, 0, 0, 0.06);

  &:hover {
    background-color: rgba(23, 26, 32, 1);
    cursor: pointer;
  }

  &--success {
    background-color: #04aa6d;
    &:hover {
      background-color: #46a049;
    }
  }
  &--info {
    background-color: #2196f3;
    &:hover {
      background: #0b7dda;
    }
  }

  .btn--warning {
    background-color: #ff9800;
    &:hover {
      background: #e68a00;
    }
  }

  .btn--danger {
    background-color: #f44336;
    &:hover {
      background: #da190b;
    }
  }
`;

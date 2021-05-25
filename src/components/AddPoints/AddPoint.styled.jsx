import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin-top: 1rem;

  h5 {
    text-align: center;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:first-child {
    border-radius: 4px 0px 0px 4px;
  }
  &:nth-child(2) {
    border-radius: 0px;
  }

  &:last-child {
    border-radius: 0px 4px 4px 0px;
  }

  &:hover {
    opacity: 0.5;
  }
  &:active {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

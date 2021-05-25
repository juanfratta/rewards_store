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

  button {
    margin: 1rem;
  }
`;

export const Button = styled.button`
  background: #fecd00;
  padding: 1rem 0.5rem;
  border-radius: 50px;
  border: 1px solid white;
  color: #d89111fa;
  box-shadow: 3px 3px 4px 1px #b9b5b5;
  &:hover {
    opacity: 0.5;
  }
`;

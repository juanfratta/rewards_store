import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    border: none;
    padding: 5px 10px;
    border-radius: 15px;
    background: ${({ theme }) => theme.line_grey};
    color: ${({ theme }) => theme.primary};
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

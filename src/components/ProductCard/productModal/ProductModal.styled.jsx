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
    background: ${({ theme }) => theme.tag_grey};
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

export const Redeem = styled.div`
  width: 100%;
  color: #45ec61;
  border-radius: 50px;
  text-align: center;
  border: 1px solid #45ec61;
  p {
    margin: 10px;
  }
`;

export const ErrorRedeem = styled.div`
  width: 100%;
  color: #ec455b;
  border-radius: 50px;
  text-align: center;
  border: 1px solid #ec455b;
  p {
    margin: 10px;
  }
`;

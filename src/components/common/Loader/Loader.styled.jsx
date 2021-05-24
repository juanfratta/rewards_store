import styled from 'styled-components';

export const Loader = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: 5px solid ${({ theme }) => theme.line_grey};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.primary};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

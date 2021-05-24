import styled from 'styled-components';

export const Load = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgb(13, 37, 56, 0.3);
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

const Loader = () => {
  return <Load />;
};

export default Loader;

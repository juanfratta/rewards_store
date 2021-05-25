import styled from 'styled-components';

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.back_grey};
  height: calc(100vh - 50px);
  overflow: overlay;
  flex-direction: column;
`;

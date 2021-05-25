import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  color: #616161;
`;

export const UserInfo = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text_light};
    &:hover {
      color: ${({ theme }) => theme.primary};
    }

    span {
      padding-right: 10px;
    }
  }
`;

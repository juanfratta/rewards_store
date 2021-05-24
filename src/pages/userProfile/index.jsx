import { useContext } from 'react';
import { RewardStoreContext } from '../../contexts/context';

import { RedeemHistory } from '../../components';
import AddPoints from '../../components/AddPoints';
import styled from 'styled-components';

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserProfile = () => {
  const { user, error_user } = useContext(RewardStoreContext);

  return (
    <UserProfileContainer>
      {user && (
        <>
          <RedeemHistory />
          <AddPoints />
        </>
      )}
      {error_user && <h1 style={{ color: 'red' }}>Error laod data user</h1>}
    </UserProfileContainer>
  );
};

export default UserProfile;

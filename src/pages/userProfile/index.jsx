import { RedeemHistory } from '../../components';
import AddPoints from '../../components/AddPoints';

import { UserProfileContainer } from './index.styled';

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <RedeemHistory />
      <AddPoints />
    </UserProfileContainer>
  );
};

export default UserProfile;

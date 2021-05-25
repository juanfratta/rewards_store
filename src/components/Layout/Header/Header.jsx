import { useContext } from 'react';
import { RewardStoreContext } from '../../../contexts/context';

import { Link } from 'react-router-dom';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderWrapper, UserInfoContainer, UserInfo } from './Header.styled';
import { ReactComponent as AerolabLogo } from '../../svgs/logo/AerolabLogo.svg';
import { ReactComponent as Coin } from '../../svgs/Icons/coin.svg';
import Tag from '../../common/Tag';
import Loader from '../../common/Loader';

const Header = () => {
  const { load_user, user, error_user, loading_points, points } =
    useContext(RewardStoreContext);

  return (
    <HeaderWrapper>
      <Link to="/">
        <AerolabLogo />
      </Link>
      <UserInfoContainer>
        {load_user && <p>Loading user... </p>}
        {user && (
          <>
            <UserInfo>
              <Link to="/user">
                <span style={{ paddingRight: '10px' }}>{user.name}</span>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </UserInfo>
            <Tag name={'onlyTag'} disabledOnClick={true}>
              <Coin width="25px" height="25px" />
              {loading_points ? <Loader size="20px" /> : points}
            </Tag>
          </>
        )}
        {error_user && <p style={{ color: 'red' }}>User Error</p>}
      </UserInfoContainer>
    </HeaderWrapper>
  );
};

export default Header;

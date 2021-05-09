import Tag from "../../common/Tag";

import { HeaderWrapper, UserInfo } from "./Header.styled";
import { ReactComponent as AerolabLogo } from "../../svgs/logo/AerolabLogo.svg";
import { ReactComponent as Coin } from "../../svgs/Icons/coin.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <AerolabLogo />
      <UserInfo>
        <p>userName</p>
        <Tag text={"text"}>
          <Coin width="25px" height="25px" />
        </Tag>
      </UserInfo>
    </HeaderWrapper>
  );
};

export default Header;

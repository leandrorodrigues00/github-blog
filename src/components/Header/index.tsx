import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { ProfileCard } from "../../pages/Home/components/ProfileCard";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  );
}

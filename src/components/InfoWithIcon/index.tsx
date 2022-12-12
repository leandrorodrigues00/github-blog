import { ReactNode } from "react";
import { InfoWithIconContainer } from "./styles";

interface infoWithIconProps {
  icon: string;
  text: string | ReactNode;
  textColor: string;
}

export function InfoWithIcon({ icon, text, textColor }: infoWithIconProps) {
  return (
    <InfoWithIconContainer textColor={textColor}>
      <img src={icon} alt="" />
      <p>{text}</p>
    </InfoWithIconContainer>
  );
}

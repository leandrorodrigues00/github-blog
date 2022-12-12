import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { PostCardContainer, PostCardFooter, PostCardHeader } from "./style";

import linkIcon from "../../../../assets/icons/Link-icon.svg";
import arrowLeft from "../../../../assets/icons/arrow-left.svg";

import githubIcon from "../../../../assets/icons/Github-icon.svg";
import calendarIcon from "../../../../assets/icons/calendar-day.svg";
import commentIcon from "../../../../assets/icons/comment-icon.svg";
import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";

export function PostCard() {
  const colors = useTheme();
  return (
    <PostCardContainer className="container">
      <PostCardHeader>
        <NavLink to="/">
          <img src={arrowLeft} alt="" />
          Voltar
        </NavLink>
        <a href="">
          ver no github <img src={linkIcon} alt="" />
        </a>
      </PostCardHeader>

      <h1>JavaScript data types and data structures</h1>

      <PostCardFooter>
        <InfoWithIcon
          icon={githubIcon}
          text="cameronwll"
          textColor={colors["base-span"]}
        />
        <InfoWithIcon
          icon={calendarIcon}
          text="Há 1 dia"
          textColor={colors["base-span"]}
        />
        <InfoWithIcon
          icon={commentIcon}
          text="5 comentários"
          textColor={colors["base-span"]}
        />
      </PostCardFooter>
    </PostCardContainer>
  );
}

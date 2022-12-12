import { InfoWithIcon } from "../../../../components/InfoWithIcon/index";
import {
  ProfileCardContainer,
  ProfileCardContent,
  ProfileCardHeader,
  ProfileCardInfos,
} from "./styles";
import { useTheme } from "styled-components";

import githubIcon from "../../../../assets/icons/Github-icon.svg";
import buildingIcon from "../../../../assets/icons/Building-icon.svg";
import userGroupIcon from "../../../../assets/icons/User-group-icon.svg";
import linkIcon from "../../../../assets/icons/Link-icon.svg";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface profileDataProps {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export function ProfileCard() {
  const colors = useTheme();

  const [profileData, setProfileData] = useState({} as profileDataProps);

  const hasCompany = profileData.company;

  async function fetchTProfileData() {
    const response = await api.get("users/leandrorodrigues00");
    setProfileData(response.data);
  }

  useEffect(() => {
    fetchTProfileData();
  }, []);

  console.log(profileData);

  return (
    <ProfileCardContainer className="container">
      <ProfileCardContent>
        <img src={profileData.avatar_url} alt="" />

        <ProfileCardInfos>
          <ProfileCardHeader>
            <h1>{profileData.name}</h1>
            <a href={profileData.html_url}>
              Github <img src={linkIcon} alt="" />
            </a>
          </ProfileCardHeader>

          <p>{profileData.bio}</p>
          <footer>
            <InfoWithIcon
              text={profileData.login}
              icon={githubIcon}
              textColor={colors["base-subtitle"]}
            />
            <InfoWithIcon
              text={hasCompany ? profileData.name : "Rocketseat"}
              icon={buildingIcon}
              textColor={colors["base-subtitle"]}
            />
            <InfoWithIcon
              text={`${profileData.followers} seguidores`}
              icon={userGroupIcon}
              textColor={colors["base-subtitle"]}
            />
          </footer>
        </ProfileCardInfos>
      </ProfileCardContent>
    </ProfileCardContainer>
  );
}

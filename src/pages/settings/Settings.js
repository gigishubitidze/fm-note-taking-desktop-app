import React from "react";
import styled from "styled-components";
import NavListItem from "../../components/NavListItem";
//
import { ReactComponent as SunIcon } from "../../assets/images/icon-sun.svg";
import { ReactComponent as FontIcon } from "../../assets/images/icon-font.svg";
import { ReactComponent as LockIcon } from "../../assets/images/icon-lock.svg";
import { ReactComponent as LogoutIcon } from "../../assets/images/icon-logout.svg";
import Divider from "../../components/Divider.styled";
import { Outlet } from "react-router";
import { BASE_URL } from "../../Router";

const SettingsContainer = styled.div`
  flex: 1;
  display: flex;
`;

const Menu = styled.div`
  min-width: 258px;
  padding: 20px 16px 20px 32px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

const Content = styled.div`
  width: 592px;
  padding: 32px;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

function Settings() {
  return (
    <SettingsContainer>
      <Menu>
        <StyledList>
          <NavListItem icon={SunIcon} to={`${BASE_URL}/settings/colors`}>
            Color Theme
          </NavListItem>
          <NavListItem icon={FontIcon} to={`${BASE_URL}/settings/fonts`}>
            Font Theme
          </NavListItem>
          <NavListItem icon={LockIcon} to={`${BASE_URL}/settings/change-password`}>
            Change Password
          </NavListItem>
          <Divider $margin="0px" />
          <NavListItem icon={LogoutIcon} to={`${BASE_URL}/settings/logout`}>
            Logout
          </NavListItem>
        </StyledList>
      </Menu>
      <Content>
        <Outlet />
      </Content>
    </SettingsContainer>
  );
}

export default Settings;

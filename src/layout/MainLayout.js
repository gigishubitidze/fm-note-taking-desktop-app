import React from "react";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router";
import StyledToastContainer from "../components/Toastify";
import useTags from "../hooks/useTags";
import NavListItem from "../components/NavListItem";
import SimpleBarScroll from "../components/SimpleBarScroll";
import Divider from "../components/Divider.styled";
import Header from "./Header";
import { BASE_URL } from "../Router";
//
import { ReactComponent as TagIcon } from "../assets/images/icon-tag.svg";
import { ReactComponent as LogoIcon } from "../assets/images/logo.svg";
import { ReactComponent as HomeIcon } from "../assets/images/icon-home.svg";
import { ReactComponent as ArchiveIcon } from "../assets/images/icon-archive.svg";

const Wrapper = styled.div`
  padding: 0 36px;
`;

const Container = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  background-color: ${({theme}) => theme.colors.container};
`;

const Sidebar = styled.aside`
  width: 272px;
  padding: 12px 16px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.header`
  padding: 12px 0;
  margin-bottom: 16px;
`;

const StyledLogoIcon = styled(LogoIcon)`
  cursor: pointer;
  path:nth-child(2) {
    fill: ${({ theme }) => theme.colors.logoText};
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TagList = styled(NavList)`
  overflow: hidden;
`;

const TextDivider = styled.h2`
  height: 20px;
  padding: 0 8px;
  margin-bottom: 8px;
  ${({ theme }) => ({ ...theme.typography.preset4 })}
  color: ${({ theme }) => theme.colors.tagTitle};
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
`;

function MainLayout() {
  const { tags } = useTags();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <StyledToastContainer />
        <Sidebar>
          <LogoContainer>
            <StyledLogoIcon onClick={() => navigate(`${BASE_URL}/`)} />
          </LogoContainer>
          <NavList>
            <NavListItem icon={HomeIcon} to={`${BASE_URL}/all-notes`}>
              All Notes
            </NavListItem>
            <NavListItem icon={ArchiveIcon} to={`${BASE_URL}/archived-notes`}>
              Archived Notes
            </NavListItem>
          </NavList>

          <Divider $margin="8px 0" />
          
          <TextDivider>Tags</TextDivider>
          
          <TagList>
            <SimpleBarScroll>
              {tags.map((tagName) => (
                <NavListItem
                  key={tagName}
                  icon={TagIcon}
                  to={`${BASE_URL}/tag/${tagName}`}
                >
                  {tagName}
                </NavListItem>
              ))}
            </SimpleBarScroll>
          </TagList>
        </Sidebar>
        <Content>
          <Header />
          <MainContent>
            <Outlet />
          </MainContent>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default MainLayout;

import React, { useEffect } from "react";
import { useLocation, useMatches, useNavigate } from "react-router";
import styled from "styled-components";
import { ReactComponent as SettingsIcon } from "../assets/images/icon-settings.svg";
// import SearchField from "../components/SearchField";
import SearchField from "../components/inputs/SearchField";

const StyledHeader = styled.header`
  min-height: 81px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const TitleWrapper = styled.h1`
  margin-right: auto;
  ${({ theme }) => theme.typography.preset1}
  color: ${({ $isDynamic, theme }) =>
    $isDynamic ? theme.colors.titleMuted : theme.colors.title};
`;

const DynamicText = styled.span`
  margin-left: 6px;
  color: ${({ theme }) => theme.colors.title};
`;

const SettingsIconWrapper = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.settingsIcon};

  & svg {
    cursor: pointer;
  }
`;

function Header() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const matches = useMatches();
  const lastMatch = matches[matches.length - 1];

  const titleObj = lastMatch?.handle?.title || "Notes Application";

  const title =
    typeof titleObj === "function" ? titleObj(lastMatch.params) : titleObj;

  useEffect(() => {
    if (!location.pathname.startsWith("/search")) {
      setSearchQuery("");
    }
  }, [location.pathname]);

  return (
    <StyledHeader>
      <Title title={title} />
      <SearchField
        width="300px"
        placeholder="Search by title, content, or tags…"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            if (!searchQuery.trim()) {
              e.preventDefault();
              return;
            }
            navigate(`/search/${searchQuery.trim()}`);
          }
        }}
      />
      <SettingsIconWrapper>
        <SettingsIcon onClick={() => navigate("/settings")} />
      </SettingsIconWrapper>
    </StyledHeader>
  );
}

const Title = ({ title }) => {
  if (typeof title === "string") {
    return <TitleWrapper>{title}</TitleWrapper>;
  }

  return (
    <TitleWrapper $isDynamic={!!title.dynamic}>
      {title.prefix}
      {title.dynamic && <DynamicText>{title.dynamic}</DynamicText>}
    </TitleWrapper>
  );
};

export default Header;

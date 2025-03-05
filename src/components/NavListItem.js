import React from "react";
import styled from "styled-components";
import { ReactComponent as ChevronIcon } from "../assets/images/icon-chevron-right.svg";
import { NavLink } from "react-router";

const StyledNavLink = styled(NavLink)`
  width: 100%;
  height: 40px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.navLink};

  &.active {
    color: ${({ theme }) => theme.colors.navLinkActive};
    background-color: ${({ theme }) => theme.colors.navLinkBackgroundActive};
  }
`;

const LeftIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);

  ${StyledNavLink}.active & {
    color: ${({ theme }) => theme.colors.navLinkIconActive};
  }
`;

const Span = styled.span`
  ${({ theme }) => ({ ...theme.typography.preset4 })}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledChevronIcon = styled(ChevronIcon)`
  position: absolute;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.25s;

  ${StyledNavLink}.active & {
    opacity: 1;
  }
`;

function NavListItem({ icon: Icon, to, children }) {
  return (
    <li>
      <StyledNavLink to={to}>
        {Icon && (
          <LeftIcon>
            <Icon />
          </LeftIcon>
        )}
        <Span>{children}</Span>
        <StyledChevronIcon />
      </StyledNavLink>
    </li>
  );
}

export default NavListItem;

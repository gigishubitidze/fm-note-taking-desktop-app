import React from "react";
import styled from "styled-components";
import { Slide, toast, ToastContainer } from "react-toastify";
import { ReactComponent as CheckIcon } from "../assets/images/icon-checkmark.svg";
import { ReactComponent as CloseIcon } from "../assets/images/icon-cross.svg";
import { NavLink } from "react-router";

const StyledToastContainer = styled(ToastContainer).attrs(
  ({ theme: { mode } }) => ({
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeButton: false,
    theme: mode === "dark" ? "dark" : "light",
    transition: Slide,
  })
)`
  &&&.Toastify__toast-container {
  }
  
  .Toastify__toast {
  }
`;

const ToastWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.toast.text};
`;

const StyledCheckIcon = styled(CheckIcon)`
  width: 16px;
  height: 16px;

  path {
    fill: #21c16b;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  width: 16px;
  height: 16px;
  cursor: pointer;

  path {
    stroke: #99a0ae;
  }
`;

const ToastMessage = styled.span`
  flex: 1;
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.toast.text};
`;

function Toastify({ data, closeToast }) {
  const { message, linkProps } = data;

  return (
    <ToastWrapper>
      <StyledCheckIcon />
      <ToastMessage>{message}</ToastMessage>
      {linkProps && (
        <StyledNavLink
          to={linkProps.to || ""}
          onClick={closeToast}
          state={{ noteId: linkProps.noteId }}
        >
          {linkProps.text || ""}
        </StyledNavLink>
      )}
      <StyledCloseIcon onClick={closeToast} />
    </ToastWrapper>
  );
}

export const showInfoToast = (message, options) => {
  toast(Toastify, {
    data: { message, linkProps: options?.linkProps },
  });
};

export default StyledToastContainer;

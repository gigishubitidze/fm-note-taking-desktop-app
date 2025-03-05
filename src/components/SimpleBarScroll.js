import React from "react";
import SimpleBar from "simplebar-react";
import styled from "styled-components";

const SimpleBarStyle = styled(SimpleBar)`
  height: 100%;

  & .simplebar-scrollbar {
    &:before {
      background: orange;
    }

    & .simplebar-visible:before {
      opacity: 1;
    }
  }

  & .simplebar-track.simplebar-vertical {
    width: 10;
  }

  & .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
    height: 6;
  }

  & .simplebar-mask {
    z-index: "inherit";
  }
`;

function SimpleBarScroll({ children }) {
  return <SimpleBarStyle>{children}</SimpleBarStyle>;
}

export default SimpleBarScroll;

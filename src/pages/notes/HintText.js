import React from "react";
import styled from "styled-components";

const StyledHintText = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.hintText};
`;

const messages = {
  archived:
    "All your archived notes are stored here. You can restore or delete them anytime.",
  tag: (tagName) => `All notes with the ”${tagName}” tag are shown here.`,
};

function HintText({ filter = "" }) {
  const { key, value } = (() => {
    if (filter.startsWith("tag:")) {
      return {
        key: "tag",
        value: filter.replace(/^tag:/, "").trim(),
      };
    }

    return {
      key: filter,
      value: null,
    };
  })();

  const msgObj = messages[key];
  const message = typeof msgObj === "function" ? msgObj(value) : msgObj;
  return message ? <StyledHintText>{message}</StyledHintText> : null;
}

export default HintText;

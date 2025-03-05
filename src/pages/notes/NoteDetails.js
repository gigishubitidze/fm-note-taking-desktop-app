import React from "react";
import styled from "styled-components";
import SimpleBarScroll from "../../components/SimpleBarScroll";
import NoteProperty from "./NoteProperty";
import Divider from "../../components/Divider.styled";
import Button from "../../components/Buttons.styled";
//
import { ReactComponent as TagIcon } from "../../assets/images/icon-tag.svg";
import { ReactComponent as ClockIcon } from "../../assets/images/icon-clock.svg";
import { ReactComponent as SunIcon } from "../../assets/images/icon-status.svg";
import ArchiveAction from "./actions/ArchiveAction";
import RestoreAction from "./actions/RestoreAction";
import DeleteAction from "./actions/DeleteAction";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.2px;
`;

const Detailscontainer = styled.div`
  flex: 1;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.title};
`;

const Properties = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TextContentContainer = styled.div`
  flex: 1;
  overflow: hidden;
`;

const TextContent = styled.pre`
  white-space: pre-wrap;
  font-family: inherit;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ActionBarContainer = styled.div`
  width: 258px;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 20px 0 20px 16px;
  margin-right: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

function NoteDetails({ note }) {
  const { id, title, tags, lastEdited, isArchived, content } = note;

  return (
    <Container>
      <Detailscontainer>
        <Title>{title}</Title>

        <Properties>
          <NoteProperty icon={TagIcon} name="Tags" value={tags} />
          {isArchived && (
            <NoteProperty icon={SunIcon} name="Status" value="Archived" />
          )}
          <NoteProperty
            icon={ClockIcon}
            name="Last edited"
            value={lastEdited}
          />
        </Properties>

        <Divider $margin="0" />

        <TextContentContainer>
          <SimpleBarScroll>
            <TextContent>{content}</TextContent>
          </SimpleBarScroll>
        </TextContentContainer>

        <Divider $margin="0" />

        <ButtonContainer>
          <Button>Save Note</Button>
          <Button variant="secondary">Cancel</Button>
        </ButtonContainer>
      </Detailscontainer>

      <ActionBarContainer>
        {isArchived ? (
          <RestoreAction noteId={id} />
        ) : (
          <ArchiveAction noteId={id} />
        )}
        <DeleteAction noteId={id} />
      </ActionBarContainer>
    </Container>
  );
}

export default NoteDetails;

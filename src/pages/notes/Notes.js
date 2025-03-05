import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NoteCard from "./NoteCard";
import useNotes from "../../hooks/useNotes";
import { useParams } from "react-router";
import Button from "../../components/Buttons.styled";
import HintText from "./HintText";
import EmptyText from "./EmptyText";
import CreateNoteForm from "./form/CreateNoteForm";
import NoteDetails from "./NoteDetails";
import SimpleBarScroll from "../../components/SimpleBarScroll";

const NotesContainer = styled.div`
  flex: 1;
  display: flex;
`;

const StyledSidebar = styled.aside`
  width: 290px;
  padding: 20px 16px 20px 32px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

const NoteCardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

const ContentArea = styled.div`
  flex: 1;
`;

function Notes({ archived }) {
  const { tagName, searchQuery } = useParams();
  const filter = archived ? "archived" : tagName ? `tag:${tagName}` : "all";
  const { notes, isLoading, error } = useNotes(filter, searchQuery);

  const [activeNote, setActiveNote] = useState(null);
  const [showCreateform, setShowCreateForm] = useState(false);
  const lastActiveNoteRef = useRef();

  useEffect(() => {
    setShowCreateForm(false);
    setActiveNote(notes.length > 0 ? notes[0] : null);
  }, [notes]);

  const handleNoteClick = (noteId) => {
    setActiveNote(notes.find((note) => note.id === noteId));
    setShowCreateForm(false);
  };

  const showCreateForm = () => {
    lastActiveNoteRef.current = activeNote;
    setActiveNote(null);
    setShowCreateForm(true);
  };

  const hideCreateForm = () => {
    setShowCreateForm(false);
    setActiveNote(
      lastActiveNoteRef.current || (notes.length > 0 ? notes[0] : null)
    );
  };

  if (isLoading) return <p>Loading ...</p>;

  if (error) return <p>{`Error: ${error}`}</p>;

  return (
    <NotesContainer>
      <StyledSidebar>
        <Button onClick={showCreateForm}>+ Create New Note</Button>

        <HintText filter={filter} />
        {!notes.length && <EmptyText filter={filter} />}

        <NoteCardList>
          <SimpleBarScroll>
            {notes.map((note) => (
              <NoteCard
                key={note.id}
                id={note.id}
                title={note.title}
                tags={note.tags}
                lastEdited={note.lastEdited}
                onClick={handleNoteClick}
                isActive={note.id === activeNote?.id}
              />
            ))}
          </SimpleBarScroll>
        </NoteCardList>
      </StyledSidebar>

      <ContentArea>
        {showCreateform ? (
          <CreateNoteForm onCancel={hideCreateForm} />
        ) : (
          activeNote && <NoteDetails note={activeNote} />
        )}
      </ContentArea>
    </NotesContainer>
  );
}

export default Notes;

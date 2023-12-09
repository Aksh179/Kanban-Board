import React, { useState } from "react";
import ReactDOM from "react-dom";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
// Use your own styles to override the default styles
// import "./styles.css";

const board = {
  columns: [
    {
      id: 1,
      title: "Project",
      backgroundColor: "#fff",
      cards: [
        {
          id: 1,
          title:
            "Add Multi-Language Support-Enable multi-Language Support within the...",
          description: "Feature Request",
        },
        {
          id: 2,
          title: "Create Onboarding Tutorial for New USers",
          description: "Card content",
        },
      ],
    },
    {
      id: 2,
      title: "ToDo",
      cards: [
        {
          id: 9,
          title: "Add Mulit-Language Support",
          description: "Feature Request",
        },
        {
          id: 3,
          title: "Implement Email Notification",
          description: "Feature Request",
        },
        {
          id: 4,
          title: "Update User Profile Page UI",
          description: "...",
        },
      ],
    },
    {
      id: 3,
      title: "InProgress",
      cards: [
        {
          id: 10,
          title: "Optimize Database Queries for Performance",
          description: "Card content",
        },
      ],
    },
    {
      id: 4,
      title: "Done",
      cards: [
        {
          id: 12,
          title: "ENable Search Functionality",
          description: "Feature Request",
        },
        {
          id: 13,
          title: "Integrate Third-Party Payment Gateway",
          description: "FeatureRequest",
        },
      ],
    },
  ],
};

const items = [];

function ControlledBoard() {
  // You need to control the state yourself.
  const [controlledBoard, setBoard] = useState(board);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  return (
    <Board onCardDragEnd={handleCardMove} disableColumnDrag>
      {controlledBoard}
    </Board>
  );
}

function UncontrolledBoard() {
  return (
    <Board
      allowRemoveLane
      allowRenameColumn
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard={board}
      allowAddCard={{ on: "top" }}
      onNewCardConfirm={(draftCard) => ({
        id: new Date().getTime(),
        ...draftCard,
      })}
      onCardNew={console.log}
    />
  );
}

function App() {
  return (
    <>
      <h1>QuickSell Board</h1>
      <h4>Kanban Drag And Drop</h4>
      <UncontrolledBoard />
      <h4>Kanban board</h4>
      <p>Functionality QuickSell.</p>
      <p>
        In this kind of board, you can do whatever you want. We just mirror your
        board state.
      </p>
      <ControlledBoard />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

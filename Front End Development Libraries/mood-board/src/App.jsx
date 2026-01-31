import { MoodBoardItem } from "./components/MoodBoardItem";

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem
          color="#0000ff"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Beautiful Mountain with clear water"
        />
        <MoodBoardItem
          color="#e3e3e3"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Beautiful shore with clear water"
        />
        <MoodBoardItem
          color="#ff44aa"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Lush green grass in a peaceful meadow."
        />
        <MoodBoardItem
          color="#23ff11"
          image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
          description="A cute pigeon on a bridge."
        />
        <MoodBoardItem
          color="purple"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="A cool ship on a calm sea."
        />
      </div>
    </div>
  );
}

export default MoodBoard;

import { useEffect, useRef, useState } from "react";
import { dialogues } from "./dialogues";

export default function ExpertSystem() {
  return (
    <div className="w-full h-full max-h-full overflow-y-auto relative">
      <div className="max-w-4xl  mx-auto py-8 gap-4">
        <DialogueSystem />
      </div>
    </div>
  );
}

function DialogueSystem() {
  // State for storing current dialogue and selected options
  const [currentDialogue, setCurrentDialogue] = useState("start");
  const [dialogueHistory, setDialogueHistory] = useState([]);
  const [isThereAVerdict, setIsThereAVerdict] = useState(false);

  // Ref for auto-scroll
  const dialogueEndRef = useRef(null);

  // Function to handle option selection
  const handleOptionSelect = (nextDialogueId, optionText) => {
    // Find the next dialogue based on the selected option's ID
    const nextDialogue = dialogues.find((d) => d.id === nextDialogueId);

    if (nextDialogue === undefined) setCurrentDialogue("End");

    if (nextDialogue.penalty) setIsThereAVerdict(true);

    console.log(nextDialogue);

    // Add the current dialogue and selected option to history
    setDialogueHistory((prevHistory) => [
      ...prevHistory,
      {
        ...dialogues.find((d) => d.id === currentDialogue),
        selectedOption: optionText,
      },
    ]);

    // Set the next dialogue if exists
    if (nextDialogue) {
      setCurrentDialogue(nextDialogueId);
    }
  };

  // Scroll to the bottom of the dialogue history when it updates
  useEffect(() => {
    dialogueEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [dialogueHistory]);

  // Find the current dialogue object
  const activeDialogue = dialogues.find((d) => d.id === currentDialogue);

  return (
    <div className="dialogue-system flex flex-col gap-4">
      {/* Render history */}
      <div className="dialogue-history flex flex-col gap-4">
        {dialogueHistory.map((dialogue, index) => (
          <div key={index} className="dialogue-item">
            <p>{dialogue.question}</p>
            <p className="selected-option">
              Selected: {dialogue.selectedOption}
            </p>
          </div>
        ))}
      </div>

      {/* Render current dialogue */}
      {activeDialogue && (
        <div className="active-dialogue">
          <p>{activeDialogue.question}</p>
          <div className="options flex flex-col gap-2">
            {activeDialogue.options?.map((option) => (
              <button
                className="bg-amber-600"
                key={option.id}
                onClick={() => handleOptionSelect(option.id, option.text)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* VERDICT */}
      {isThereAVerdict && <div>{activeDialogue.penalty}</div>}

      <div className="min-h-40" ref={dialogueEndRef}></div>
    </div>
  );
}

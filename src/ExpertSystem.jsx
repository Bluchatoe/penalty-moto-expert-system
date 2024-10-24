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
        <DialogueContainer
          activeDialogue={activeDialogue}
          handleOptionSelect={handleOptionSelect}
        />
      )}

      {/* VERDICT */}
      {isThereAVerdict && (
        <VerdictComponent
          setCurrentDialogue={setCurrentDialogue}
          setDialogueHistory={setDialogueHistory}
          setIsThereAVerdict={setIsThereAVerdict}
        >
          {activeDialogue.penalty}
        </VerdictComponent>
      )}

      <div className="min-h-10" ref={dialogueEndRef}></div>
    </div>
  );
}

function VerdictComponent({
  children,
  setCurrentDialogue,
  setDialogueHistory,
  setIsThereAVerdict,
}) {
  return (
    <div>
      {/* Penalty Div */}
      <div>{children}</div>

      <div>
        <button
          onClick={() => {
            setCurrentDialogue("start");
            setDialogueHistory([]);
            setIsThereAVerdict(false);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

function DialogueContainer({ activeDialogue, handleOptionSelect }) {
  // STARTING DIALOGUE
  if (activeDialogue.id === "start") {
    return (
      <div className="active-dialogue flex flex-col gap-4">
        {/* Dialogue Header */}
        <div className="mb-8">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent mb-2">
            Hello! I'm MotoGuide,
          </h2>
          <p className="text-xl text-stone-300">
            Your Expert System for Understanding Penalties Under RA 11235
          </p>
        </div>

        <div className="flex items-start gap-4 mb-1">
          <div className="h-11 aspect-square bg-amber-600 p-2 outline outline-1 outline-offset-2 outline-amber-200/30">
            <img src="/src/assets/helmet_white.png" alt="MotoGuideAvatar" />
          </div>
          <div>
            <h4 className="text-amber-300/80 text-sm">MotoGuide</h4>
            <p>First Question, {activeDialogue.question}?</p>
          </div>
        </div>

        <div className="options grid grid-areas-parent p-3 bg-stone-900 border-stone-100/10 border">
          {/* NUMBER PLATE */}
          <div
            className={`bg-amber-600 area-1`}
            key={activeDialogue.options[0].id}
            onClick={() =>
              handleOptionSelect(
                activeDialogue.options[0].id,
                activeDialogue.options[0].text
              )
            }
          >
            <div className="z-10 text-white absolute inset-0 p-4">
              <h4>Category 1</h4>

              <h2>{activeDialogue.options[0].text}</h2>
            </div>

            <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-100/30 opacity-20 z-0"></div>
          </div>

          {/* REGISTRATION */}
          <div
            className={`bg-amber-600 area-2`}
            key={activeDialogue.options[1].id}
            onClick={() =>
              handleOptionSelect(
                activeDialogue.options[1].id,
                activeDialogue.options[1].text
              )
            }
          >
            <div className="z-10 text-white absolute inset-0 p-4">
              <h4>Category 3</h4>

              <h2>{activeDialogue.options[1].text}</h2>
            </div>

            <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-100/30 opacity-20 z-0"></div>
          </div>

          {/* LAW ENFORCER */}
          <div
            className={`bg-amber-600 area-3`}
            key={activeDialogue.options[2].id}
            onClick={() =>
              handleOptionSelect(
                activeDialogue.options[2].id,
                activeDialogue.options[2].text
              )
            }
          >
            <div className="z-10 text-white absolute inset-0 p-4">
              <h4>Category 4</h4>

              <h2>{activeDialogue.options[2].text}</h2>
            </div>

            <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-100/30 opacity-20 z-0"></div>
          </div>

          {/* CRIME */}
          <div
            className={`bg-amber-600 area-4`}
            key={activeDialogue.options[3].id}
            onClick={() =>
              handleOptionSelect(
                activeDialogue.options[3].id,
                activeDialogue.options[3].text
              )
            }
          >
            <div className="z-10 text-white absolute inset-0 p-4">
              <h4>Category 2</h4>

              <h2>{activeDialogue.options[3].text}</h2>
            </div>

            <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-100/30 opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
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
  );
}

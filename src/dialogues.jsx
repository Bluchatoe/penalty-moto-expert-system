export const dialogues = [
  {
    id: "start",
    question:
      "What Category suits your legal concern about the usage of motorcycle",
    options: [
      { id: "numberPlateCat", text: "Number Plate" },
      { id: "registrationCat", text: "Registration" },
      { id: "lawEnforcerCat", text: "Law Enforcer" },
      { id: "comOfCrimeCat", text: "Commission of Crime" },
    ],
  },
  //NUMBER PLATE CATEGORY
  {
    id: "numberPlateCat",
    question: "What is your concern regarding Number plate?",
    options: [
      {
        id: "driveWithoutNumber",
        text: "Driving without a number plate or readable number plate.",
      },
      { id: "lostNumber", text: "Lost Number Plate" },
      {
        id: "manipulatedNumber",
        text: "Erased, Tampered, Forged, Imitated, Covered or Concelead Number Plate",
      },
      {
        id: "buyOrSellNumber",
        text: "Bought or Sold a motorcycle with an erased, tampered, altered, forged or imitated number plate.",
      },
      {
        id: "stolenNumber",
        text: "Stolen Number Plate or Readable Plate",
      },
    ],
  },

  {
    id: "buyOrSellNumber",
    question:
      "Is the Buyer or Seller aware that the number plate is erased, tampered, altered, forged or imitated number plate?",
    options: [
      {
        id: "awareYes",
        text: "Yes",
      },
      { id: "awareNo", text: "No" },
    ],
  },

  {
    id: "awareYes",
    question: null,
    options: null,
    penalty: "Both Buyer and Seller shall be punished Prison Mayor",
  },

  {
    id: "awareNo",
    question: null,
    options: null,
    penalty: "The Buyer OR The Seller will be punished Arresto mayor",
  },

  {
    id: "stolenNumber",
    question: "Is the used Number Plate or Readable Number Plate stolen?",
    options: [
      {
        id: "usedPlateStolenYes",
        text: "Yes",
      },
      { id: "noPenalty", text: "No" },
    ],
  },

  {
    id: "usedPlateStolenYes",
    question: null,
    options: null,
    penalty:
      "Prision Mayor or fine of not less than Fifty Thousand pesos (P50,000.00) but not more than One hundred thousand pesos (P100,000.00)",
  },

  {
    id: "driveWithoutNumber",
    question: null,
    options: null,
    penalty:
      "Fine of not less than Fifty thousand pesos (P50,000.00) but not more than One hundred thousand (P100,000.00) or both",
  },
  {
    id: "manipulatedNumber",
    question: null,
    options: null,
    penalty:
      "Prision Mayor, or Twenty thousand pesos (P20,000.00) but not more than Fifty thousand pesos (P50,000.00).",
  },
  {
    id: "lostNumber",
    question: "Did it lost the Number Plate within your capacity?",
    options: [
      {
        id: "lostYes",
        text: "Yes",
      },
      { id: "lostNo", text: "No" },
    ],
  },
  {
    id: "lostNo",
    question: "Is it damaged?",
    options: [
      {
        id: "lostYes",
        text: "Yes",
      },
      { id: "damagedNo", text: "No" },
    ],
  },
  {
    id: "lostYes",
    question: "Did you report it?",
    options: [
      {
        id: "reportYes",
        text: "Yes",
      },
      { id: "reportNo", text: "No" },
    ],
  },
  {
    id: "reportYes",
    question: null,
    options: null,
    penalty: "No Penalty",
  },
  {
    id: "reportNo",
    question: null,
    options: null,
    penalty:
      "Twenty thousand pesos (P20,000.00) but not more than Fifty thousand pesos (P50,000.00).",
  },

  {
    id: "damagedNo",
    question: "Is it stolen?",
    options: [
      {
        id: "stolenYes",
        text: "Yes",
      },
      { id: "reportYes", text: "No" },
    ],
  },

  {
    id: "stolenYes",
    question: "Is the stolen numberplate used in connection with an offense?",
    options: [
      {
        id: "connectOffenseYes",
        text: "Yes",
      },
      { id: "lostYes", text: "No" },
    ],
  },

  {
    id: "connectOffenseYes",
    question: "Did you report it within 3 days since the day it was lost?",
    options: [
      {
        id: "3daysReportYes",
        text: "Yes",
      },
      { id: "noPenalty", text: "No" },
    ],
  },

  {
    id: "3daysReportYes",
    question: null,
    options: null,
    penalty:
      "Twenty thousand pesos (P20,000.00) but not more than Fifty thousand pesos (P50,000.00).",
  },

  //Registration CATEGORY
  {
    id: "registrationCat",
    question: "What is your concern regarding Registration?",
    options: [
      {
        id: "purchase",
        text: "Registration After Purchase",
      },
      { id: "disposition", text: "Registration After Disposition" },
    ],
  },

  //LAW ENFORCER CATEGORY
  {
    id: "lawEnforcerCat",
    question: "Is the seized motorcycle reported surrendered within 24 hours?",
    options: [
      {
        id: "surrenderedYes",
        text: "Yes",
      },
      { id: "surrenderedNo", text: "No" },
    ],
  },

  //COMMISSION OF CRIME
  {
    id: "comOfCrimeCat",
    question: "Is the motorcycle used in a crime under Grave Felony?",
    options: [
      {
        id: "graveFelonyYes",
        text: "Yes",
      },
      { id: "graveFelonyNo", text: "No" },
    ],
  },

  //   NO PENALTY DIALOGUE
  { id: "noPenalty", question: null, options: null, penalty: "No Penalty" },
];
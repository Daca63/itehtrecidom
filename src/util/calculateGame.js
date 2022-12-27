import {
  resultMapperInverse,
  optionsMapperInverse,
} from "../constants/resultMapper";

export const calculateGameFunc = (userChoice, cpuChoice) => {
  if (userChoice === cpuChoice) return resultMapperInverse["Tie"];
  if (
    (userChoice === optionsMapperInverse["Paper"] &&
      cpuChoice === optionsMapperInverse["Rock"]) ||
    (userChoice === optionsMapperInverse["Rock"] &&
      cpuChoice === optionsMapperInverse["Scissors"]) ||
    (userChoice === optionsMapperInverse["Scissors"] &&
      cpuChoice === optionsMapperInverse["Paper"])
  ) {
    return resultMapperInverse["Win"];
  }
  return resultMapperInverse["Lose"];
};

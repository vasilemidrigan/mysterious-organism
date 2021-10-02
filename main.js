// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// A factory function that returns an object
const pAequorFactory = (nr, arr) => {
  return { specimenNum: nr, dna: arr };
};

// New object instance
const newOrganism = pAequorFactory(2, mockUpStrand());

// .mutate() method
const mutate = (obj) => {
  const dnaBases = ["A", "T", "C", "G"];
  const randomNr = Math.floor(Math.random() * obj["dna"].length);
  return (obj["dna"][randomNr] =
    dnaBases[Math.floor(Math.random() * dnaBases.length)]);
};

// .compareDNA() method
const compareDNA = (obj) => {
  const passedObj = pAequorFactory(4, mockUpStrand());
  const countCommonBases = [];
  for (let i = 0; i < obj["dna"].length; i++) {
    if (obj["dna"][i] === passedObj["dna"][i]) {
      countCommonBases.push(obj["dna"][i]);
    }
  }
  const coincidencePercentage = Math.floor(
    (countCommonBases.length / passedObj["dna"].length) * 100
  );
  return `Specimen #${obj["specimenNum"]} and Specimen #${passedObj["specimenNum"]} have #${coincidencePercentage}% in common.`;
};

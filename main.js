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

// Implementing .mutate() method to our newOrganism object
newOrganism["mutate"] = function () {
  const dnaBases = ["A", "T", "C", "G"];
  const exceptingSameElement = [...dnaBases];
  const randomNr = Math.floor(Math.random() * this.dna.length);
  if (this.dna[randomNr] === "A") {
    exceptingSameElement.splice(0, 1);
    return (this.dna[randomNr] =
      exceptingSameElement[
        Math.floor(Math.random() * exceptingSameElement.length)
      ]);
  } else if (this.dna[randomNr] === "T") {
    exceptingSameElement.splice(1, 1);
    return (this.dna[randomNr] =
      exceptingSameElement[
        Math.floor(Math.random() * exceptingSameElement.length)
      ]);
  } else if (this.dna[randomNr] === "C") {
    exceptingSameElement.splice(2, 1);
    return (this.dna[randomNr] =
      exceptingSameElement[
        Math.floor(Math.random() * exceptingSameElement.length)
      ]);
  } else {
    return (this.dna[randomNr] =
      exceptingSameElement[
        Math.floor(Math.random() * exceptingSameElement.length)
      ]);
  }
};

// Implementing .compareDNA() method to our newOrganism object
newOrganism["compareDNA"] = function () {
  const passedObj = pAequorFactory(4, mockUpStrand());
  const countCommonBases = [];
  for (let i = 0; i < this.dna.length; i++) {
    if (this.dna[i] === passedObj["dna"][i]) {
      countCommonBases.push(this.dna[i]);
    }
  }
  const coincidencePercentage = Math.floor(
    (countCommonBases.length / passedObj["dna"].length) * 100
  );
  return `Specimen #${this.specimenNum} and Specimen #${passedObj["specimenNum"]} have #${coincidencePercentage}% in common.`;
};

// Implementing .willLikelySurvive() method

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
//  A likelier chance of survive if their DNA is made up of at least 60% of 'C' or 'G' bases
newOrganism["willLikelySurvive"] = function () {
  let baseC = 0;
  let baseG = 0;
  this.dna.forEach((element) => {
    switch (element) {
      case "C":
        baseC += 1;
        break;
      case "G":
        baseG += 1;
        break;
    }
  });
  if (baseC >= 9 || baseG >= 9) {
    return true;
  } else {
    return false;
  }
};

// An array of 30 pAequor object instances
const pAequorObjects = [];
const creatPAequorObjInst = function () {
  for (let i = 0; i < 30; i++) {
    pAequorObjects.push(pAequorFactory(i + 1, mockUpStrand()));
  }
};
creatPAequorObjInst();

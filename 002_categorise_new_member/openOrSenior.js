
const SENIOR_AGE = 55;
const SENIOR_HANDICAP = 7;

const pairIsOpenOrSenior = ([age, handicap]) => age >= SENIOR_AGE
    && handicap > SENIOR_HANDICAP
        ? "Senior" : "Open";

const openOrSenior = pairs => pairs.map(pairIsOpenOrSenior);

module.exports = {
    openOrSenior
};
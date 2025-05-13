import { students } from './data_44.js';
console.log('student', students);

let stat = {
  pass: 0,
  fail: 0,
  sum: 0,
  average: 0,
  highest: -100,
  lowest: 200,
};

const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');

const resetStat = () => {
  stat.pass = 0;
  stat.fail = 0;
  stat.sum = 0;
  stat.average = 0;
  stat.highest = -100;
  stat.lowest = 200;
};

const computeStat = (s) => {
  resetStat();
  s.forEach((item) => {
    if (item.score > 59.5) stat.pass++;
    else stat.fail++;
    stat.sum += item.score;
    stat.average = stat.sum / s.length;
  });
};

const computeHighest = (s) => {
  stat.highest = -100;
  s.forEach((item) => {
    if (item.score > stat.highest) stat.highest = item.score;
  });
  return stat.highest;
};

const computeLowest = (s) => {
  stat.lowest = 200;
  s.forEach((item) => {
    if (item.score < stat.lowest) stat.lowest = item.score;
  });
  return stat.lowest;
};

const outputStat = (s, isSort, result) => {
  const resultText = `
    <h3 class='mt-4'> Array Statistics for ${
      result === 'result1' ? 'result1' : 'result2'
    } </h3>
    <p>After sorting descending: </p>
    <p>${JSON.stringify(s)}</p>
    <p>Total: ${s.length}</p>
    <p>Pass: ${stat.pass}</p>
    <p>Fail: ${stat.fail}</p>
    <p>Highest: ${isSort === true ? s[0].score : computeHighest(s)}</p>
    <p>Lowest: ${isSort === true ? s[s.length - 1].score : computeLowest(s)}</p>
    <p>Average: ${stat.average.toFixed(1)}</p>  
  `;

  if (result === 'result1') {
    result1.innerHTML = resultText;
  } else if (result === 'result2') {
    result2.innerHTML = resultText;
  }
};

// sdata.push(85);
computeStat(students);
outputStat(students, false, 'result1');

const toSorted = students.toSorted(function (a, b) {
  return b.score - a.score;
});
console.log('after sorting', students);
console.log('toSorted', toSorted);

computeStat(toSorted);
outputStat(toSorted, true, 'result2');
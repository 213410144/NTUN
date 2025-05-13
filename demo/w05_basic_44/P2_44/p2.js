import { sdata }  from './data_44.js';
console.log('sdata' , sdata);

const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');

const computePass = (s) => {
  let pass = 0;
  s.forEach((score)=>{
    if( score >= 59.5) pass++;
  });
  return pass;
};

const computeFail = (s) => {
  let fail = 0;
  s.forEach((score)=>{
    if( score < 59.5) fail++;
  });
  return fail;
};

const computeHighest = (s) =>{
  let highest = 100;
  s.forEach((score) => {
    if (score > highest) highest = score;
  });
  return highest;
};

const computeLowest = (s) =>{
  let lowest = 200;
  s.forEach((score) => {
    if (score >lowest) lowest = score;
  });
  return lowest;
};

const computeAverage = (s) => {
  let sum =0;
  s.forEach((score) => {
    sum += score;
  });
  return sum / s.length;
};


const outputStat1 = (s) => {
  result1.innerHTML = `
  <h3 class='my-4'> Array Statistics </h3>
  <p>sdata original: </P>
  <p>${JSON.stringify(s)}</p>
        <p>Total: ${s.length}</p>
        <p>pass: ${computePass(s)}</p>
        <p>Fail: ${computeFail(s)}</p>
        <P>Highest:${computeHighest(s)}</P>
        <P>Lowest: ${computeLowest(s)}</P>
        <P>Average: ${computeAverage(s).toFixed(1)}</P>
  `;
};

//sdata.push(85);

outputStat1(sdata);

const toSorted = sdata.toSorted(function(a,b) {
  return b - a;
});
console.log('sdata after sorting', sdata);
console.log('toSorted ', toSorted);

let stat = {
  pass:0 ,
  fail:0 ,
  sum: 0,
  average: 0,
};

const outputStat2 = (s) => {
  result1.innerHTML = `
  <h3 class='my-4'> Array Statistics </h3>
  <p>toSorted  after storing descending: </P>
  <p>${JSON.stringify(s)}</p>
        <p>Total: ${s.length}</p>
        <p>pass: ${stat.pass}</p>
        <p>Fail: ${stat.fail}</p>
        <P>Highest:${s[0]}</P>
        <P>Lowest: ${s[s.length - 1]}</P>
        <P>Average: ${stat.average.toFixed(1)}</P>
  `;
};

const computeStat = (s) => {
  s.forEach((score) => {
    if (score > 59.5) stat.pass++;
    else stat.fail++;
    stat.sum += score;
    stat.average = stat.sum / s.length;
  });
};

computeStat(toSorted);
outputStat2(toSorted);



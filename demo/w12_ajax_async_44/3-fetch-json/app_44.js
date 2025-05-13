const btn = document.querySelector('.btn');
const url ='./api/person.json';

btn.addEventListener('click', () => {
  fetchData();
});


const fetchData = () => {
const xhr = new XMLHttpRequest();
console.log('xhr',xhr);

xhr.open('GET',url);



xhr.onreadystatechange = () => {
  console.log('xhr',xhr);
if(xhr.readyState === 4 && xhr.status === 200) {
  const data = JSON.parse(xhr.responseText);
  console.log('data',data);
  // console.log('data in string', JSON.stringify(data))
  const displayData = data.map((item) => {
return`
<p> ${item.name} </P>
`;
  })
  .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
} else {
  console.log({
    status: xhr.status,
    text: xhr.statusText,
  });
}
};

xhr.send();
};




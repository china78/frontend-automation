import { getWorkList } from "./data";
import './style.css';
import deadlift from './assets/images/deadlift.jpeg';

const datas = getWorkList();

const ul = document.createElement('ul');

datas.forEach(data => {
  const li = document.createElement('li');
  li.innerHTML = data;
  ul.appendChild(li);
})

document.body.appendChild(ul);

const img = document.createElement('img');
img.src = deadlift;

document.body.appendChild(img);

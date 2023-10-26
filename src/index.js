import { getWorkList } from './data';
import './style.css';
import deadlift from '@/assets/images/deadlift.jpeg';
import '@/test/date/printDate.js';

const data = getWorkList();

const ul = document.createElement('ul');

data.forEach((power) => {
  const li = document.createElement('li');
  li.innerHTML = power;
  ul.appendChild(li);
});

document.body.appendChild(ul);

const img = document.createElement('img');
img.src = deadlift;

document.body.appendChild(img);

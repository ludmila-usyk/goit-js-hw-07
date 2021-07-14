const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

const makeGallery = ({url, alt}) => {
    return `<li>
    <img src = "${url}" alt = "${alt}">
    </li>`;
}

const imgEl = document.querySelector('#gallery');

const addGallery = images.map(makeGallery).join('');
imgEl.insertAdjacentHTML('afterend', addGallery);

var elems = document.getElementsByTagName('img'); // получает кол-цию елементов
for(var i=0; i<elems.length; i++) elems[i].style.width='640px';


const cats1 = [{
  'id': 'YdAqiUkUoWA',
  'url': 'img/cats-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'img/cats-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': 'img/cats-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'img/cats-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'img/cats-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'img/cats-6.jpg',
  'description': '',
}];

const cars1 = [{
  'id': 'YdAqiUkUoWA',
  'url': 'img/cars-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'img/cars-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': 'img/cars-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'img/cars-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'img/cars-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'img/cars-6.jpg',
  'description': '',
}];

const flowers1 = [{
  'id': 'YdAqiUkUoWA',
  'url': 'img/flowers-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'img/flowers-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': 'img/flowers-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'img/flowers-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'img/flowers-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'img/flowers-6.jpg',
  'description': '',
}];


// TODO: напишите код для формирования тематического набора данных

const newCats= cats1.map((item) =>
  ({ id: `${item.id}-1`,  url: `${item.url}`, description: `${item.description}` } ));
const cats = [...cats1, ...newCats]; 

const newCars= cars1.map((item) =>
  ({ id: `${item.id}-1`,  url: `${item.url}`, description: `${item.description}` } ));
const cars = [...cars1, ...newCars]; 

const newFlowers= flowers1.map((item) =>
  ({ id: `${item.id}-1`,  url: `${item.url}`, description: `${item.description}` } ));
const flowers = [...flowers1, ...newFlowers]; 

const imageCollection = {
       cats, flowers, cars,
      };
// console.log(imageCollection)

const results = [
  { name: 'Аня', stepsCount: 16 },
  { name: 'Вася', stepsCount: 12 },
  { name: 'Петя', stepsCount: 19 }
];

// TODO: напишите код для перемешивания данных
//const getImages = (type) => [...imageCollection[type]];
const getImages = (type) => RANDOMIZED ? 
        [...imageCollection[type]].sort(() => 0.5 - Math.random()) : [...imageCollection[type]];

window.getWords = getImages;
window.results = results;


// const getWords = (type) => [...Words[type]];
// const getWords = (type) => RANDOMIZED ? 
//            [...Words[type]].sort(() => 0.5 - Math.random()) : [...Words[type]];
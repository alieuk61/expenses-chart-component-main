import data from '../data/data.json' assert { type: 'json' }; //this is how to get json data from another file
const barContainer = document.querySelector('.barchart-div')

//creating the elements
//we use of instead of in as json is an object in an array and we use of to loop in arrays
for (let bar of data){ //literally just looping through the json object
  let day = document.createElement('h5');

  day.style.margin = `${10}px ${0}`;

  let barElement = document.createElement('div');
  let barWrapper = document.createElement('div')

  //giving the bar names
  day.innerText = bar.day
  //give the bar(div) a size
  barElement.style.height = (bar.amount * 2.8) + 'px'
  barElement.style.width = 50 + 'px'
  //giving bars colour, different colour if its wednesday
  if (bar.day == 'wed' ){
    barElement.style.backgroundColor = 'hsl(186, 34%, 60%)'
  }else{
    barElement.style.backgroundColor = 'hsl(10, 79%, 65%)'
  }

  if (bar.day == 'wed' ){
    barElement.classList.add('hover1')
    barElement.classList.add("hover1:hover")
  }else{
    barElement.classList.add('hover')
    barElement.classList.add("hover:hover")
  }

  barElement.style.borderRadius = 6 + 'px';
  barWrapper.classList.add('bar-wrapper');

  day.style.display = 'flex';
  day.style.justifyContent = 'center';

  let barAmount = document.createElement('div');
  barAmount.style.height = 40 + 'px';
  barAmount.style.width = '60px';
  barAmount.style.backgroundColor = 'hsl(25, 47%, 15%)';
  barAmount.innerText = '$' + bar.amount;
  barAmount.style.display = 'flex';
  barAmount.style.justifyContent = 'center';
  barAmount.style.alignItems = 'center';
  barAmount.style.display = 'none';

  //create eventListener to make the barAmount appear and dissapear when hovered over


  //appendChild everything to container
  barWrapper.appendChild(barAmount)
  barWrapper.appendChild(barElement)
  barWrapper.appendChild(day)
  barContainer.appendChild(barWrapper)

}

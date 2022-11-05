'use strict'

import data from '../data/data.json' assert { type: 'json' } //this is how to get json data from another file
const barContainer = document.querySelector('.barchart-div')

//creating the elements
//we use of instead of in as json is an object in an array and we use of to loop in arrays
for (let bar of data){ //literally just looping through the json object
  let day = document.createElement('h5');
  let bar = document.createElement('div');
  let barWrapper = document.createElement('div')

  //giving the bar class names
  day.innerText = bar.day
  //give the bar(div) a size
  bar.style.height = (bar.amount * 2.8) + 'px'
  //giving bars colour, different colour if its wednesday
  if (bar.day == 'wed' ){
    bar.style.backgroundColor = 'hsl(186, 34%, 60%);'
  }else{
    bar.style.backgroundColor = 'hsl(10, 79%, 65%);'
  }

  //appendChild everything to container
  barWrapper.appendChild(day)
  barWrapper.appendChild(bar)
  barContainer.appendChild(barWrapper)

}

console.log(barContainer)

 //when hovering over a div we want the div to display data
//we will make the div visible when that happens


 //div containing data (div.innerHTML (data.json data))

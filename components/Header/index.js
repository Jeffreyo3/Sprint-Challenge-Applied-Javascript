// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //Create Element
    const header = document.createElement('div');
    const date = document.createElement('span');
    const headerOne = document.createElement('h1');
    const temp = document.createElement('span');

    //Create Structure
    header.appendChild(date);
    header.appendChild(headerOne);
    header.appendChild(temp);

    //Set Content
        //Today's Date
        // var currentTime = new Date();

    date.textContent = 'SEPT 15, 2019';
    headerOne.textContent = 'Lambda Times';
    temp.textContent = '98°';

    //Apply Structure
    header.classList.add('header');
    date.classList.add('date');
    headerOne.classList.add('h1');
    temp.classList.add('temp');

    //Return Component
    return header;
};

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());
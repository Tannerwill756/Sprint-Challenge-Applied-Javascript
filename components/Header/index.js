// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(item) {
    const parentDiv = document.createElement('div'),
            headerDate = document.createElement('span'),
            headerTitle = document.createElement('h1'),
            headerTemp = document.createElement('span');

            parentDiv.append(headerDate);
            parentDiv.append(headerTitle);
            parentDiv.append(headerTemp);

            parentDiv.classList.add('header');
            headerDate.classList.add('date');
            headerTemp.classList.add('temp');

    return parentDiv;        
}

const mainHeader = document.querySelector('.header-container');

mainHeader.append(Header);



// headerDate.textContent = 'Smarch 28, 2019';
// headerTitle.textContent = `Lambda Times`;
// headerTemp.textContent = `98`;
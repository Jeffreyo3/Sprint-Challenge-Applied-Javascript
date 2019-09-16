// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabsTopics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then((results) => {
    tabCreator(results);
    console.log(results);  

    const newTab = tabCreator(results);
    
    tabsTopics.appendChild(newTab);
  })
  .catch( err => {
    console.log("Error:", err);
  });

function tabCreator(data) {
    //Create Element
    // const topicsDiv = document.querySelector('.topics');
    const tab = document.createElement('div');

    //Create Structure
    // topicsDiv.appendChild(tab);

    //Set Content
    tab.textContent = data.topics;

    //Apply Structure
    tab.classList.add('tab');

    //Return Component
    return tab;
};

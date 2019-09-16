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
    console.log(results);
    results.data.topics.forEach(data => {
        const newTab = TabCreator(data);
        tabsTopics.appendChild(newTab);
    })

  })
  .catch( (err) => {
    console.log("Error:", err);
  });

function TabCreator(data) {
    //Create Element
    const tab = document.createElement('div');
    
    //Set Content
    tab.textContent = data;

    //Apply Structure
    tab.classList.add('tab');

    //Return Component
    return tab;
};

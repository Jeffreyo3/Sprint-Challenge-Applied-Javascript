// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response);
        const tabs = document.getElementsByClassName("tab");
        console.log(tabs);

        tabs[0].addEventListener("click", e => {
            cardContainer.innerHTML = "";
            response.data.articles.javascript.forEach(item => {
                cardContainer.appendChild(ArticleCreator(item));
            });
        });
        tabs[1].addEventListener("click", e => {
            cardContainer.innerHTML = "";
            response.data.articles.bootstrap.forEach(item => {
                cardContainer.appendChild(ArticleCreator(item));
            });
        });
        tabs[2].addEventListener("click", e => {
            cardContainer.innerHTML = "";
            response.data.articles.technology.forEach(item => {
                cardContainer.appendChild(ArticleCreator(item));
            });
        });
        tabs[3].addEventListener("click", e => {
            cardContainer.innerHTML = "";
            response.data.articles.jquery.forEach(item => {
                cardContainer.appendChild(ArticleCreator(item));
            });
        });
        tabs[4].addEventListener("click", e => {
            cardContainer.innerHTML = "";
            response.data.articles.node.forEach(item => {
                cardContainer.appendChild(ArticleCreator(item));
            });
        });
    });


function ArticleCreator(article) {

    //Create Element
    const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
            const imgCont = document.createElement('div');
                const img = document.createElement('img');
            const byName = document.createElement('span');

    //Create Structure
    card.appendChild(headline);
    card.appendChild(author);
        author.appendChild(imgCont);
            imgCont.appendChild(img);
        author.appendChild(byName);

    //Set Content
    headline.textContent = article.headline;
    img.src = article.authorPhoto;
    byName.textContent = `By ${article.authorName}`;

    //Apply Structure
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');
    img.classList.add('img');
    byName.classList.add('span');

    //Return Component
    return card;
};
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



function Cards (header, authorPhoto, authorName) {
    const parentCard = document.createElement('div'),
            headline = document.createElement('div'),
            author = document.createElement('div'),
            imgCon = document.createElement('div'),
            image = document.createElement('img'),
            authName = document.createElement('span');

        parentCard.append(headline);
        parentCard.append(author);
        author.append(imgCon);
        imgCon.append(image);
        author.append(authName);

        parentCard.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgCon.classList.add('img-container');

        headline.textContent = header;
        image.src = authorPhoto;
        authName.textContent = `By ${authorName}`;
     
    return parentCard;
}

const cardContainer = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // console.log(response.data.articles);

        response.data.articles.javascript.forEach( item => {
            // console.log(item)
            const cardItems = Cards(item.headline, item.authorPhoto, item.authorName);
            // console.log(cardItems)            
        
        cardContainer.append(cardItems);
        });
        
        response.data.articles.bootstrap.forEach( item => {
            // console.log(item)
            const cardItems = Cards(item.headline, item.authorPhoto, item.authorName);
            // console.log(cardItems)            
        
        cardContainer.append(cardItems);
        });
        response.data.articles.technology.forEach( item => {
            // console.log(item)
            const cardItems = Cards(item.headline, item.authorPhoto, item.authorName);
            // console.log(cardItems)            
        
        cardContainer.append(cardItems);
        });
        response.data.articles.jquery.forEach( item => {
            // console.log(item)
            const cardItems = Cards(item.headline, item.authorPhoto, item.authorName);
            console.log(cardItems)            
        
        cardContainer.append(cardItems);
        });

})
    .catch(error => {
        console.log('YOU GOT AN ERROR', error)
    })
// const ap = document.querySelector('#ap');
// const ap2 = document.querySelector('#ap2');
// const image = document.querySelector('.img-news');
// const titre = document.querySelector('.titre');

// const NEWSAPI_SCIENCE ='http://newsapi.org/v2/top-headlines?country=fr&category=science&apiKey=99dcfe7538084c93acab8a2787d9131c'
// const RSS_MONDE = 'https://www.francetvinfo.fr/monde.rss';
// const RSS_FR ='https://www.francetvinfo.fr/france.rss';
// const RSS_EURO ='https://www.francetvinfo.fr/monde/europe.rss';
// const RSS_ENV ='https://www.francetvinfo.fr/monde/environnement.rss';
// const RSS_ECO ='https://www.francetvinfo.fr/economie/tendances.rss';
//  //fetch mediapart
// fetch(NEWSAPI_SCIENCE)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })



// fetch(RSS_MONDE)
// .then(response => response.text())
// .then(str => new DOMParser().parseFromString(str, "text/xml"))
// .then(data => {
//     items = data.querySelectorAll('item')

//     items.forEach( item =>{

//         title = item.querySelector('title').innerHTML
//         pubDate = item.querySelector('pubDate').innerHTML
//         link = item.querySelector('link').innerHTML
//         img = item.querySelector('enclosure').getAttribute('url')
//         image.src =img
//         titre.innerText = title
//         console.log(title)
//         console.log(img)

//     })

    

// })



//  let ap = document.querySelector('#ap');
//  let ap2 = document.querySelector('#ap2');

// let search = document.querySelector('#search');
// let array =[];
// let requestURL = 'https://jsonplaceholder.typicode.com/posts';
// let request = new XMLHttpRequest();
// let noms =[];
// let contenu = [];
// request.open('GET', requestURL);
// request.responseType ='json';
// request.send();

// request.onload = function(){
//     let test = request.response;
//     names(test);
//     toto(test);
// }

// function names(jsonObj){
    
//     for( i =0; i<jsonObj.length; i++){
//         array.push(jsonObj[i].title);
//         contenu.push(jsonObj[i].body)        
        
//     }
// }
// console.log(contenu)
// //auto-completion
// search.addEventListener('input',function(e){

//     if(e.target.value){
//        noms = array.filter( nom => nom.toLowerCase().startsWith(e.target.value));
//        noms = noms.map(nom =>`<li class='result-title'> ${nom} </li>`).join('')
//        ap.innerHTML = noms;
//        let eli = document.querySelectorAll('.result-title');
//        eli.forEach( el => el.addEventListener('click', toto));
//     }else{
//         ap.innerHTML = '';

//     }
// })

// function toto(){
//    console.log(this.innerText)
//    content = contenu.filter( cont =>cont)
// }


//front
const newsROW = document.querySelector('.news-row')

function showNews (){

    for (i=0; i<=20;i++){
        newsROW.innerHTML +=
        `
        <div class="col-2 mini m-2">
                        <div class="overlay">
                            <p class="titre text-center px-2">Élection américaine : les recours annoncés par Donald Trump sont du "cinéma", selon le spécialiste des États-Unis Paul Schor</p>

                        </div>
                        
                        <img class= 'img-news img-fluid'  src="test.jpg" alt="">
                        <p class="date px-2 text-white"> Le 10/8/2020 à 6h30</p>

                    </div>
        
        `
    }

}
showNews()
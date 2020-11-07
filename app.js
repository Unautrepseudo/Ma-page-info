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
// const newsROW = document.querySelector('.news-row')

// function showNews (){

//     for (i=0; i<15;i++){
//         newsROW.innerHTML +=
//         `
//         <div class="col-2 mini m-2">
//                         <div class="overlay">
//                             <p class="titre text-center px-2">Élection américaine : les recours annoncés par Donald Trump sont du "cinéma", selon le spécialiste des États-Unis Paul Schor</p>

//                         </div>
                        
//                         <img class= 'img-news img-fluid'  src="test.jpg" alt="">
//                         <p class="date px-2 text-white"> Le 10/8/2020 à 6h30</p>

//                     </div>
        
//         `
//     }

// }
// showNews()


//////////////////////////////NAV BAR///////////////

const themesTable =[
    {
        name : 'Science',
        icone: `<i class="fas fa-microscope"></i>`,
        boxShad: 'rgba(8, 177, 163, 0.219)',
        lineColor : 'rgba(128, 177, 163, 0.416)'

    },
    {
        name : 'Economie',
        icone: `<i class="fas fa-piggy-bank"></i>`,
        boxShad: 'rgba(28, 177, 63, 0.416)',
        lineColor : 'rgba(28, 177, 63, 0.416)'

    },

    {
        name : 'France',
        icone: `<i class="fas fa-frog"></i>`,
        boxShad: 'rgba(28, 77, 163, 0.416)',
        lineColor : 'rgba(28, 77, 163, 0.416)'

    },
    {
        name : 'Europe',
        icone: `<i class="fas fa-euro-sign"></i>`,
        boxShad: 'rgba(28, 17, 13, 0.416)',
        lineColor : 'rgba(28, 17, 13, 0.416)'

    },
    {
        name : 'Monde',
        icone: `<i class="fas fa-globe"></i>`,
        boxShad: 'rgba(128, 177, 113, 0.516)',
        lineColor : 'rgba(128, 177, 113, 0.516)',

    },
    {
        name : 'Météo',
        icone: `<i class="fas fa-cloud-sun-rain"></i>`,
        boxShad: 'rgba(208, 17, 163, 0.316)',
        lineColor : 'rgba(208, 17, 163, 0.316)'

    }
]

const themeContainer = document.querySelector('.themes-container');
function showNavItems (){
    themesTable.forEach( elem =>
    {
        themeContainer.innerHTML += 
        `   
            <div class="theme-bloc ">
                <div class='nav-icone'>${elem.icone}</div>
                <div class=' nav-texte '>${elem.name}</div>
            </div>
        `;
    })

    
}
showNavItems()

function handleNavItems(){
    const navThemes= document.querySelectorAll('.theme-bloc');
    const nav = document.querySelector('.nav');

    for (i=0; i< navThemes.length;i++){
        const properColor = [themesTable[i].lineColor]
        const properShadow = [themesTable[i].boxShad]
        navThemes[i].addEventListener('mouseover',function(){
            let navIcon= this.querySelector('.nav-icone'),
                navText= this.querySelector('.nav-texte')

            navIcon.style.opacity = 0;
            navText.style.opacity = 1;    
            this.style.boxShadow = `1px 1px 4px ${properShadow}`
            nav.style.borderBottom = `2px solid ${properColor}`;
        })

        navThemes[i].addEventListener('mouseout',function(){
            let navIcon= this.querySelector('.nav-icone'),
                 navText= this.querySelector('.nav-texte')

            this.style.boxShadow = null
            navIcon.style.opacity = 1;
            navText.style.opacity = 0;
            nav.style.borderBottom = '1px solid rgba(8, 177, 163, 0.116)';

        })
    }
}
handleNavItems();
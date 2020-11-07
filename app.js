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



// const themBloc = document.querySelector('.yuyu');
// const flip = document.querySelector('.nav-flip');
// const flap = document.querySelector('.nav-flap');
// const nav = document.querySelector('.nav');
// themBloc.addEventListener('mouseover',function(){
//     flip.style.opacity = 0;
//     flap.style.opacity = 1;
//     flap.style.background = 'linear-gradient(149deg, rgba(58,96,180,0) 0%, rgba(29,175,253,0) 82%, rgba(69,168,252,0.783650078369906) 100%)';
//     nav.style.borderBottom ='1px solid rgba(8, 177, 163, 0.916)';
// })
// themBloc.addEventListener('mouseout',function(){
//     flip.style.opacity = 1;
//     flap.style.opacity = 0;
//     nav.style.borderBottom ='1px solid rgba(8, 177, 163, 0.116)';

// })
const themesTable =[
    {
        name : 'Science',
        icone: `<i class="fas fa-microscope"></i>`,
        borderL :'1px solid rgba(15, 131, 151, 0.205)',
        borderR:'1px solid rgba(15, 131, 151, 0.281)',
        boxShad: '1px 1px 4px rgba(8, 177, 163, 0.219)',
        lineColor : '1px solid rgba(28, 177, 163, 0.916)',
        bckGround : 'linear-gradient(25deg, rgba(69,168,252,0) 0%, rgba(255,255,255,0) 67%, rgba(33,181,38,0.783650078369906) 100%)'

    },
    {
        name : 'Economie',
        icone: `<i class="fas fa-piggy-bank"></i>`,
        borderL :'1px solid rgba(15, 131, 151, 0.205)',
        borderR:'1px solid rgba(15, 131, 151, 0.281)',
        boxShad: '1px 1px 4px rgba(8, 177, 163, 0.219)',
        lineColor : '1px solid rgba(28, 177, 163, 0.916)',
        bckGround : 'linear-gradient(25deg, rgba(69,168,252,0) 0%, rgba(255,255,255,0) 67%, rgba(33,181,38,0.783650078369906) 100%)'

    },

    {
        name : 'France',
        icone: `<i class="fas fa-frog"></i>`,
        borderL :'1px solid rgba(15, 131, 151, 0.205)',
        borderR:'1px solid rgba(15, 131, 151, 0.281)',
        boxShad: '1px 1px 4px rgba(8, 177, 163, 0.219)',
        lineColor : '1px solid rgba(28, 177, 163, 0.916)',
        bckGround : 'linear-gradient(25deg, rgba(69,168,252,0) 0%, rgba(255,255,255,0) 67%, rgba(33,181,38,0.783650078369906) 100%)'

    },
    {
        name : 'Europe',
        icone: `<i class="fas fa-euro-sign"></i>`,
        borderL :'1px solid rgba(15, 131, 151, 0.205)',
        borderR:'1px solid rgba(15, 131, 151, 0.281)',
        boxShad: '1px 1px 4px rgba(8, 177, 163, 0.219)',
        lineColor : '1px solid rgba(28, 177, 163, 0.916)',
        bckGround : 'linear-gradient(25deg, rgba(69,168,252,0) 0%, rgba(255,255,255,0) 67%, rgba(33,181,38,0.783650078369906) 100%)'

    },
    {
        name : 'Monde',
        icone: `<i class="fas fa-globe"></i>`,
        borderL :'1px solid rgba(15, 131, 151, 0.205)',
        borderR:'1px solid rgba(15, 131, 151, 0.281)',
        boxShad: '1px 1px 4px rgba(8, 177, 163, 0.219)',
        lineColor : '1px solid rgba(28, 177, 163, 0.916)',
        bckGround : 'linear-gradient(25deg, rgba(69,168,252,0) 0%, rgba(255,255,255,0) 67%, rgba(33,181,38,0.783650078369906) 100%)'

    },
    {
        name : 'Météo',
        icone: `<i class="fas fa-cloud-sun-rain"></i>`,
        borderL :'1px solid rgba(15, 131, 151, 0.205)',
        borderR:'1px solid rgba(15, 131, 151, 0.281)',
        boxShad: '1px 1px 4px rgba(8, 177, 163, 0.219)',
        lineColor : '1px solid rgba(28, 177, 163, 0.916)',
        bckGround : 'linear-gradient(25deg, rgba(69,168,252,0) 0%, rgba(255,255,255,0) 67%, rgba(33,181,38,0.783650078369906) 100%)'

    }
]


const themeContainer = document.querySelector('.themes-container');
function showNavItems (){
    themesTable.forEach( elem =>
    {
        themeContainer.innerHTML += 
        `   
            <div class="theme-bloc yaya">
                <div class='nav-icone'>${elem.icone}</div>
                <div class=' nav-texte '>${elem.name}</div>
            </div>
        `;
    })
    const navThemes= document.querySelectorAll('.theme-bloc');
    for (i=0; i< navThemes.length;i++){

        navThemes[i].addEventListener('mouseover',function(){
            let navIcon= this.querySelector('.nav-icone')
            let navText= this.querySelector('.nav-texte')

        navIcon.style.opacity = 0;
        navText.style.opacity = 1;
        })

        navThemes[i].addEventListener('mouseout',function(){
            let navIcon= this.querySelector('.nav-icone')
            let navText= this.querySelector('.nav-texte')
        navIcon.style.opacity = 1;
        navText.style.opacity = 0;
       

        })
    }
}
showNavItems()

function toggleContent(){
    
}

// const navIcon= document.querySelectorAll('.nav-icone');
// const navText= document.querySelectorAll('.nav-texte');
// const nav = document.querySelector('.nav')

// for (i=0; i< navThemes.length;i++){
//     navThemes[i].addEventListener('mouseover',function(){
//         console.log(this.name)

//         // navIcon[i].style.opacity = 0;
//         // navText[i].style.opacity = 1;
    
//         // this.style.boxShadow = table[i].boxShad;
//         // this.style.background = table[i].bckGround;
//         // this.style.borderLeft = table[i].borderL;
//         // this.style.borderRight = table[i].borderR;
//         // nav.style.borderBottom = table[i].lineColor;
//     })


    // navThemes[i].addEventListener('mouseout',function(){
    //     navIcon[i].style.opacity = 1;
    //     navText[i].style.opacity = 0;
    //     nav.style.borderBottom ='1px solid rgba(8, 177, 163, 0.116)';
    //     this.style.background = null;

    //     this.style.borderLeft = null;
    //     this.style.borderRight = null;
    //     this.style.boxShadow = null;

    // })
    
//}


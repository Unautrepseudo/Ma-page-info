const image = document.querySelector('.img-news'),
      titre = document.querySelector('.titre');
     NEWSAPI_SCIENCE ='http://newsapi.org/v2/top-headlines?country=fr&category=science&apiKey=99dcfe7538084c93acab8a2787d9131c';


 //fetch api
// fetch('http://api.openweathermap.org/data/2.5/weather?q=paris&appid=5c865a157fe8e27a102448fca6d932d0&lang=fr&units=metric')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })



    
//fetch rss
 const pubDateArray =[]
 const titleArray =[]
 const imgArray =[]
 const linkArray =[]

async function getData(){
    
    fetch(themesTable[0].flux)
    .then(response => response.text())
    .then(str => new DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        items = data.querySelectorAll('item')
    
        items.forEach( item =>{

            title = item.querySelector('title').innerHTML
            pubDate = item.querySelector('pubDate').innerHTML
            link = item.querySelector('link').innerHTML
            img = item.querySelector('enclosure').getAttribute('url')
            pubDateArray.push(pubDate)
            titleArray.push(title)
            imgArray.push(img)
            linkArray.push(link)
        })
    })
}
getData()





//////////////////////////FRONT

///////////////////////// NEWS ROW ///////////////////////////////////
const newsROW = document.querySelector('.news-row');
newsROW.innerHTML = '';

async function showNews (){
    await getData();
    if(newsROW.innerHTML == ''){
       
        for (i=0; i<titleArray.length;i++){
            let yoyo =[]
            yoyo.push(`${pubDateArray[i].toString().split(' ').slice(1,5).join(' ')}`)


            newsROW.innerHTML +=
            `
            <div class=" news-card mb-3 col-3 flex-column" >
                <a href="${linkArray[i]}" target ='newsFrame' class ="text-decoration-none" >
                    <div class=" mini ">
                        <img class= 'img-news img-fluid'  src="${imgArray[i]}" alt="">
                        <p class="date px-2 ">${yoyo}</p>
                    </div>
                    <div class="overlay  p-0 m-0">
                        <p class="titre  px-2">${titleArray[i]}</p>
                    </div>
                </a>
            </div>
            `
            
            

            

            let news = document.querySelectorAll('.news-card')
            news.forEach( el =>
                el.addEventListener('click',function(){
                    document.querySelector('.iframe-container').classList.toggle('opac')
                })
            )
        }
    }else{
        newsROW.innerHTML = '';
        pubDateArray.length = 0;
        titleArray.length = 0;
        imgArray.length = 0;
        pubDateArray.length = 0;
        document.querySelector('.news-frame').src ='';
    }

 
}



////////////////////////////// NAV BAR ///////////////

const themesTable =[
    {
        name : 'A la une',
        icone: 'fa-globe',
        boxShad: 'rgba(28, 77, 163, 0.416)',
        lineColor : 'rgba(28, 77, 163, 0.416)',
        flux: RSS_FR ='https://www.francetvinfo.fr/titres.rss'

    },
    {
        name : 'Europe',
        icone: 'fa-euro-sign',
        boxShad: 'rgba(28, 17, 13, 0.416)',
        lineColor : 'rgba(28, 17, 13, 0.416)',
        flux: RSS_EURO ='https://www.touteleurope.eu/rss/actualites.html'

    },
    {
        name : 'Asie',
        icone: 'fa-globe-asia',
        boxShad: 'rgba(128, 177, 113, 0.516)',
        lineColor : 'rgba(128, 177, 113, 0.516)',
        flux: RSS_MONDE = 'https://www.francetvinfo.fr/monde/asie.rss'

    },
    {
        name : 'Economie',
        icone: 'fa-piggy-bank',
        boxShad: 'rgba(28, 177, 63, 0.416)',
        lineColor : 'rgba(28, 177, 63, 0.416)',
        flux : RSS_ECO = 'https://www.francetvinfo.fr/economie.rss'

    },
    {
        name : 'Science',
        icone: 'fa-microscope',
        boxShad: 'rgba(8, 177, 163, 0.219)',
        lineColor : 'rgba(128, 177, 163, 0.416)',
        api : NEWSAPI_SCIENCE ='http://newsapi.org/v2/top-headlines?country=fr&category=science&apiKey=99dcfe7538084c93acab8a2787d9131c'

    },
    {
        name : 'Météo',
        icone: 'fa-cloud-sun-rain',
        boxShad: 'rgba(208, 17, 163, 0.316)',
        lineColor : 'rgba(208, 17, 163, 0.316)',
        api : API_METEO = "http://api.openweathermap.org/data/2.5/forecast?q=paris&appid=5c865a157fe8e27a102448fca6d932d0&lang=fr&units=metric"

    }
]

const themeContainer = document.querySelector('.themes-container');

function showNavItems (){
    themesTable.forEach( elem =>
    {
        themeContainer.innerHTML += 
        `   
            <div class="theme-bloc my-1 ">
                <div class='nav-icone'><i class="fas ${elem.icone}"></i></div>
                <div class=' nav-texte '>${elem.name}</div>
            </div>
        `;
    })

    
}
showNavItems()
const nav = document.querySelector('.nav');
const verticalLine = document.querySelector('.vertical-line');
const themeName = document.querySelector('.theme-name');
const colorTable =[];

function handleNavItems(){
    const navThemes= document.querySelectorAll('.theme-bloc');

    for (i=0; i< navThemes.length;i++){
        const properColor = [themesTable[i].lineColor]
        const properShadow = [themesTable[i].boxShad]
        navThemes[i].addEventListener('mouseover',function(){
            let navIcon= this.querySelector('.nav-icone'),
                navText= this.querySelector('.nav-texte')
            navIcon.style.opacity = 0;
            navText.style.opacity = 1;    
            this.style.boxShadow = `1px 1px 4px ${properShadow}`
            nav.style.borderBottom = `1px solid ${properColor}`;
            nav.style.background = properColor;
            verticalLine.style.background = properColor;

            colorTable.push(properColor)
        })

        navThemes[i].addEventListener('mouseout',function(){
            let navIcon= this.querySelector('.nav-icone'),
                 navText= this.querySelector('.nav-texte')
            this.style.boxShadow = null
            navIcon.style.opacity = 1;
            navText.style.opacity = 0;
            nav.style.borderBottom = '1px solid rgba(8, 177, 163, 0.116)';

            if(newsROW.innerHTML===''){
                nav.style.background = 'white';
                verticalLine.style.background = 'rgba(8, 177, 163, 0.216)';

            }
        })

        navThemes[i].addEventListener('click',showNews)
        navThemes[i].addEventListener('click',function(){
            nav.style.background = colorTable;
            verticalLine.style.background = colorTable;
            themeName.innerHTML = this.innerHTML;



        })


    }
}
handleNavItems();

const closeNews = document.querySelector('.close-iframe')
const newsFrame = document.querySelector('.news-frame')
const closeIcon = document.querySelector('.close-icon')
closeNews.addEventListener('click',function(){
    newsFrame.src ='';
    document.querySelector('.iframe-container').classList.toggle('opac');

})

closeNews.addEventListener('mouseover',function(){
closeNews.style.opacity = .8
closeIcon.style.color ="red"
closeIcon.style.transform ="scale(1.2)"

})

closeNews.addEventListener('mouseout',function(){
    closeNews.style.opacity = .2;
    closeIcon.style.color ="white";
    closeIcon.style.transform ="scale(1)"

    })


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

/*

 <div class="overlay">
    <p class="titre text-center px-2">Élection américaine : les recours annoncés par Donald Trump sont du "cinéma", selon le spécialiste des États-Unis Paul Schor</p>
</div>
<p class="date px-2 text-white"> Le 10/8/2020 à 6h30</p>


*/


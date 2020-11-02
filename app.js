 fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) =>{
        let output ='';
     data.forEach(function(test){
          
       output +=
        `
        <div>
            ${test.title}
        </div>
        <div>
            ${test.body}
        </div>
        `

        ap.innerHTML = output
    })
})







 let ap = document.querySelector('#ap');
 let ap2 = document.querySelector('#ap2');

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
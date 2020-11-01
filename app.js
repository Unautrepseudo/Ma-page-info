// let ap = document.querySelector('#ap');
// let nameTable =[];
// let request = new XMLHttpRequest();
// request.onreadystatechange = function (){
//     if(this.readyState === 4 && this.status === 200){
//         let response = JSON.parse(this.responseText);
//         response.forEach( resp => nameTable += [resp.name]);
//         ap.innerHTML = nameTable;

//         }
//         console.log(nameTable)
//     }

// request.open('GET','https://jsonplaceholder.typicode.com/users');
// request.send();



let ap = document.querySelector('#ap');
let search = document.querySelector('#search');
let array =[];
let requestURL = 'https://jsonplaceholder.typicode.com/posts';
let request = new XMLHttpRequest();
let noms =[];

request.open('GET', requestURL);
request.responseType ='json';
request.send();

request.onload = function(){
    let test = request.response;
    names(test);
    
    //console.log(test)
}

function names(jsonObj){
    
    for( i =0; i<jsonObj.length; i++){
       // ap.innerHTML += `<li> ${jsonObj[i].title} </li>`;
        array.push(jsonObj[i].title)
        //noms =jsonObj[i].title;
        
    }
}
console.log(array)

search.addEventListener('input',function(e){

    if(e.target.value){
       noms = array.filter( nom => nom.toLowerCase().startsWith(e.target.value));
       noms = noms.map(nom =>`<li class='test'> ${nom} </li>`)
       ap.innerHTML = noms.join('');
    }else{
        ap.innerHTML = '';

    }
})
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
let nameTable =[];
let requestURL = 'https://jsonplaceholder.typicode.com/users';
let request = new XMLHttpRequest();

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
        ap.innerHTML += `<li> ${jsonObj[i].name} </li>`;
    }
}
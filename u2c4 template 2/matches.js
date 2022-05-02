// write js code here corresponding to matches.html

var playerArr =   JSON.parse(localStorage.getItem("list")) || []

matches = JSON.parse(localStorage.getItem("favourites")) || []
displayData(matches)
 displayData(playerArr)
 

 function displayData(data){
     data.forEach(function(elem){

        var tr = document.createElement("tr")

        var td1=  document.createElement("td")
        td1.innerText = elem.matchNumber ;
        var td2=  document.createElement("td")
        td2.innerText = elem.teamFirst;
        var td3=  document.createElement("td")
        td3.innerText = elem.teamSecond;
        var td4=  document.createElement("td")
        td4.innerText = elem.matchDate ;
        var td5=  document.createElement("td")
        td5.innerText = elem.matchVenue ;
    

        
  
        var td6=  document.createElement("td")
        td6.innerText = "favourite"
        td6.style.color = "green"
        td6.addEventListener("click" , function(){
            addToFav(elem) 
            })

            tr.append(td1, td2, td3, td4, td5, td6);
            document.querySelector("tbody").append(tr)
     })
 }

 function addToFav(elem){
     console.log(elem)
     matches.push(elem)
     localStorage.setItem("favourites" , JSON.stringify(matches))
     
 }

//  var out = document.querySelector("#filterVenue").addEventListener("click" , sortfun);
//  function sortfun(elem){
//     return filter((elem).matchVenue )
//  }
//  matchVenue.push(out)
// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit" , playerData);

var playerArr =   JSON.parse(localStorage.getItem("list")) || []

function playerData(){
    event.preventDefault();

   var matchobj = {
       matchNumber:masaiForm.matchNum.value,
       teamFirst:masaiForm.teamA.value,
       teamSecond:masaiForm.teamB.value,
       matchDate:masaiForm.date.value,
       matchVenue:masaiForm.venue.value,
   } 
   playerArr.push(matchobj)
   console.log(playerArr)
   localStorage.setItem("list", JSON.stringify(playerArr))

//    window.location.href = "matches.html"
  

}
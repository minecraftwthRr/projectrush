var score=0;
function UpdateScore(){

    score=score+1;
    document.getElementById("score").innerHTML = "Score:" + score
}
function SaveScore(){
    localStorage.setItem("score", score);
}
function NextPage(){
window.location = "game_page.html"
}
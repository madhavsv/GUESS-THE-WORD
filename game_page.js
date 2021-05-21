player1=localStorage.getItem("opponent1");
player2=localStorage.getItem("opponent2");

document.getElementById("player1_name").innerHTML=player1 + ":" ;
document.getElementById("player2_name").innerHTML=player2 + ":" ;

player1score=0;
player2score=0;
document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;
document.getElementById("player_question").innerHTML="question turn-" + player1;
document.getElementById("player_answer").innerHTML="answer turn-" + player2;

function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    charAt1=word.charAt(1);
    length_divide_two=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_two);
    length_minus=word.length - 1 ;
    charAt3=word.charAt(length_minus);

    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");

    question_word="<h4 id='word_display'>Q." + remove_charAt3 + "</h4>";
    input_box="<br>Answer:<input id='input_check_box' type='text'>";
    check_button="<br><br><button class='btn btn-primary' onclick='check()'>CHECK</button>";
    row=question_word + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";

    
}
question_turn="player1";
answer_turn="player2";
function check() {
   get_answer=document.getElementById("input_check_box").value;
   small=get_answer.toLowerCase();
   console.log(small);

if (small == word ) {

    if (answer_turn== "player1") {
        palyer1score=player1score + 1;
        document.getElementById("player1_score").innerHTML=player1score;
        
    } else {
        player2score=player2score + 1;
        document.getElementById("player2_score").innerHTML=player2score;
        
    }
   

}

if (question_turn == "player1") {
    question_turn="player2";
    document.getElementById("player_question").innerHTML="Question turn- " + player2;
    
} else {
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question turn-" + player1;
    
}

if (answer_turn =="player1") {
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="Answer turn-" + player2;
    
} else {
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="Answer turn-" + player1;
    
}
document.getElementById("output").innerHTML="";
   
}




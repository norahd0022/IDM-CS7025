let playscore = 0;

function addscore() 

{
    playscore +=10;
}

function showScore()
{
    console.log(playscore);
}

function checkScore()
{
    if(playscore % 2 == 0)
    {
        console.log("Score is even");
    }
    else
    {
        console.log("Score is odd");
    }
}
addscore();
showScore()
checkScore();

addscore();
showScore()
checkScore();
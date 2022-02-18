var display = document.querySelector(".result");
var player =1;
const boardState =[document.querySelectorAll(".cell").length];
boardState.fill(null);
document.querySelector(".Reset").addEventListener("click",btnfunc);

function btnfunc()
{
    player=1;
    boardState.fill(null);
    display.innerHTML="Player 1's Turn";
    for(var i=0;i<document.querySelectorAll(".cell").length;i++)
    {
        
        document.querySelectorAll(".cell")[i].innerHTML="";
    }
}

for(var i=0;i<document.querySelectorAll(".cell").length;i++)
{
    
    document.querySelectorAll(".cell")[i].addEventListener("click", tileClick);
}

function tileClick(event)
{       
        
        const tile= event.target;
        const tileNumber = tile.dataset.index;
        if(!boardState[tileNumber])
        {
            boardState[tileNumber]=player;
            if(player==1)
            this.innerHTML="X";
            else
            this.innerHTML="O";
            if(player==1)
             player=2;
               else
             player=1;

        }
        display.innerHTML= "Player " + player + "'s Turn";
        winner();
        
    
}

function winner()
{
    for(var i =0;i<winningCondition.length;i++)
    {
            if(boardState[winningCondition[i][0]]!=null)
        {
            if(boardState[winningCondition[i][0]] == boardState[winningCondition[i][1]]  && boardState[winningCondition[i][2]]==boardState[winningCondition[i][0]])
            {
                  if(boardState[winningCondition[i][0]]==1)
                 { display.innerHTML = "Player 1 wins!";
                   }
                  else
                  {display.innerHTML = "Player 2 wins!";
                  }
            }
        }
    }
}


const winningCondition =
[
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [0,4,8],
     [2,4,6]
];



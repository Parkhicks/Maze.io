let finish = 0
document.onkeydown = checkKey;

function moveup(x,y,maze)
{
    list = maze[y+1]
    if (list(x-1)="S")
    {
        y=y+1
    }
    else{}
}
function movedown(x,y,maze)
{
    list = maze[y-1]
    if (list(x-1)="S")
    {
        y=y-1
    }
    else{}
}
function moveleft(x,y,maze)
{
    list = maze[y]
    if (list(x-2)="S")
    {
        x=x-1
    }
    else{}
}
function moveright(x,y,maze)
{list = maze[y]
    if (list(x)="S")
    {
        x=x+1
    }
    else{}}

function checkfinish(x,y,ex,ey)
{
    if (x == ex & y==ey)
    {
        finish = 1
        console.log("finish")
    }
}
function maze1()
{
    let row1 = ("w","w","w","w","EXT","w","w","w","w","w","w","w","w","w","w","EXT","w","w","w","w","w","w","w","w","w")
    let row2 = ("w","w","w","w","s","w","w","w","w","w","S","S","S","w","S","S","W","S","S","w","w","w","w","w","w")
    let row3 = ("w","w","w","w","s","w","w","w","w","w","w","w","S","S","S","w","S","S","w","w","w","w","w","w","w")
    let row4 = ("w","w","w","w","s","w","w","w","w","w","w","w","S","w","w","w","S","w","w","w","w","w","w","w","w")
    let row5 = ("w","w","w","w","s","w","w","w","w","w","w","w","S","S","S","S","S","S","S","w","w","w","w","w","w")
    let row6 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row7 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row8 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row9 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row10 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row11 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row12 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row13 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row14 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row15 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row16 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row17 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row18 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row19 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row20 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w")
    let row21 = ("w","w","w","w","s","w","w","w","w","w","w","w","w","w","w","W","w","w","w","w","w","w","w","w","w")
    let row22 = ("w","w","w","w","s","w","w","w","w","w","S","S","S","w","S","S","W","S","S","w","w","w","w","w","w")
    let row23 = ("w","w","w","w","s","w","w","w","w","w","w","w","S","S","S","w","S","S","w","w","w","w","w","w","w")
    let row24 = ("w","w","w","w","s","w","w","w","w","w","w","w","S","w","w","w","S","w","w","w","w","w","w","w","w")
    let row25 = ("w","w","w","w","EN","w","w","w","w","w","w","w","S","S","S","S","S","S","S","w","w","w","w","w","w")

    let maze = [row1,row2,row3,row4,row5,row6,row6,row7,row8,row9,row10,row11,row12,row13,row14,row15,row16,row17,row18,row19,row20,row21,row22,row23,row24,row25]
    let x = 5
    let y = 1
    let end_x = 5
    let end_y = 25
    while (finish = 0)
    {
        function checkKey(e) {

            e = e || window.event;
        
            if (e.keyCode == '38') {
                moveup(x,y,maze)
                console.log("UP")
            }
            else if (e.keyCode == '40') {
                movedown(x,y,maze)
                console.log("Down")
            }
            else if (e.keyCode == '37') {
               moveleft(x,y,maze)
               console.log("Left")
            }
            else if (e.keyCode == '39') {
               moveright(x,y,maze)
               console.log("Right")
            }
        
        } 
        document.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowLeft') {
                moveleft(x,y,maze);
            }
        });
    }
}
maze1();
let row1 =["0","0","1","1"]
let row2 =["0","1","1","0"]
let row3 =["1","1","0","0"]
let row4 =["1","0","0","0"]
let maze1 = [row4,row3,row2,row1]
console.log(maze1[0][0])

let x = 0
let y = 0

document.addEventListener("DOMContentLoaded", function () {
    const player = document.getElementById("player");
    const mapContainer = document.getElementById("map-container");

    let playerX = 200; // Initial X position
    let playerY = 150; // Initial Y position

    function updatePlayerPosition() {
        player.style.left = playerX + "px";
        player.style.top = playerY + "px";
    }

    function handleKeyPress(event) {
        const speed = 10; // Adjust the speed as needed
        let nextlist 
        switch (event.key) {
            case "ArrowUp":
                playerY -= speed;
                console.log(maze1[x+1][y])
                if(maze1[x+1][y]=="1")
                    {console.log("up")
                    x = x+1}
                else
                    {console.log("wall")}
                break;
            case "ArrowDown":
                playerY += speed;
                console.log("down")
                break;
            case "ArrowLeft":
                playerX -= speed;
                console.log("left")
                break;
            case "ArrowRight":
                playerX += speed;
                console.log(maze1[x][y+1])
                if(maze1[x][y+1]=="1")
                    {console.log("right")
                    y = y+1}
                else
                    {console.log("wall")}
                break;
                
                break;
        }

        updatePlayerPosition();
    }

    document.addEventListener("keydown", handleKeyPress);

    // Initial player position
    updatePlayerPosition();
});

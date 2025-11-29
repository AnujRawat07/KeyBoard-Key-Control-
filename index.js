const box1 = document.querySelector("#box1");

let x = 0;  
let y = 0;  

addEventListener("keydown", (event) => {

    // WASD
    if(event.key == 'a' || event.key == "ArrowLeft"){     
        x -= 10;
    }
    if(event.key == 'd'||event.key == "ArrowRight"){     
        x += 10;
    }
    if(event.key == 'w'||event.key == "ArrowUp"){     
        y -= 10;
    }
    if(event.key == 's'||event.key == "ArrowDown"){     
        y += 10;
    }

  

    box1.style.marginLeft = x + "px";
    box1.style.marginTop = y + "px";
});

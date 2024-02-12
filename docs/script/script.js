var textBubbleValue = document.querySelector('main section:nth-of-type(1) ul li:nth-of-type(1) p');
// var textBubbleValue = document.querySelector('main section:nth-of-type(1) ul:nth-of-type(1) li span');

var currentTextBubbleNumber = 0;

var textBubbleLine1 = document.querySelector('main section:nth-of-type(1) ul li:nth-of-type(1) div p:nth-of-type(1)');
var textBubbleLine2 = document.querySelector('main section:nth-of-type(1) ul li:nth-of-type(1) div p:nth-of-type(2)');
var textBubbleLine3 = document.querySelector('main section:nth-of-type(1) ul li:nth-of-type(1) div p:nth-of-type(3)');
var textBubbleLine4 = document.querySelector('main section:nth-of-type(1) ul li:nth-of-type(1) div p:nth-of-type(4)');

// var textBubbleLines = document.querySelector('.hiders p');



function textBubbleContent() {
    var textBubbleArray = ["Hoi ik en Ruud en dit is mijn persoonlijke pagina voor de Web App From Scratch opdracht", "Mijn favoriete soort games zijn 2D pixel platform games zoals: Terraria, Mario en Super meat boy", "Dit is bericht 3 Dit is bericht 3 Dit is bericht 3 Dit is bericht 3", "Dit is bericht 4 Dit is bericht 4 Dit is bericht 4 Dit is bericht 4"];

    if (currentTextBubbleNumber > textBubbleArray.length -1) {
        currentTextBubbleNumber = 0;
    }

    textBubbleValue.innerText = textBubbleArray[currentTextBubbleNumber];
    console.log(currentTextBubbleNumber);

    textBubbleLine1.style.animation = "typing 1s steps(30, start) 0s forwards";
    textBubbleLine2.style.animation = "typing 1s steps(30, start) 1s forwards";
    textBubbleLine3.style.animation = "typing 1s steps(30, start) 2s forwards";
    textBubbleLine4.style.animation = "typing 1s steps(30, start) 3s forwards";
    
    // textBubbleLines.style.animation = "typing 2s steps(30, end)";
    // textBubbleLines.style.background = "pink";

    
    // var waittime = textBubbleArray[currentTextBubbleNumber].length * 1000;
    // if (waittime > 3000) {
    //     waittime = 3000;
    // }

    var waittime = 5000;
    setTimeout(function() {
        

        textBubbleLine1.style.animation = "none";
        textBubbleLine2.style.animation = "none";
        textBubbleLine3.style.animation = "none";
        textBubbleLine4.style.animation = "none";

        console.log("klaar met " + waittime / 1000 + " seconden wachen");
        // console.log(currentTextBubbleNumber);

        currentTextBubbleNumber++;
        console.log(currentTextBubbleNumber); 
        
        setTimeout(function() {
            textBubbleContent();
        }, 1000);
        

    }, waittime);

    // textBubbleContent();


    
}

textBubbleContent();

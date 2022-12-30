var card1 = "";
var card2 = "";
var card3 = "";
var pickCounter = 0;

var xmlhttp = new XMLHttpRequest();
var url = "cards.json";

xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        parsedInfo = JSON.parse(xmlhttp.responseText);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function scroll(){
    document.getElementById('scrollPoint').scrollIntoView({behavior:"smooth"});
};

function makeCardDesc(obj, card){

    var cardObjects = obj.cards;

    for(i=0;i<cardObjects.length;i++){
        if(cardObjects[i].number == card){
            var cardHeading = "<h3>" + cardObjects[i].title + "</h3>";
            var cardDesc = "<p>" + cardObjects[i].desc + "</p>";
        }
    }

    document.getElementById('card-description').innerHTML = cardHeading + cardDesc;
}

function showDesc(clickedId){

    document.getElementById('cardInfo').style.display = "block";

    scroll();

    if(clickedId == 'card1'){
        document.getElementById('card-graphic').style.animation = "fadeIn 3s";
        document.getElementById('card-graphic').style.backgroundImage = "url(style/cards/" + card1 + ".png)";
        makeCardDesc(parsedInfo, card1);
    }else if(clickedId == 'card2'){
        document.getElementById('card-graphic').style.animation = "fadeIn 3s";
        document.getElementById('card-graphic').style.backgroundImage = "url(style/cards/" + card2 + ".png)";
        makeCardDesc(parsedInfo, card2);
    }else{
        document.getElementById('card-graphic').style.animation = "fadeIn 3s";
        document.getElementById('card-graphic').style.backgroundImage = "url(style/cards/" + card3 + ".png)";
        makeCardDesc(parsedInfo, card3);
    }

    document.getElementById('card-description').style.animation = "fadeIn 3s";
    document.getElementById('emailReading').style.display = "flex";
    document.getElementById('resetContainer').style.display = "block";

}

function pickCards(){
    document.getElementById('deck').style.display = "none";
    document.getElementById('load').style.display = "block";
    var loadText = document.getElementById('load-text');

    setTimeout(function(){
        loadText.innerHTML = "Shuffling the cards..."
    }, 10);

    setTimeout(function(){
        loadText.innerHTML = "Keep your intention in mind"
    }, 2000);

    setTimeout(function(){
        loadText.innerHTML = "Almost there..."
    }, 5000);

    setTimeout(function(){
        displayCards()
    }, 8000);

}

function displayCards(){
    var cards = [];
    for(var number=0;number<=47;number++){
        cards.push(number);
    }
    
    var card1Index = Math.floor(Math.random()*cards.length);
    card1 = cards[card1Index];
    cards.splice(card1Index, 1);

    var card2Index = Math.floor(Math.random()*cards.length);
    card2 = cards[card2Index];
    cards.splice(card2Index, 1);

    var card3Index = Math.floor(Math.random()*cards.length);
    card3 = cards[card3Index];
    cards.splice(card3Index, 1);

    document.getElementById('wrapper').style.display = "none";
    document.getElementById('displayCards').style.display = "block";
    document.getElementById('card1').style.backgroundImage = "url(style/cards/" + card1 + ".png)";
    document.getElementById('card2').style.backgroundImage = "url(style/cards/" + card2 + ".png)";
    document.getElementById('card3').style.backgroundImage = "url(style/cards/" + card3 + ".png)";
    
    var overlay = document.getElementsByClassName("overlay");
    var overlayText = document.getElementsByClassName("overlayText");
    
    if(pickCounter==0){
        setTimeout(function(){
            for(var i=0;i<overlay.length;i++){
                overlay[i].style.animation = "fadeIn 3s";
                overlay[i].style.display = "flex";
                overlayText[i].style.display = "block";
            }
        }, 500);
    
        setTimeout(function(){
            for(i=0;i<overlay.length;i++){
                overlay[i].style.animation = "fadeOut 3s";
            }
        }, 3500);
        
        setTimeout(function(){
            for(i=0;i<overlay.length;i++){
                overlay[i].style.display = "none";
                overlayText[i].style.display = "none";
            }
        }, 6000);
    }
    
}

function reset(){
    document.getElementById('load').style.display = "none";
    document.getElementById('deck').style.display = "block";
    document.getElementById('wrapper').style.display = "block";
    document.getElementById('displayCards').style.display = "none";
    document.getElementById('cardInfo').style.display = "none";
    document.getElementById('emailReading').style.display = "none";
    document.getElementById('emailResult').style.display = "none";
    document.getElementById('resetContainer').style.display = "none";

    pickCounter += 1;
}
var card1 = "";
var card2 = "";
var card3 = "";
var card1Reading = "";
var card2Reading = "";
var card3Reading = "";
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

function emailResult(){
    document.getElementById('emailResult').style.display = "flex";
}

function loadCardsEmail(){
    document.getElementById('reading1Graphic').setAttribute('value', 'https://oraclecards.000webhostapp.com/style/cards/' + card1 +'.png');
    document.getElementById('reading2Graphic').setAttribute('value', 'https://oraclecards.000webhostapp.com/style/cards/' + card2 +'.png');
    document.getElementById('reading3Graphic').setAttribute('value', 'https://oraclecards.000webhostapp.com/style/cards/' + card3 +'.png');
    document.getElementById('reading1Text').setAttribute('value', card1Reading);
    document.getElementById('reading2Text').setAttribute('value', card2Reading);
    document.getElementById('reading3Text').setAttribute('value', card3Reading);
}

function loadCardsDesc(obj){

    var cardObjects = obj.cards;

    for(i=0;i<cardObjects.length;i++){
        if(cardObjects[i].number == card1){
            var card1Heading = "<h3>" + cardObjects[i].title + "</h3>";
            var card1Desc = "<p>" + cardObjects[i].desc + "</p>";
            card1Reading = card1Heading + card1Desc;
        }
        if(cardObjects[i].number == card2){
            var card2Heading = "<h3>" + cardObjects[i].title + "</h3>";
            var card2Desc = "<p>" + cardObjects[i].desc + "</p>";
            card2Reading = card2Heading + card2Desc;
        }
        if(cardObjects[i].number == card3){
            var card3Heading = "<h3>" + cardObjects[i].title + "</h3>";
            var card3Desc = "<p>" + cardObjects[i].desc + "</p>";
            card3Reading = card3Heading + card3Desc;
        }
    }
}

function showDesc(clickedId){

    document.getElementById('cardInfo').style.display = "block";

    scroll();

    if(clickedId == 'card1'){
        document.getElementById('card-graphic').style.animation = "fadeIn 3s";
        document.getElementById('card-graphic').style.backgroundImage = "url(style/cards/" + card1 + ".png)";
        document.getElementById('card-description').innerHTML = card1Reading;
    }else if(clickedId == 'card2'){
        document.getElementById('card-graphic').style.animation = "fadeIn 3s";
        document.getElementById('card-graphic').style.backgroundImage = "url(style/cards/" + card2 + ".png)";
        document.getElementById('card-description').innerHTML = card2Reading;
    }else{
        document.getElementById('card-graphic').style.animation = "fadeIn 3s";
        document.getElementById('card-graphic').style.backgroundImage = "url(style/cards/" + card3 + ".png)";
        document.getElementById('card-description').innerHTML = card3Reading;
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
        loadCardsDesc(parsedInfo)
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
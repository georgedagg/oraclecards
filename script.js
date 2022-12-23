var card1 = "";
var card2 = "";
var card3 = "";
var pickCounter = 0;

function emailResult(){
    document.getElementById('emailResult').style.display = "flex";
}

function showDesc(clickedId){

    document.getElementById('cardInfo').style.display = "block";

    if(clickedId == 'card1'){
        document.getElementById('card-graphic').style.animation = "fadeIn 3s";
        document.getElementById('card-graphic').style.backgroundImage = "url(" + card1 + ")";
    }else if(clickedId == 'card2'){
        document.getElementById('card-graphic').style.animation = "fadeIn 3s";
        document.getElementById('card-graphic').style.backgroundImage = "url(" + card2 + ")";
    }else{
        document.getElementById('card-graphic').style.animation = "fadeIn 3s";
        document.getElementById('card-graphic').style.backgroundImage = "url(" + card3 + ")";
    }

    var cardHeading = "<h3>Sample Card Heading</h3>";
    var cardDesc = "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque recusandae porro quis animi quos non aspernatur, neque voluptas fuga reprehenderit sequi harum dignissimos quia sapiente tempora similique commodi qui quasi.</p>";

    document.getElementById('card-description').style.animation = "fadeIn 3s";
    document.getElementById('card-description').innerHTML = cardHeading + cardDesc;
    document.getElementById('emailReading').style.display = "flex";
    document.getElementById('reset').style.display = "block"

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
    }, 1000);

}

function displayCards(){
    var cards = [];
    for(var number=0;number<11;number++){
        cards.push(number);
    }
    
    var card1Index = Math.floor(Math.random()*cards.length);
    card1 = "style/cards/"+ cards[card1Index] +".jpg";
    cards.splice(card1Index, 1);

    var card2Index = Math.floor(Math.random()*cards.length);
    card2 = "style/cards/"+ cards[card2Index] +".jpg";
    cards.splice(card2Index, 1);

    var card3Index = Math.floor(Math.random()*cards.length);
    card3 = "style/cards/"+ cards[card3Index] +".jpg";
    cards.splice(card3Index, 1);

    document.getElementById('wrapper').style.display = "none";
    document.getElementById('displayCards').style.display = "block";
    document.getElementById('card1').style.backgroundImage = "url(" + card1 + ")";
    document.getElementById('card2').style.backgroundImage = "url(" + card2 + ")";
    document.getElementById('card3').style.backgroundImage = "url(" + card3 + ")";

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
    document.getElementById('reset').style.display = "none";
    document.getElementById('emailResult').style.display = "none";

    pickCounter += 1;
}
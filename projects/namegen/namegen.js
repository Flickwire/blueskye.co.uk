window.letterNo = 0;
window.letters = [];
window.jumbles = [];

function generateLetter() {
    var letterNo = window.letterNo;
    window.letterNo += 1;
    window.letters[letterNo] = document.createElement('div');
    window.letters[letterNo].setAttribute('class','letter');
    window.jumbles[letterNo] = setInterval(function(){
        window.letters[letterNo].innerHTML = Math.ceil(Math.random() * 26);
    },70);
    setTimeout(function(){
        clearInterval(window.jumbles[letterNo]);
        var num = window.letters[letterNo].innerHTML;
        console.log(num);
        var letter = String.fromCharCode(96 + parseInt(num));
        window.letters[letterNo].innerHTML = num + "<br />" + letter;
    },800);
    $('#namefield').append(window.letters[letterNo]);
    $(window.letters[letterNo]).fadeIn(500).css('display','inline-block');
}

window.onload = function() {
    $("a").on('click',function(){
        generateLetter();
    });
}
function generateLetter() {
    var newLetter = document.createElement('div');
    newLetter.setAttribute('class','letter');
    jumble = setInterval(function(){
        newLetter.innerHTML = Math.ceil(Math.random() * 26);
    },70);
    setTimeout(function(){
        clearInterval(jumble);
        var num = newLetter.innerHTML;
        console.log(num);
        var letter = String.fromCharCode(96 + parseInt(num));
        newLetter.innerHTML = num + "<br />" + letter;
    },800);
    $('#namefield').append(newLetter);
    $(newLetter).fadeIn(500).css('display','inline-block');
}

window.onload = function() {
    $("a").on('click',function(){
        generateLetter();
    });
}
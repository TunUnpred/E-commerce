let deleteButton = true;
$('.menu-icon').click(function()  {
    $('nav').addClass('menu-pressed');
})
$('.menu-close').click(function()  {
    $('nav').removeClass('menu-pressed');
})
$('.plus').click(function (){
    var number = $('.article-number').text();
    number ++;
    $('.article-number').text(number);   
    })
$('.minus').click(function(){
    var number = $('.article-number').text();
    if (number < 1 ) return;
    else {
        number --;
        $('.article-number').text(number);
    }
})    
$('.icon-cart').click(function(){
    if (deleteButton) {
     $('.cart-container').toggleClass('cart-container-unset'); 
     $('.cart-container-buy').removeClass('cart-container-buy-unset');
    }else if (!deleteButton){
        $('.cart-container').removeClass('cart-container-unset'); 
        $('.cart-container-buy').toggleClass('cart-container-buy-unset');

    }})

$('.cart-add').click(function(){
    let number = $('.article-number').text();
    if (number === 0)return;
    else if (number > 0){
        const fid = $('.number').text();
        const newFid =substrict(fid); 
        const result = number * newFid ;
        const textDisplay = '$' + newFid + ' x ' + number ;
        const textDisplay2 = '   $' + result + '.00';
        $('.result').text(textDisplay); 
        $('.result-plus').text(textDisplay2);
        deleteButton = false;
        $('.number-cart').css('display','unset');
        $('.number-cart').text(number);
        $('.cart-container').removeClass('cart-container-unset');
    }
    $('.article-number').text('0');
})
$('.delete').click(function(){
         deleteButton = true;
        $('.cart-container-buy').removeClass('cart-container-buy-unset');  
        $('.cart-container').addClass('cart-container-unset');
        $('.number-cart').css('display','none');

})
$('.next-icon').click(function(){
        let text = $('.main-img').attr('src');
        let  number = parseFloat(substrictImg(text));
        if (number === 4 ){
            text = text.replace(number, '1' );
            console.log(text);
            $('.main-img').attr('src', text);
        }else if (number > 0 && number < 4 ){
           text = text.replace(number, number + 1 );
           console.log(text);
           $('.main-img').attr('src', text);
            
        }

})
$('.previous-icon').click(function(){
    let text = $('.main-img').attr('src');
    let  number = parseFloat(substrictImg(text));
    if (number === 1 ){
        text = text.replace(number, '4' );
        console.log(text);
        $('.main-img').attr('src', text);
    }else if (number > 1 && number < 5 ){
       text = text.replace(number, number - 1 );
       console.log(text);
       $('.main-img').attr('src', text);
        
    }

})

// function section
function substrictImg (text){
    var fid = '';
    fid = text[21];
    console.log(fid);
    return fid;
}
function substrict(word){
    var fid = '';
    for (var i = 1; i < word.length-3; i++ ){
        fid += $('.number').text()[i];
        

    }return fid;
}
function substrictPercentage(word){
    var fid = '';
    for (var i = 0; i < word.length-1; i++ ){
        fid += $('span').text()[i];
        

    }return fid;
}







$('#btn').click(function(){
    let slideBarWidth=$('.slidebar').outerWidth();
    
    
   if($('.slidebar').css('left')=='0px'  ){
    $('.slidebar').animate({left:`-${slideBarWidth}`},500)
   }
   else{
    $('.slidebar').animate({left:'0'},500)
   }

   })
   

   $('#btn').click(function(){

     let slideBarWidth=$('.slidebar').outerWidth();

    
   if($('.slidebar-btn').css('left')=='250px'  ){
    
     $('.slidebar-btn').animate({left:'0'},500)
   }

   else {
    $('.slidebar-btn').animate({left:'250px'},500);
   
}
    
   
   })
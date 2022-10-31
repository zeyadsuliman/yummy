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

   
   
async function getCat(){
    apiResponse = await fetch (`https://www.themealdb.com/api/json/v1/1/categories.php`)
    
   
    
    responseData  = await apiResponse.json();
    disPlayCategory()  
    console.log(responseData)
}






    getCat()
    
    function disPlayCategory(){
    
      var cartoona=''
      for(var i=0;i<responseData.categories.length;i++){
        cartoona +=`
        <div class="col-md-3">
        <div class="" id='item'>
        <img src="${responseData.categories[i].strCategoryThumb}" class="hover" />
        <div class="item-describtion">
        
            <h2>${responseData.categories[i].strCategory}</h2>
            <p>${responseData.categories[i].strCategoryDescription.split(' ').splice(0,20).join(' ')}</p>
        </div>
        </div>
    </div>`
       
        
    } 
        
    document.getElementById('data').innerHTML=cartoona

        

  
    }


    $('.row').hover(function(e){
        console.log("thstr")
        
       
        $('.item-describtion').animate({opacity:'0.7'},1000)
       
    })
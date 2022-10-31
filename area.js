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











async function getAreaData () {
    apiResponse = await fetch (`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    
   
    
    responseData  = await apiResponse.json();
    
    console.log(responseData)
    displayAreaData()

}

getAreaData()





function displayAreaData(){
   let cartoona=''
      for(let i=0;i<responseData.meals.length;i++){
        cartoona +=`<div class="col-md-3 text-center bg-">
                           <i class="fa-solid fa-city fa-3x icons"></i>
      
                         <h2 id="">${responseData.meals[i].strArea}</h2>
       

                    </div>`
    


}

    document.getElementById('area').innerHTML=cartoona
 }
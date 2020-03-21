$(document).ready(function() {

   var health;
   var mainIngred;
   var myli;
   var count = 0;
   var all;
   var globalResponse;
   var eQueryURL = "https://api.edamam.com/search?app_id=fd3c9f61&app_key=a9692cfbd33278c8428f017749dff618"
 
   function reRender() {
     $('#myul').empty();
     all = globalResponse.hits[++count];
     var recipeName = all.recipe.label;
     var ingreds = all.recipe.ingredientLines;
     var photo = all.recipe.image;
     var recLink = all.recipe.shareAs;
     console.log(ingreds)
     $('#recipeName').text(recipeName);
     $('#recLink').text("Find the full recipe here")
     $('#recLink').attr("href", recLink);
     $('.main-img').attr('src', photo);
     $('#next').removeClass('hide')
 
     for (var i = 0; i < ingreds.length; i++) {
       myli = $('<li>').text(ingreds[i]);
       $('#myul').append(myli);
     }
   }
 
   $('#clear').on('click', function () {
     event.preventDefault();
 
     eQueryURL = "https://api.edamam.com/search?app_id=fd3c9f61&app_key=a9692cfbd33278c8428f017749dff618"
     $('#recipeName').text('');
     $('#recLink').text("");
     $('#recLink').attr("href", '');
     $('.main-img').attr('src', '');
     $('#next').addClass('hide');
     $('#myul').empty();
     $('button').removeClass('red');
     $('.diet').addClass('secondary');
     $('.health').addClass('secondary');
   });
 
   $('.ingred').click(function(event) {
     event.preventDefault();
     $(this).addClass('red');
     mainIngred = this.id;         
     eQueryURL += `&q=${mainIngred}`
 

   });
 
   $('.health').click(function(event) {
     event.preventDefault();
     $(this).removeClass('secondary');
     $(this).addClass('red');
     health = this.id;
     eQueryURL += `&health=${health}`
     $(this).addClass('red');
   });
 
   $('.diet').click(function(event) {
     event.preventDefault();
     $(this).removeClass('secondary');
     $(this).addClass('red');
     diet = this.id;
     eQueryURL += `&diet=${diet}`
     
   });
 
   $('#done').click(function(event) {
     event.preventDefault();
 
     $.ajax({
       url: eQueryURL,
       method: "GET"
      
     }).then(function (response) {
       globalResponse = response;
       console.log(response);
       console.log(eQueryURL)
       reRender();
 
     });
 
   });
 
 
   $('#next').on('click', function () {
     event.preventDefault();
     reRender();
 
   });
   

    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
 
    $.ajax({
        url: queryURL,
        method: "GET"
       }).then(function(response) {
        console.log(response);
        var imgURL = response.meals[0].strMealThumb;
        var imgForImg = $("<img class = 'size'>").attr("src",imgURL);
        $(".card-one").prepend(imgForImg);
        var mealName = response.meals[0].strMeal;
        var pForName = $("<h5>").text(mealName);
        $(".card-section-one").append(pForName);
        var instruction = $("<h5>").text("Insturction");
        $(".card-section-one").append(instruction);
        var mealInst = response.meals[0].strInstructions;
        var pForInst =  $("<p>").text(mealInst);
        $(".card-section-one").append(pForInst);
       });
      
      $.ajax({
           url: queryURL,
           method: "GET"
          }).then(function(response) {
           console.log(response);
           var imgURL = response.meals[0].strMealThumb;
           var imgForImg = $("<img class = 'size'>").attr("src",imgURL);
           $(".card-two").prepend(imgForImg);
           var mealName = response.meals[0].strMeal;
           var pForName = $("<h5>").text(mealName);
           $(".card-section-two").append(pForName);
           var instruction = $("<h5>").text("Insturction");
           $(".card-section-two").append(instruction);
           var mealInst = response.meals[0].strInstructions;
           var pForInst =  $("<p>").text(mealInst);
           $(".card-section-two").append(pForInst);
          });
         
             $.ajax({
              url: queryURL,
              method: "GET"
             }).then(function(response) {
              console.log(response);
              var imgURL = response.meals[0].strMealThumb;
              var imgForImg = $("<img class = 'size'>").attr("src",imgURL);
              $(".card-three").prepend(imgForImg);
              var mealName = response.meals[0].strMeal;
              var pForName = $("<h5>").text(mealName);
              $(".card-section-three").append(pForName);
              var instruction = $("<h5>").text("Insturction");
              $(".card-section-three").append(instruction);
              var mealInst = response.meals[0].strInstructions;
              var pForInst =  $("<p>").text(mealInst);
              $(".card-section-three").append(pForInst);
             });

    
     $( ".refresh-btn").on("click", function(){
        location.reload(true);

     })
    
});

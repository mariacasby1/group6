$(document).ready(function() {
// Here we set our variables
   var health;
   var mainIngred;
   var myli;
   var count = 0;
   var all;
   var globalResponse;
   var eQueryURL = "https://api.edamam.com/search?app_id=fd3c9f61&app_key=a9692cfbd33278c8428f017749dff618"

// Append the results to HTML file
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

//Here we set a list of meal reciepe
     for (var i = 0; i < ingreds.length; i++) {
       myli = $('<li>').text(ingreds[i]);
       $('#myul').append(myli);
     }
   }
//Here we set our clear seach button
   $('#clear').on('click', function () {
     event.preventDefault();
 
     eQueryURL = "https://api.edamam.com/search?app_id=fd3c9f61&app_key=a9692cfbd33278c8428f017749dff618"
     $('#recipeName').text('');
     $('#recLink').text("");
     $('#recLink').attr("href", '');
     $('.main-img').attr('src', '');
     $('#next').addClass('hide');
     $('#myul').empty();
   });

//This set all user's ingerdiants choose button function
   $('.ingred').click(function(event) {
     event.preventDefault();
     mainIngred = this.id;           
     eQueryURL += `&q=${mainIngred}`

   });
 
   $('.Health').click(function(event) {
     event.preventDefault();
     health = this.id;
     eQueryURL += `&health=${health}`
   });
 
   $('.Diet').click(function(event) {
     event.preventDefault();
     diet = this.id;
     eQueryURL += `&diet=${diet}`
   });
 
   $('#done').click(function(event) {
     event.preventDefault();
//Setting ajax call 
     $.ajax({
       url: eQueryURL,
       method: "GET"
     }).then(function (response) {
       globalResponse = response;
       console.log(response);
 
       reRender();
 
     });
 
   });
 
 
   $('#next').on('click', function () {
     event.preventDefault();
     reRender();
 
   });
   
//This will set a Random api call for random meal
    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
 
    $.ajax({
        url: queryURL,
        method: "GET"
       }).then(function(response) {
        console.log(response);    
        var imgForImg = $("<img class = 'size'>").attr("src",response.meals[0].strMealThumb);
        $(".card-one").prepend(imgForImg);
        var pForName = $("<a target = '-blank'>").attr("href", response.meals[0].strYoutube).text(response.meals[0].strMeal);
        $(".card-section-one").append(pForName);
        var instruction = $("<h5>").text("Instruction");
        $(".card-section-one").append(instruction);
        ;
        var pForInst =  $("<p>").text(response.meals[0].strInstructions);
        $(".card-section-one").append(pForInst);
       });
      
      $.ajax({
           url: queryURL,
           method: "GET"
          }).then(function(response) {
           console.log(response);
           var imgForImg = $("<img class = 'size'>").attr("src", response.meals[0].strMealThumb);
           $(".card-two").prepend(imgForImg);   
           var pForName = $("<a target = '-blank'>").attr("href", response.meals[0].strYoutube).text(response.meals[0].strMeal);
           $(".card-section-two").append(pForName);
           var instruction = $("<h5>").text("Instruction");
           $(".card-section-two").append(instruction);       
           var pForInst =  $("<p>").text(response.meals[0].strInstructions);
           $(".card-section-two").append(pForInst);
          });
         
             $.ajax({
              url: queryURL,
              method: "GET"
             }).then(function(response) {
              console.log(response);             
              var imgForImg = $("<img class = 'size'>").attr("src",response.meals[0].strMealThumb);
              $(".card-three").prepend(imgForImg); 
              var pForName = $("<a target = '-blank'>").attr("href", response.meals[0].strYoutube).text( response.meals[0].strMeal);
              $(".card-section-three").append(pForName);
              var instruction = $("<h5>").text("Instruction");
              $(".card-section-three").append(instruction);
              var pForInst =  $("<p>").text(response.meals[0].strInstructions);
              $(".card-section-three").append(pForInst);
             });

//This reload the magic meal button    
     $( ".refresh-btn").on("click", function(){
        location.reload(true);

     })
    
});

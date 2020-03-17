$(document).ready(function() {

  var queryURL1 = "https://www.themealdb.com/api/json/v1/1/random.php";
  var queryURL2 = "https://www.themealdb.com/api/json/v1/1/random.php";
  var queryURL3 = "https://www.themealdb.com/api/json/v1/1/random.php";
function randomMeal() {
  $.ajax({
      url: queryURL1,
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
         url: queryURL2,
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
            url: queryURL3,
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

   };
  //  function renderButtons(){
  //      $(".grid-container").empty();
  //      randomMeal();

  //  }

   
   $(document).on("click", ".refresh-btn", randomMeal);
  //  renderButtons();
  
  
});
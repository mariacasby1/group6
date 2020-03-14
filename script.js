$(document).ready(function() {

    var queryURL1 = "https://www.themealdb.com/api/json/v1/1/random.php";
    $.ajax({
        url: queryURL1,
        method: "GET"
       }).then(function(response) {
        console.log(response);
        var imgURL = response.meals[0].strMealThumb;
        var imgForImg = $("<img class = 'size'>").attr("src",imgURL);
        $(".card-one").append(imgForImg);
        var mealName = response.meals[0].strMeal;
        var pForName = $("<h5>").text("Meal: "+ mealName);
        $(".card-section-one").append(pForName);
 
        var mealInst = response.meals[0].strInstructions;
        var pForInst =  $("<p>").text(mealInst);
        $(".card-section-one").append(pForInst);
       });
       var queryURL2 = "https://www.themealdb.com/api/json/v1/1/random.php";
       $.ajax({
           url: queryURL2,
           method: "GET"
          }).then(function(response) {
           console.log(response);
           var imgURL = response.meals[0].strMealThumb;
           var imgForImg = $("<img class = 'size'>").attr("src",imgURL);
           $(".card-two").append(imgForImg);
           var mealName = response.meals[0].strMeal;
           var pForName = $("<h5>").text("Meal: "+ mealName);
           $(".card-section-two").append(pForName);
    
           var mealInst = response.meals[0].strInstructions;
           var pForInst =  $("<p>").text(mealInst);
           $(".card-section-two").append(pForInst);
          });
          var queryURL3 = "https://www.themealdb.com/api/json/v1/1/random.php";
          $.ajax({
              url: queryURL3,
              method: "GET"
             }).then(function(response) {
              console.log(response);
              var imgURL = response.meals[0].strMealThumb;
              var imgForImg = $("<img class = 'size'>").attr("src",imgURL);
              $(".card-three").append(imgForImg);
              var mealName = response.meals[0].strMeal;
              var pForName = $("<h5>").text("Meal: "+ mealName);
              $(".card-section-three").append(pForName);
       
              var mealInst = response.meals[0].strInstructions;
              var pForInst =  $("<p>").text(mealInst);
              $(".card-section-three").append(pForInst);
             });

});

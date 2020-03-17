$(document).ready(function () {
  var health;
  var mainIngred;
  var myli;
  var count = 0;
  var all;
  var globalResponse;
  var queryURL = "https://api.edamam.com/search?app_id=fd3c9f61&app_key=a9692cfbd33278c8428f017749dff618"

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
    $('img').attr('src', photo);
    $('#next').removeClass('hide')

    for (var i = 0; i < ingreds.length; i++) {
      myli = $('<li>').text(ingreds[i]);
      $('#myul').append(myli);
    }
  }

  $('#clear').on('click', function () {
    event.preventDefault();

    queryURL = "https://api.edamam.com/search?app_id=fd3c9f61&app_key=a9692cfbd33278c8428f017749dff618"
    $('#recipeName').text('');
    $('#recLink').text("");
    $('#recLink').attr("href", '');
    $('img').attr('src', '');
    $('#next').addClass('hide');
    $('#myul').empty();
  });

  $('.ingred').click(function(event) {
    event.preventDefault();
    mainIngred = this.id;           //mainIngred = $(this).attr("id");
    queryURL += `&q=${mainIngred}`
//    queryURL += "&q=" + mainIngred;
  });

  $('.Health').click(function(event) {
    event.preventDefault();
    health = this.id;
    queryURL += `&health=${health}`
  });

  $('.Diet').click(function(event) {
    event.preventDefault();
    diet = this.id;
    queryURL += `&diet=${diet}`
  });

  $('#done').click(function(event) {
    event.preventDefault();

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      globalResponse = response;
      console.log(response);

/*      all = response.hits[count];
      var recipeName = all.recipe.label;
      var ingreds = all.recipe.ingredientLines;
      var photo = all.recipe.image;
      var recLink = all.recipe.shareAs;
      console.log(ingreds)
      $('#recipeName').text(recipeName);
      $('#recLink').text("Find the full recipe here")
      $('#recLink').attr("href", recLink);
      $('img').attr('src', photo);
      $('#next').removeClass('hide')*/

      reRender();

/*      for (var i = 0; i < ingreds.length; i++) {
        myli = $('<li>').text(ingreds[i]);
        $('#myul').append(myli);
      }*/
    });
  });


/*  $('button').on('click', function () {
    event.preventDefault();
    myid = this.id;
    if (myid === "beef" || myid === "pork" || myid === "fish" || myid === "lamb" || myid === "chicken" || myid === "vegetarian") {
      mainIngred = this.id;
      queryURL += `&q=${mainIngred}`
      return queryURL;
    }
    if (myid === "peanut-free" || myid === "vegan") {
      health = this.id;
      queryURL += `&health=${health}`
      return queryURL;
    }
    if (myid === "low-fat" || myid === "low-carb") {
      diet = this.id;
      queryURL += `&diet=${diet}`
      return queryURL;
    }

    if (myid === "done") {
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        globalResponse = response;
        console.log(response);

        all = response.hits[count];
        var recipeName = all.recipe.label;
        var ingreds = all.recipe.ingredientLines;
        var photo = all.recipe.image;
        var recLink = all.recipe.shareAs;
        console.log(ingreds)
        $('#recipeName').text(recipeName);
        $('#recLink').text("Find the full recipe here")
        $('#recLink').attr("href", recLink);
        $('img').attr('src', photo);
        $('#next').removeClass('hide')

        for (var i = 0; i < ingreds.length; i++) {
          myli = $('<li>').text(ingreds[i]);
          $('#myul').append(myli);
        }
      });
    }
  });*/

  $('#next').on('click', function () {
    event.preventDefault();
/*    $('#recipeName').text('');
    $('#recLink').text("");
    $('#recLink').attr("href", '');
    $('img').attr('src', '');
//    $('#next').addClass('hide');*/
/*    $('#myul').empty();
    all = globalResponse.hits[++count];
    var recipeName = all.recipe.label;
    var ingreds = all.recipe.ingredientLines;
    var photo = all.recipe.image;
    var recLink = all.recipe.shareAs;
    console.log(ingreds)
    $('#recipeName').text(recipeName);
    $('#recLink').text("Find the full recipe here")
    $('#recLink').attr("href", recLink);
    $('img').attr('src', photo);
    $('#next').removeClass('hide')*/

    reRender();
  });
});

$(document).ready(function () {
  var ref = new Firebase('https://buzzword-bingo.firebaseio.com/');


    var customEvent = 'click';
    $(document).on("mobileinit", function() {
        customEvent = $.support.touch ? "vclick" : "click";
    });

$("#make-new-board").on(customEvent, function () {
    location.reload();
  });

  var shuffle = function(list) {
    for(var j, x, i = list.length; i; j = Math.floor(Math.random() * i), x = list[--i], list[i] = list[j], list[j] = x);
    return list;
  }

  var range = function(start, end) {
    var array = [];
    for (var i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  }
  var list = range(0, 15);

  var selectSquare = function(html, list) {
    var num = shuffle(list).pop()
    var squareClass = '#square-' + num
    $(squareClass ).prepend(html)
  }

  //autopopulated Neohack board
  var words = ['Firebase', 'MongoDB', 'prizes', 'GDI', 'Rackspace', 'food', 'WuFoo', 'Redis', 'Pamela', 'women', 'winning', 'GeekDom', 'San Francisco', 'pride', 'Muni', 'Slack']

    ref.child("NeoHack15").set({
      words: words
   });

   ref.child("NeoHack15").child('words').on('value', function(snapshot) {
    var value = snapshot.val();
    // var name = value.first
    // var html = $("<p/>").text( value.name );
    for (var i=0; i < value.length; i++) {
      var html = $("<p/>").text( value[i] );
      selectSquare(html, list)
    }
  })
  
  // $('td').on(customEvent, function() {
  //   $(this).css('color', '#8a8a89');
 

//     3b3b3a
// after click 8a8a89
  // }) 

$('td').on(customEvent, function() {
  $(this).toggleClass('highlight');
  console.log($(this).css('background-color'));
  if (checkWinner()) {
    alert('You Won!');
        location.reload();


  }
})

  // $('body').on('click', 'tr', function() {
  //  console.log($(this).css('background-color'))
  //  if ($(this).css('background-color') === 'rgb(244, 238, 156)') {
    //  $(this).css('background-color', '#f4e26f');     
  //  } else {
  //    $(this).css('background-color', '#f4ee9c')
  //  }
  // })

  //user input generated board
// $('#add-theme').on('click', function() {
//  var theme = $('#theme').val();
//  console.log(theme)
//  ref.child(theme).set({
//    words
//  })

//  ref.child(theme).on("value", function (snapshot) {
//     var value = snapshot.val();
//     console.log(value)
//     var html = $("<p/>").text( theme );
//     $('.theme-title').append(html);
//     $('.theme-form-container').hide();
//   });
// })

//  ref.child("theme/words").on("child_added", function(snapshot) {
//    var value = snapshot.val();
//    var html = $("<p/>").text( value.word );
//    selectSquare(html, list);
//  })

//   $("#add-word").on(customEvent, function () {
//    var word = $("#word").val();
//      ref.child("theme/words").push({
//          word
//      });
//  });


  //anonymous Auth
 //  function authHandler(error, authData) {
  //   if (error) {
  //     console.log("Login Failed!", error);
  //   } else {
  //     console.log("Authenticated successfully with payload:", authData);
  //   }
  // }

  // $('#login').on(customEvent, function() {   
  //  ref.authAnonymously(authHandler);
  // })

 //  var currentUser;

 $("#make-new-board").on(customEvent, function () {
    location.reload();
  });


});


var playerWin = false;

var checkWinner = function() {
        playerWin = ( hasRowWin() || hasColWin() || hasDiaWin() );
        return playerWin;

    }


    var hasRowWin = function(){

        var rowWin = false;

        if (    //firstRow
                (   ($($("#square-0")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                    ($($("#square-1")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                    ($($("#square-2")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                    ($($("#square-3")[0]).css("background-color") ===
"rgb(247, 221, 46)")
                )
            || //seconf row
                (   ($($("#square-4")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                    ($($("#square-5")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                    ($($("#square-6")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                    ($($("#square-7")[0]).css("background-color") ===
"rgb(247, 221, 46)")
                )
            || //third row
                (   ($($("#square-8")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                    ($($("#square-9")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                    ($($("#square-10")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                    ($($("#square-11")[0]).css("background-color") ===
"rgb(247, 221, 46)")
                )
            || //fourth row
                (   ($($("#square-12")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                    ($($("#square-13")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                    ($($("#square-14")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                    ($($("#square-15")[0]).css("background-color") ===
"rgb(247, 221, 46)")
                )
            )
        {
            rowWin = true;
        };

        return rowWin;
    };

    var hasColWin = function() {

        var colWin = false;
        // debugger;
        if (    //first column
             (  ($($("#square-0")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-4")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-8")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-12")[0]).css("background-color") ===
"rgb(247, 221, 46)")
              )
            ||  //second column
              ( ($($("#square-1")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-5")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-9")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-13")[0]).css("background-color") ===
"rgb(247, 221, 46)")
              )
            ||  //third column
              ( ($($("#square-2")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-6")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-10")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-14")[0]).css("background-color") ===
"rgb(247, 221, 46)")
              )
            ||  //fourth column
              ( ($($("#square-3")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-7")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-11")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-15")[0]).css("background-color") ===
"rgb(247, 221, 46)")
              )
            )

        {
            colWin = true;
        };
        return colWin;
    };

    var hasDiaWin = function(){

        var diaWin = false;

        if (
              ( ($($("#square-0")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-5")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-10")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-15")[0]).css("background-color") ===
"rgb(247, 221, 46)")
                )
            ||
              ( ($($("#square-3")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-6")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-9")[0]).css("background-color") ===
"rgb(247, 221, 46)") &&
                ($($("#square-12")[0]).css("background-color") ===
"rgb(247, 221, 46)")
              )
          )
        {
            diaWin = true;
        };
        return diaWin;
    };

$(document).ready(function () {
  var ref = new Firebase('https://scorching-heat-894.firebaseio.com');

$("#make-new-board").click(function () {
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
	var list = range(1, 6);

  var selectSquare = function(html, list) {
  	var num = shuffle(list).pop()
  	var squareClass = '#square-' + num
  	$(squareClass ).prepend(html)
  }

  //autopopulated Neohack board
  var words = ['Firebase', 'MongoDB', 'prizes', 'GDI', 'Rackspace', 'food', 'WuFoo', 'Redis', 'Pamela', 'women', 'winning', 'GeekDom', 'San Francisco', 'pride', 'Muni', 'Slack']

	  ref.child("NeoHack15").set({
    	words
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
  
  $('.hexagon-in2').click(function() {
    $(this).toggleClass('highlight');
  }) 


  $('body').on('click', '.square', function() {
  	console.log($(this).css('background-color'))
  	if ($(this).css('background-color') === 'rgb(244, 238, 156)') {
			$(this).css('background-color', '#f4e26f');  		
  	} else {
  		$(this).css('background-color', '#f4ee9c')
  	}
  })

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

//   $("#add-word").click(function () {
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

	// $('#login').click(function() {   
	// 	ref.authAnonymously(authHandler);
	// })

 //  var currentUser;

 


});


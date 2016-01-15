

$(document).ready(function() {

//looping.html
var bottles = 20;
for (bottles= 20; bottles >= 1; bottles -=1) {

   $(".loop").append(bottles + "loops ")

 }

//branching.html
 $("form#questions").submit(function(event) {
    var age = parseInt($("input#age").val());
    var hobbies = $("select#hobbies").val();

    if (age) {
      if (age < 21 && hobbies == 'coffee'){
          $("#result1").show();
    }
  }
    if (age) {
      if (age >=21 && hobbies == 'coffee'){
          $("#result2").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies == 'tea'){
          $("#result3").show();
    }
  }
    if (age) {
      if (age > 21 && hobbies == 'tea'){
          $("#result4").show();
    }
  }

     else {
      alert('Please fill in the details.');
    }

    event.preventDefault();
  })

//forms.html

$('#blanks form').submit(function(event) {
    fname = $("input#fname").val();
    lname = $("input#lname").val();
    phone = $("input#mobile").val();


$('.fname').text(fname);

    event.preventDefault();
    });




//database stuff


  index = lunr(function () {
  this.field('title', 10)
  this.field('body')


});


index.add({
   id: 1,
   title: 'Arrays',
   body: '../html/arrays.html'
 })

 index.add({
   id: 2,
   title: 'Bar',
   body: 'Bar bar bar!'
 })





});

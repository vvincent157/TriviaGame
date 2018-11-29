// 1. Setting a container for ur game to go into.
var card = $("#quiz-area");

// 2. Set up questions set:
var questions = [{
        question: "What is John Candy's Highest grossing Movie?",
        answers: ["Blues Brothers", "Stripes", "Uncle Buck", "Home Alone"],
        correctAnswer: "Home Alone"
    }, 
    {
        question: "Who voiced Woody in Toy Story?",
        answers: ["Tim Allen", "Tom Hanks.", "Bill Murray", "Steve Martin"],
        correctAnswer: "Tom Hanks"
      },
      {
        question: "What does Kel love?",
        answers: ["Orange Soda", "Grape Soda", "Cherry Soda", "Strawberry Soda"],
        correctAnswer: "Orange Soda"
      },
      {
        question: "Who killed Alexander Hamilton?",
        answers: ["John Laurens", "Hercules Mulligan", "Aaron Burr", "James Madison"],
        correctAnswer: "Aaron Burr"
      },
      {
        question: "Who had a crush on Arnold?",
        answers: ["Gerald", "Phoebe", "Helga", "Eugene"],
        correctAnswer: "Helga"
      },
      {
        question: "What is the third Harry Potter Movie?",
        answers: ["Chamber of Secrets", "Goblet of Fire", "Prisoner of Azkaban", "Sorcerer's Stone"],
        correctAnswer: "Prisoner of Azkaban"
      },
      {
        question: "Who started alongside Michael Jordan in 'Space Jam'?",
        answers: ["Bill Murray", "Steve Martin", "Dan Aykroyd", "Martin Short"],
        correctAnswer: "Bill Murray"
      },
      {
        question: "What was the top selling toy in 1997?",
        answers: ["Game Boy", "Tamagotchi", "Supersoaker", "Pokemon Cards"],
        correctAnswer: "Tamagotchi"
      },
      {
        question: "Who isn't a member of NSYNC?",
        answers: ["Nick", "Justin", "Lance", "Joey"],
        correctAnswer: "Nick"
      },
      {
        question: "Which of these is NOT a Wes Anderson Movie?",
        answers: ["Fantastic Mr. Fox", "Rocket Science", "Rushmore", "The Darjeeling Limited"],
        correctAnswer: "Rocket Science"
      },
];

// 3. Variable that will hold the setInterval...call it timer
var timer;

// This var game holds all the game functionality broken up into functions.
var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

// here we have a countdown function that logs when the time is up and sets the counter to 120 seconds
  countdown: function() {
    // decrements the counter
    	game.counter--;
    // Displays it to the dom
 
  $("#counter-number").html(game.counter);
  if(game.counter === 0){
      alert("TIME'S UP");
      game.done();
  }
 },
  // this function starts our game
  start: function() {
      this.counter = 120;
      $('#quiz-area').empty();
    // sets the interval on the coundown at 1 second at a time.
    timer = setInterval(game.countdown, 1000);


    // Display the countdown timer
	$("#sub-wrapper").prepend("<h2> Time Remaining <span id = 'counter-number'>120</span></h2>");
    // remove the start button
    $("#start").remove();
    
    for(var i =0; i < questions.length; i++){
        $('#quiz-area').append("<h2>" + questions[i].question + "</h2>");
        for (var r = 0; r < questions[i].answers.length; r++){
            // $('#quiz-area').append(` <label for='question-${i}'><b>${questions[i].question}</b></label>`);
            $('#quiz-area').append(`<input type='radio' name='question-${i}' value="${questions[i].answers}">${questions[i].answers[r]}<br>`);
            // if(i === 0) {
            //     $('#quiz-area').append(` <label for='question-${i}'><b>${questions[i].question}</b></label>`);

            // }
        }
    
  
    }
    $('#quiz-area').append(`<button id= 'done'> Done</button>`);
	// loop over the questions and answers
	  // this is a loop within a loop...
    //   $('#quiz-area').append(`<input type="submit" id="done" value="Submit">`);

     
	// make sure to have a done button append at the bottom here.
  },

  // this done function allows us to grab the values of each selected answer and then ends the game and provides the results.
  done: function() {
    // loops over each input and responds to the check.
    
    $.each(
        $("input[name='question-0']:checked"), function(){
            if($(this).val()=== questions[0].correctAnswer){
                game.correct++;
            }
            else{game.incorrect++;
            }
        });
    $.each(
        $("input[name='question-1']:checked"), function(){
            if($(this).val()=== questions[1].correctAnswer){
                game.correct++;
            }
            else{game.incorrect++;
            }
        });
    $.each(
        $("input[name='question-2']:checked"), function(){
            if($(this).val()=== questions[2].correctAnswer){
                game.correct++;
            }
            else{game.incorrect++;
            }
        });
    $.each(
        $("input[name='question-3']:checked"), function(){
            if($(this).val()=== questions[3].correctAnswer){
                game.correct++;
            }
            else{game.incorrect++;
            }
        });  
    $.each(
    $("input[name='question-4']:checked"), function(){
        if($(this).val()=== questions[4].correctAnswer){
            game.correct++;
        }
        else{game.incorrect++;
        }
    });   
    $.each(
        $("input[name='question-5']:checked"), function(){
            if($(this).val()=== questions[5].correctAnswer){
                game.correct++;
            }
            else{game.incorrect++;
            }
        });   
    $.each(
        $("input[name='question-6']:checked"), function(){
            if($(this).val()=== questions[6].correctAnswer){
                game.correct++;
            }
            else{game.incorrect++;
            }
        });   
    $.each(
        $("input[name='question-7']:checked"), function(){
            if($(this).val()=== questions[7].correctAnswer){
                game.correct++;
            }
            else{game.incorrect++;
            }
        });   
    $.each(
        $("input[name='question-8']:checked"), function(){
            if($(this).val()=== questions[8].correctAnswer){
                game.correct++;
            }
            else{game.incorrect++;
            }
        });
    $.each(
        $("input[name='question-9']:checked"), function(){
            if($(this).val()=== questions[9].correctAnswer){
                game.correct++;
            }
            else{game.incorrect++;
            }
        });
        $.each(
            $("input[name='question-10']:checked"), function(){
                if($(this).val()=== questions[10].correctAnswer){
                    game.correct++;
                }
                else{game.incorrect++;
                }
            });
      // this logic will determine if correct or incorrect
	  
	  // you need one loop (look into $.each method) for each questions and set of correctAnswers

	  // call this.result() so the results display after the game ends
    this.result();

  },

// this function sets the results after you click the done button
  result: function() {
      console.log('hi')
//   clear the timer as the game is over....  
    clearInterval(timer);
	//  remove the questions and done button
    // display the results of the game
    $("#sub-wrapper h2").remove();

    $('#quiz-area').html("<h2>You're Done!</h2>");
    $('#quiz-area').append("<h3> Correct Answers:" + this.correct + "</h3>");
    $('#quiz-area').append("<h3> Incorrect Answers:" + this.incorrect + "</h3>");
    $('#quiz-area').append("<h3> Unanswered:" + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    $('#quiz-area').append("<button id='start'> Try Again </button>");
    }
};

// CLICK EVENTS
// controls the start and done functions in onclicks.
$(document).on("click", "#start", function() {
    game.start();
 // make sure to run the staet fucntion here, reference the game object
});




$(document).on("click", "#done", function() {
    game.done();
  // make sure to run the done function here, reference the game object.
});
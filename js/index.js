var clickedData = "";
var clickedButton = "";
var clicked_letters = "";
var penalize_same_letter = true;
var lives = 9;
var all_is_guessed = false;
var strategy = "linear"; /* linear, boottomup, headfirst */

var hangProgress = {
    lives_rest: 9,
    index:      0,
    linear:     ["h11", "h12", "h13", "h21", "h22", "h23", "h31", "h32", "h33"],
    boottomup:  ["h31", "h21", "h11", "h12", "h13", "h22", "h23", "h32", "h33"],
    headfirst:  ["h12", "h22", "h32", "h23", "h33", "h13", "h11", "h21", "h31"]
};

/* Timing */
var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function() {
    var label = pad(parseInt(sec/60,10)) + ":" + pad(++sec%60);
    document.getElementById("timing").innerText=label;
  }, 1000);

function handle_form_reset(form) {
  var tile_lives = document.getElementById("infomsg");
  tile_lives.innerText = "YOU LOST! GAME OVER!!!";
}

function validate(form) {
  if (hangProgress.lives_rest === 0 && !all_is_guessed ) {
      form.reset();
  }
}

function render_lives() {
  var tile_lives = document.getElementById("lives");
  tile_lives.innerText = parseInt(hangProgress.lives_rest);
}

function render_hungman () {
    render_lives();

    if (hangProgress.index >= 0 && hangProgress.index < 9) {
        var tile_img = document.getElementById(hangProgress[strategy][hangProgress.index]);
        tile_img.style.display = "block";
    }
}

function take_life() {
    hangProgress.lives_rest = hangProgress.lives_rest - 1;
    hangProgress.index      = 9 - hangProgress.lives_rest;
}

function clickedme(button) {
    clickedData = button.value;
    clickedButton = button.id;
    console.log("Clicked: " + String(button.id) + " data: " + String(clickedData));

    var clicked = document.getElementById("clicked_letters");
    if (clickedData == ' ') {
        clickedData = '\u2423';
    }
    /* We update clicked_letters only if the letter has not been typed */
    if (clicked_letters.indexOf(clickedData) === -1) {
        clicked_letters = clicked_letters + clickedData;
        clicked.innerText = clicked_letters;
        console.log("Update: " + clicked_letters);
        if (guess_right(clickedData)) {
            /* We guessed the letter right so we update the clicked letters */
            1 === 1;
        } else {
            render_hungman();
            take_life();
        }
    } else {
        if (penalize_same_letter) {
            render_hungman();
            take_life();
        }
    }

    return true;
}

function init_hangman() {
    var buttonsList = document.getElementById("alphabet");

    var abcd = "abcdefghijklmnopqrstuvwxyz ";
    var i = 0;
    var newletc = "";
    while (i < abcd.length) {
        var buttonLabel = String(abcd.charAt(i));
        var buttonId = "id"+String(abcd.charAt(i));
        if (abcd.charAt(i) == ' ') {
            buttonLabel = '\u2423';
            buttonId = "spacebar";
        }
        newlet = "<button id=\"" + buttonId + "\" value=\"" + String(abcd.charAt(i));
        newlet = newlet + "\" type=\"text\" onclick=\"clickedme(this)\">";
        newlet = newlet + buttonLabel;
        newlet = newlet + "</button>\r\n";
        ///
        i = i + 1;
        // console.log(newlet);
        newletc += newlet;
    }
    // console.log(newletc);
    buttonsList.innerHTML = newletc;

    render_lives();

    console.log("STEP HANGMAN STARTED");
}

function guess_right() {
    return false;
}

function new_game() {
    reset_game();
    location.reload();
}

function reset_game() {
    hangProgress.index      = 0;
    hangProgress.lives_rest = 9;
    clicked_letters         = "";
    var clicked             = document.getElementById("clicked_letters");
    clicked.innerText       = clicked_letters;
}

function panelclick(button) {
    if (button.value == "reset") {
        reset_game();
    }
    if (button.value == "new-game") {
        new_game();
    }
}

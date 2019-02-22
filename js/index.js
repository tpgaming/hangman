var words = [
  "Step",
  "Academy",
  "Minecraft",
  "Lego",
  "Air",
  "Stone",
  "themeatly artist makes games comic"
];

const country_data="https://s3-us-west-2.amazonaws.com/s.cdpn.io/198246/countries.json";
const cities_data = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/198246/cities.json";

let clickedData = "";
let clickedButton = "";
let clicked_letters = "";
let penalize_same_letter = true;
let lives = 9;
let all_is_guessed = false;
let game_is_over = false;
let strategy = "bottomup"; /* linear, bottomup, headfirst */
let mainWord = "hehe";

let hangProgress = {
    lives_rest: 9,
    index: 0,
    linear: ["h11", "h12", "h13", "h21", "h22", "h23", "h31", "h32", "h33"],
    bottomup: ["h31", "h21", "h11", "h12", "h13", "h22", "h23", "h32", "h33"],
    headfirst: ["h12", "h22", "h32", "h23", "h33", "h13", "h11", "h21", "h31"]
};

let game_options_state = {
    strategy: "linear"
};

function render_word(word) {
    let length=word.length;
    let i = 0;
    let dots = "";
    while(i<length) {
        dots = dots+".";
        i = i + 1;
    };
    let el = document.getElementById("guessed_letters");
    el.innerText = dots;
};

/* Timing */
let sec = 0;

function pad(val) { return val > 9 ? val : "0" + val; }
setInterval(function() {
    let label = pad(parseInt(sec / 60, 10)) + ":" + pad(++sec % 60);
    document.getElementById("timing").innerText = label;
}, 1000);

function handle_form_reset(form) {
    game_is_over = true;
    let tile_lives = document.getElementById("infomsg");
    tile_lives.innerText = "YOU LOST! GAME OVER!!!";
}

function validate(form) {
    if (hangProgress.lives_rest === 0 && !all_is_guessed && !game_is_over) {
        form.reset();
    }
}

function render_lives() {
    let tile_lives = document.getElementById("lives");
    tile_lives.innerText = parseInt(hangProgress.lives_rest);
}

function render_hungman() {
    render_lives();

    if (hangProgress.index >= 1 && hangProgress.index <= 9) {
        let tile_img = document.getElementById(hangProgress[strategy][hangProgress.index - 1]);
        //tile_img.style.display = "block";
        tile_img.style.visibility = "visible";
    }
}

function take_life() {
    if (hangProgress.lives_rest > 0) {
        hangProgress.lives_rest = hangProgress.lives_rest - 1;
        hangProgress.index = 9 - hangProgress.lives_rest;
    }
}

function clickedme(button) {
    if (game_is_over) {
        return false;
    }
    clickedData = button.value;
    clickedButton = button.id;
    console.log("Clicked: " + String(button.id) + " data: " + String(clickedData));

    let clicked = document.getElementById("clicked_letters");
    if (clickedData == ' ') {
        clickedData = '\u2423';
    }
    /* We update clicked_letters only if the letter has not been typed */
    if (clicked_letters.indexOf(clickedData) === -1) {
        clicked_letters = clicked_letters + clickedData;
        clicked.innerText = clicked_letters;
        console.log("Update: " + clicked_letters);
        let guess_result = guess_right(clickedData);
        if (guess_result[0]) {
            /* We guessed the letter right so we update the guessed_letters */
            update_guessed_letters(guess_result[1]);
        } else {
            take_life();
            render_hungman();
        }
    } else {
        if (penalize_same_letter) {
            take_life();
            render_hungman();
        }
    }

    return true;
}

/* Taken from: https://gist.github.com/efenacigiray/9367920.js" */
function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

function update_guessed_letters(index) {
    let el = document.getElementById("guessed_letters");
    let dotword = el.innerText;
    for(let i = 0; i<index.length; i++) {
        dotword = replaceAt(dotword, index[i], clickedData);
    }
    el.innerText = dotword;
}

function init_hangman() {
    let buttonsList = document.getElementById("alphabet");

    let abcd = "abcdefghijklmnopqrstuvwxyz ";
    let i = 0;
    let newletc = "";
    while (i < abcd.length) {
        let buttonLabel = String(abcd.charAt(i));
        let buttonId = "id" + String(abcd.charAt(i));
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
    render_word(mainWord);
    console.log("HANGMAN STARTED");
}

function guess_right(letter) {
    let indexes = [];
    let currentIndex = 0;
    while ((currentIndex=mainWord.indexOf(letter, currentIndex)) !== -1) {
        indexes.push(currentIndex);
        currentIndex = currentIndex+1;
    }
    if ( indexes.length === 0 ) {
        return [false,[]];  
    }
    return [true, indexes];
}

function game_options() {
    console.log("TODO: Game options panel");
}

function new_game() {
    reset_game();
    location.reload();
}

function hide_hangman_tiles() {
    let tile_div = document.getElementById("hangman").childNodes;
    let count = tile_div.length;
    let i = 0;
    while (i < 9) {
        document.getElementById(hangProgress[strategy][i]).style.visibility = "hidden";
        i += 1;
    }
}

function reset_game() {
    hangProgress.index = 0;
    hangProgress.lives_rest = 9;
    clicked_letters = "";
    let clicked = document.getElementById("clicked_letters");
    clicked.innerText = clicked_letters;
    let tile_lives = document.getElementById("infomsg");
    tile_lives.innerText = "";
    hide_hangman_tiles();
    render_lives();
    game_is_over = false;
    sec = 0;
  
}

function panelclick(button) {
    if (button.value == "reset") {
        reset_game();
    }
    if (button.value == "options") {
        game_options();
    }
    if (button.value == "new-game") {
        new_game();
    }
}

var words = [
    "Step",
    "Academy",
    "Minecraft",
    "Lego",
    "Air",
    "Stone",
    "themeatly artist makes games comic"
  ];

  let countries_data = {
    "Countries": [
      "Aland Islands",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bonaire, Sint Eustatius and Saba",
      "Bosnia and Herzegovina",
      "Botswana",
      "Bouvet Island",
      "Brazil",
      "British Indian Ocean Territory",
      "United States Minor Outlying Islands",
      "Virgin Islands (British)",
      "Virgin Islands (U.S.)",
      "Brunei Darussalam",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cabo Verde",
      "Cayman Islands",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Christmas Island",
      "Cocos (Keeling) Islands",
      "Colombia",
      "Comoros",
      "Congo",
      "Democratic Republic of the Congo",
      "Cook Islands",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Cura\u00e7ao",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands",
      "Malvinas",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "French Guiana",
      "French Polynesia",
      "French Southern Territories",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guadeloupe",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Heard Island and McDonald Islands",
      "Holy See",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "C\u00f4te d'Ivoire",
      "Iran",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Kuwait",
      "Kyrgyzstan",
      "Lao People's Democratic Republic",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macao",
      "Macedonia",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Martinique",
      "Mauritania",
      "Mauritius",
      "Mayotte",
      "Mexico",
      "Micronesia",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "Democratic People's Republic of Korea",
      "Northern Mariana Islands",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine, State of",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Pitcairn",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Republic of Kosovo",
      "R\u00e9union",
      "Romania",
      "Russian Federation",
      "Rwanda",
      "Saint Barthelemy",
      "Saint Helena, Ascension and Tristan da Cunha",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Martin",
      "Saint Pierre and Miquelon",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Sint Maarten",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Georgia and the South Sandwich Islands",
      "Republic of Korea",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan",
      "Suriname",
      "Svalbard and Jan Mayen",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syrian Arab Republic",
      "Taiwan",
      "Tajikistan",
      "United Republic of Tanzania",
      "Thailand",
      "Timor-Leste",
      "Togo",
      "Tokelau",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks and Caicos Islands",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom of Great Britain and Northern Ireland",
      "United States of America",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Venezuela",
      "Viet Nam",
      "Wallis and Futuna",
      "Western Sahara",
      "Yemen",
      "Zambia",
      "Zimbabwe"
    ]
  };
  
  let cities_data = {
    "Africa": [
      "Abidjan",
      "Accra",
      "Addis Ababa",
      "Algiers",
      "Asmara",
      "Bamako",
      "Bangui",
      "Banjul",
      "Bissau",
      "Blantyre",
      "Brazzaville",
      "Bujumbura",
      "Cairo",
      "Casablanca",
      "Ceuta",
      "Conakry",
      "Dakar",
      "Dar es Salaam",
      "Djibouti",
      "Douala",
      "El Aaiun",
      "Freetown",
      "Gaborone",
      "Harare",
      "Johannesburg",
      "Juba",
      "Kampala",
      "Khartoum",
      "Kigali",
      "Kinshasa",
      "Lagos",
      "Libreville",
      "Lome",
      "Luanda",
      "Lubumbashi",
      "Lusaka",
      "Malabo",
      "Maputo",
      "Maseru",
      "Mbabane",
      "Mogadishu",
      "Monrovia",
      "Nairobi",
      "Ndjamena",
      "Niamey",
      "Nouakchott",
      "Ouagadougou",
      "Porto-Novo",
      "Sao Tome",
      "Tripoli",
      "Tunis",
      "Windhoek"
    ],
    "America": [
      "Anchorage",
      "Anguilla",
      "Antigua",
      "Araguaina",
      "Buenos Aires",
      "Catamarca",
      "Cordoba",
      "Jujuy",
      "La Rioja",
      "Mendoza",
      "Rio Gallegos",
      "Salta",
      "San Juan",
      "San Luis",
      "Tucuman",
      "Ushuaia",
      "Aruba",
      "Asuncion",
      "Bahia",
      "Bahia Banderas",
      "Barbados",
      "Belem",
      "Belize",
      "Blanc-Sablon",
      "Boa Vista",
      "Bogota",
      "Boise",
      "Campo Grande",
      "Cancun",
      "Caracas",
      "Cayenne",
      "Cayman",
      "Chicago",
      "Chihuahua",
      "Costa Rica",
      "Cuiaba",
      "Curacao",
      "Dawson Creek",
      "Denver",
      "Detroit",
      "Dominica",
      "Edmonton",
      "Eirunepe",
      "El Salvador",
      "Fortaleza",
      "Glace Bay",
      "Godthab",
      "Grand Turk",
      "Grenada",
      "Guadeloupe",
      "Guatemala",
      "Guayaquil",
      "Guyana",
      "Halifax",
      "Havana",
      "Hermosillo",
      "Indianapolis",
      "Vincennes",
      "Jamaica",
      "Juneau",
      "Louisville",
      "Kralendijk",
      "La Paz",
      "Lima",
      "Los Angeles",
      "Lower Princes",
      "Maceio",
      "Managua",
      "Manaus",
      "Marigot",
      "Martinique",
      "Matamoros",
      "Mazatlan",
      "Menominee",
      "Merida",
      "Mexico City",
      "Miquelon",
      "Moncton",
      "Monterrey",
      "Montevideo",
      "Montserrat",
      "Nassau",
      "New York",
      "New Salem",
      "Ojinaga",
      "Panama",
      "Paramaribo",
      "Phoenix",
      "Port-au-Prince",
      "Port of Spain",
      "Porto Velho",
      "Puerto Rico",
      "Punta Arenas",
      "Recife",
      "Regina",
      "Rio Branco",
      "Santarem",
      "Santiago",
      "Santo Domingo",
      "Sao Paulo",
      "St Barthelemy",
      "St Johns",
      "St Kitts",
      "St Lucia",
      "St Thomas",
      "St Vincent",
      "Tegucigalpa",
      "Thunder Bay",
      "Tijuana",
      "Toronto",
      "Tortola",
      "Vancouver",
      "Whitehorse",
      "Winnipeg",
      "Yellowknife"
    ],
    "Arctic": [
      "Longyearbyen"
    ],
    "Asia": [
      "Aden",
      "Almaty",
      "Amman",
      "Aqtau",
      "Aqtobe",
      "Ashgabat",
      "Atyrau",
      "Baghdad",
      "Bahrain",
      "Baku",
      "Bangkok",
      "Barnaul",
      "Beirut",
      "Bishkek",
      "Brunei",
      "Chita",
      "Choibalsan",
      "Colombo",
      "Damascus",
      "Dhaka",
      "Dili",
      "Dubai",
      "Dushanbe",
      "Famagusta",
      "Gaza",
      "Hebron",
      "Ho Chi Minh",
      "Hong Kong",
      "Hovd",
      "Irkutsk",
      "Jakarta",
      "Jayapura",
      "Jerusalem",
      "Kabul",
      "Kamchatka",
      "Karachi",
      "Kathmandu",
      "Kolkata",
      "Krasnoyarsk",
      "Kuala Lumpur",
      "Kuching",
      "Kuwait",
      "Macau",
      "Magadan",
      "Makassar",
      "Manila",
      "Muscat",
      "Nicosia",
      "Novokuznetsk",
      "Novosibirsk",
      "Omsk",
      "Oral",
      "Phnom Penh",
      "Pontianak",
      "Pyongyang",
      "Qatar",
      "Qostanay",
      "Qyzylorda",
      "Riyadh",
      "Sakhalin",
      "Samarkand",
      "Seoul",
      "Shanghai",
      "Singapore",
      "Taipei",
      "Tashkent",
      "Tbilisi",
      "Tehran",
      "Thimphu",
      "Tokyo",
      "Tomsk",
      "Ulaanbaatar",
      "Urumqi",
      "Vientiane",
      "Vladivostok",
      "Yakutsk",
      "Yangon",
      "Yekaterinburg",
      "Yerevan"
    ],
    "Atlantic Ocean": [
      "Azores",
      "Bermuda",
      "Canary",
      "Cape Verde",
      "Faroe",
      "Madeira",
      "Reykjavik",
      "South Georgia",
      "St Helena",
      "Stanley"
    ],
    "Australia": [
      "Adelaide",
      "Brisbane",
      "Broken Hill",
      "Darwin",
      "Hobart",
      "Melbourne",
      "Perth",
      "Sydney"
    ],
    "Europe": [
      "Amsterdam",
      "Andorra",
      "Astrakhan",
      "Athens",
      "Belgrade",
      "Berlin",
      "Bratislava",
      "Brussels",
      "Bucharest",
      "Budapest",
      "Chisinau",
      "Copenhagen",
      "Dublin",
      "Gibraltar",
      "Guernsey",
      "Helsinki",
      "Isle of Man",
      "Istanbul",
      "Jersey",
      "Kaliningrad",
      "Kiev",
      "Kirov",
      "Lisbon",
      "Ljubljana",
      "London",
      "Luxembourg",
      "Madrid",
      "Malta",
      "Mariehamn",
      "Minsk",
      "Monaco",
      "Moscow",
      "Oslo",
      "Paris",
      "Podgorica",
      "Prague",
      "Riga",
      "Rome",
      "Samara",
      "San Marino",
      "Sarajevo",
      "Saratov",
      "Simferopol",
      "Skopje",
      "Sofia",
      "Stockholm",
      "Tallinn",
      "Tirane",
      "Ulyanovsk",
      "Uzhgorod",
      "Vaduz",
      "Vatican",
      "Vienna",
      "Vilnius",
      "Volgograd",
      "Warsaw",
      "Zagreb",
      "Zaporozhye",
      "Zurich"
    ],
    "Indian Ocean": [
      "Antananarivo",
      "Christmas",
      "Cocos",
      "Comoro",
      "Kerguelen",
      "Mahe",
      "Maldives",
      "Mauritius",
      "Mayotte",
      "Reunion"
    ],
    "Pacific Ocean": [
      "Apia",
      "Auckland",
      "Bougainville",
      "Efate",
      "Fiji",
      "Funafuti",
      "Guadalcanal",
      "Guam",
      "Honolulu",
      "Majuro",
      "Nauru",
      "Niue",
      "Norfolk",
      "Noumea",
      "Pago Pago",
      "Palau",
      "Pitcairn",
      "Pohnpei",
      "Port Moresby",
      "Rarotonga",
      "Saipan",
      "Tahiti",
      "Tarawa",
      "Tongatapu",
      "Wallis"
    ]
  };
  
  let data_sets = {
      data_mode: "inline",        /* inline - embedded in this script, url - external */
      countries: countries_data,
      cities: cities_data
  }
  
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
      guesses_to_go: 0,
      lives_rest: 9,
      index: 0,
      linear: ["h11", "h12", "h13", "h21", "h22", "h23", "h31", "h32", "h33"],
      bottomup: ["h31", "h21", "h11", "h12", "h13", "h22", "h23", "h32", "h33"],
      headfirst: ["h12", "h22", "h32", "h23", "h33", "h13", "h11", "h21", "h31"]
  };
  
  let game_options_state = {
      strategy: "linear",
      topic: "countries",   /* Can be countries, cities */
      which_topic: 0
  };
  
  function get_word(topic) {
      let new_word = "";
      let topic_url = data_sets[topic];
  
      if (data_sets.data_mode == "url") {
          let request = new XMLHttpRequest();
          request.open('GET', topic_url, true);
          request.setRequestHeader("Access-Control-Allow-Origin", "*");
          request.setRequestHeader("Access", "application/json");
          request.setRequestHeader("Content-Type", "application/json");
          request.setRequestHeader("X-Content-Type-Options", "nosniff");
          request.responseType = 'json';
          request.send();
  
          request.onload = function() {
              let response = request.response;
              if (topic == "countries") {
                let countries = response.Countries;
                game_options_state.which_topic = Math.floor(Math.random()*countries.length);
                mainWord = countries[game_options_state.which_topic];
              }
          }
      } else if (data_sets.data_mode == "inline") {
          let data = data_sets.countries.Countries;
          if (topic == "countries") {
              game_options_state.which_topic = Math.floor(Math.random()*data.length);
              new_word = data[game_options_state.which_topic];
          } else if (topic == "cities") {
              data = data_sets.cities.Europe;
              game_options_state.which_topic = Math.floor(Math.random()*data.length);
              new_word = data[game_options_state.which_topic];
          } else {
              data = words;
              game_options_state.which_topic = Math.floor(Math.random()*data.length);
              new_word = data[game_options_state.which_topic];
          }
      }
  
      return new_word;
  }
  
  mainWord = get_word("countries");
  
  function render_word(word) {
      let length=word.length;
      /* Record how many letters to be guessed */
      hangProgress.guesses_to_go = length;
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
      if (all_is_guessed) {
        let tile_lives = document.getElementById("infomsg");
        tile_lives.innerText = "YOU WON!!!";
      } else {
        if (game_is_over) {
            let tile_lives = document.getElementById("infomsg");
            tile_lives.innerText = "YOU LOST! GAME OVER!!!";
            console.log("The word to guess was : " + mainWord + " !");
        }
      }
  }
  
  function validate(form) {
      if (all_is_guessed) {
          /* Player WON! */
          ;
      } else {
          if (hangProgress.lives_rest === 0 && !game_is_over) {
              game_is_over = true;
          }
      }
      form.reset();
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
      if (game_is_over || all_is_guessed) {
          return false;
      }
      clickedData = button.value;
      clickedButton = button.id;
      console.log("Clicked: " + String(button.id) + " data: " + String(clickedData));
  
      let clicked = document.getElementById("clicked_letters");
      if (clickedData == ' ') {
          clickedData = '\u2423';
      }
  
      if (!game_is_over && !all_is_guessed) {
          /* We update clicked_letters only if the letter has not been typed */
          if (clicked_letters.indexOf(clickedData) === -1) {
              clicked_letters = clicked_letters + clickedData;
              clicked.innerText = clicked_letters;
              console.log("Update: " + clicked_letters);
              let guess_result = guess_right(clickedData);
                  if (guess_result[0]) {
                      /* We guessed the letter right so we update the guessed_letters */
                      update_guessed_letters(guess_result[1]);
                      if (hangProgress.guesses_to_go === 0 ) {
                        all_is_guessed = true;
                      }
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
          if(hangProgress.guesses_to_go > 0) {
            hangProgress.guesses_to_go = hangProgress.guesses_to_go - 1;
          }
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
      let actual_letter = letter;
      if (letter == '\u2423') {
        actual_letter = ' ';
      }
      let currentIndex = 0;
      let all_lower = mainWord.toLowerCase();
      while ((currentIndex=all_lower.indexOf(actual_letter, currentIndex)) !== -1) {
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
      hangProgress.guesses_to_go = 0;
      game_is_over = false;
      all_is_guessed = false;
      clicked_letters = "";
      let clicked = document.getElementById("clicked_letters");
      clicked.innerText = clicked_letters;
      let tile_lives = document.getElementById("infomsg");
      tile_lives.innerText = "";
      hide_hangman_tiles();
      render_lives();
      render_word(mainWord);
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
  
  
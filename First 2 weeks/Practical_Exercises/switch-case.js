/////////////////////////Easy
//Question1: Day of the Week
function dayOfWeek(integer) {
  let day;

  switch (integer) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
      console.log("Invalid day.");
      return;
  }

  return day;
}
// console.log(dayOfWeek(2));

//Question2: Simple Calculator
function calculator(num1, num2, operator) {
  let result = 0;

  switch (operator) {
    case (operator = "+"):
      result = num1 + num2;
      break;
    case (operator = "-"):
      result = num1 - num2;
      break;
    case (operator = "*"):
      result = num1 * num2;
      break;
    case (operator = "/"):
      result = num1 / num2;
      break;
  }

  return result;
}
// console.log(calculator(2, 4, "-"));

//Question3: Traffic Light System
function trafficLight(color) {
  let statement = "";
  switch (color.toLowerCase()) {
    case "red":
      statement = "Stop";
      break;
    case "yellow":
      statement = "Slow Down";
      break;
    case "green":
      statement = "GO";
      break;
    default:
      console.log("Invalid color");
      return;
  }

  return statement;
}
// console.log(trafficLight("Red"));

//Question4: Month Name and Days
function monthNameDays(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log("January - 31 days");
      break;
    case 2:
      console.log("February - 28 or 29 days");
      break;
    case 3:
      console.log("March - 31 days");
      break;
    case 4:
      console.log("April - 30 days");
      break;
    case 5:
      console.log("May - 31 days");
      break;
    case 6:
      console.log("June - 30 days");
      break;
    case 7:
      console.log("July - 31 days");
      break;
    case 8:
      console.log("August - 31 days");
      break;
    case 9:
      console.log("September - 30 days");
      break;
    case 10:
      console.log("October - 31 days");
      break;
    case 11:
      console.log("November - 30 days");
      break;
    case 12:
      console.log("December - 31 days");
      break;
    default:
      console.log(
        "Invalid month number! Please enter a number between 1 and 12."
      );
  }
}
// monthNameDays(1);

//Question5: Check for Vowel or Consonant
function checkVowelConsonant(letter) {
  switch (letter.toLowerCase()) {
    case "a":
      console.log(`${letter} is vowel`);
      break;
    case "e":
      console.log(`${letter} is vowel`);
      break;
    case "i":
      console.log(`${letter} is vowel`);
      break;
    case "o":
      console.log(`${letter} is vowel`);
      break;
    case "u":
      console.log(`${letter} is vowel`);
      break;
    default:
      console.log(`${letter} is consonant`);
  }
}
// checkVowelConsonant("b");

/////////////////////////Medium
//Question6: Student Grade System
function gradeSystem(score) {
  switch (true) {
    case score < 0 || score > 100:
      console.log("Invalid Score");
      break;
    case score >= 90:
      console.log("A");
      break;
    case score >= 80:
      console.log("B");
      break;
    case score >= 70:
      console.log("C");
      break;
    case score >= 60:
      console.log("D");
      break;
    default:
      console.log("F");
  }
}
// gradeSystem(120);

//Question7: Currency Converter
function currencyConvertor(currencyCode) {
  switch (currencyCode) {
    case "USD":
      console.log("1 USD = 1 USD (Base Currency)");
      break;
    case "EUR":
      console.log("1 USD =  0.9564 EUR");
      break;
    case "INR":
      console.log("1 USD = 83 INR");
      break;
    case "JPY":
      console.log("1 USD = 151.9 JPY");
      break;
    default:
      console.log("Invalid currency code");
  }
}
// currencyConvertor("JPY");

//Question8: Menu-Based ATM System
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

let balance = 100000;

function atmSystem() {
  console.log(`
      1. Check Balance
      2. Withdraw Money
      3. Deposit Money
      4. Exit
      `);

  rl.question("Enter your choice: ", (input) => {
    let option = Number(input.trim());

    switch (option) {
      case 1:
        console.log(`
            Your balance is $${balance}
            `);
        atmSystem();
        break;
      case 2:
        rl.question("Enter amount to withdraw: ", (amount) => {
          amount = Number(amount.trim());
          if (amount > balance) {
            console.log("Insufficient funds!");
          } else {
            balance -= amount;
            console.log(
              `
                You have withdrawn $${amount}. New balance: $${balance}`
            );
          }
          atmSystem();
        });
        break;
      case 3:
        rl.question("Enter amount to deposit: ", (amount) => {
          amount = Number(amount.trim());
          balance += amount;
          console.log(
            `
              You have deposited $${amount}. New balance: $${balance}`
          );
          atmSystem();
        });
        break;
      case 4:
        console.log(`
              Thank you for using the ATM. Goodbye!`);
        rl.close();
        break;
      default:
        console.log(`
            Invalid option. Please try again.`);
        atmSystem();
    }
  });
}

// atmSystem();

//Question9: Determine Season by Month
function determineSeasonByMonth(integer) {
  switch (true) {
    case integer === 1 || integer === 12 || integer === 2:
      console.log("Winter");
      break;
    case integer === 3 || integer === 4 || integer === 5:
      console.log("Spring");
      break;
    case integer === 6 || integer === 7 || integer === 8:
      console.log("Summer");
      break;
    case integer === 9 || integer === 10 || integer === 11:
      console.log("Fall");
      break;
    default:
      console.log("Invalid Month");
  }
}
// determineSeasonByMonth(-1);

//Question10: Rock, Paper, Scissors Game
function playRockPaperScissors(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  playerChoice = playerChoice.toLowerCase();

  console.log(`You chose ${playerChoice}, Computer chose ${computerChoice}`);

  switch (true) {
    case playerChoice === computerChoice:
      console.log("It's a tie! Try again!");
      break;

    case playerChoice === "rock" && computerChoice === "scissors":
    case playerChoice === "paper" && computerChoice === "rock":
    case playerChoice === "scissors" && computerChoice === "paper":
      console.log("Congratulations! You win 🎉");
      break;

    case playerChoice === "rock" && computerChoice === "paper":
    case playerChoice === "paper" && computerChoice === "scissors":
    case playerChoice === "scissors" && computerChoice === "rock":
      console.log("Oops! The computer wins ");
      break;
    default:
      console.log(
        "Invalid action! Please choose 'rock', 'paper', or 'scissors'."
      );
  }
}
// playRockPaperScissors("paper");

/////////////////////////Hard
//Question11: Roman Numeral Converter
function romanConverter(integer) {
  switch (integer) {
    case 1:
      console.log("I");
      break;
    case 2:
      console.log("II");
      break;
    case 3:
      console.log("III");
      break;
    case 4:
      console.log("IV");
      break;
    case 5:
      console.log("V");
      break;
    case 6:
      console.log("VI");
      break;
    case 7:
      console.log("VII");
      break;
    case 8:
      console.log("VIII");
      break;
    case 9:
      console.log("IX");
      break;
    case 10:
      console.log("X");
      break;
    default:
      console.log("Invaled Number (Choose between 1-10)");
  }
}
// romanConverter(11);

//Question12: Zodiac Sign Finder
function zodiacSignFinder(month, day) {
  switch (true) {
    case (month === 3 && day >= 21) || (month === 4 && day <= 19):
      console.log("Aries");
      break;
    case (month === 4 && day >= 20) || (month === 5 && day <= 20):
      console.log("Taurus");
      break;
    case (month === 5 && day >= 21) || (month === 6 && day <= 20):
      console.log("Gemini");
      break;
    case (month === 6 && day >= 21) || (month === 7 && day <= 22):
      console.log("Cancer");
      break;
    case (month === 7 && day >= 23) || (month === 8 && day <= 22):
      console.log("Leo");
      break;
    case (month === 8 && day >= 23) || (month === 9 && day <= 22):
      console.log("Virgo");
      break;
    case (month === 9 && day >= 23) || (month === 10 && day <= 22):
      console.log("Libra");
      break;
    case (month === 10 && day >= 23) || (month === 11 && day <= 21):
      console.log("Scorpio");
      break;
    case (month === 11 && day >= 22) || (month === 12 && day <= 21):
      console.log("Sagittarius");
      break;
    case (month === 12 && day >= 22) || (month === 1 && day <= 19):
      console.log("Capricorn");
      break;
    case (month === 1 && day >= 20) || (month === 2 && day <= 18):
      console.log("Aquarius");
      break;
    case (month === 2 && day >= 19) || (month === 3 && day <= 20):
      console.log("Pisces");
      break;
    default:
      console.log("Invalid date! Please enter a valid month (1-12) and day.");
  }
}
// zodiacSignFinder(7, 25);

//Question13: Discount System Based on Membership
function discountSystem(membershipType) {
  const price = 200;
  const discounts = {
    gold: 20,
    silver: 15,
    bronze: 10,
  };

  const membership = membershipType.toLowerCase();

  switch (membership) {
    case "gold":
    case "silver":
    case "bronze":
      const discountRate = discounts[membership];
      const finalPrice = price - (discountRate * price) / 100;
      console.log(
        `You got a ${discountRate}% discount! You need to pay $${finalPrice}.`
      );
      break;
    default:
      console.log(
        "Invalid Membership Type! Please enter Gold, Silver, or Bronze."
      );
  }
}
// discountSystem("Bronze");

//Question14: Automated Toll Booth System
function tollBoothSystem(vehicleType) {
  switch (vehicleType.toLowerCase()) {
    case "car":
      console.log("Toll Fee: $5");
      break;
    case "truck":
      console.log("Toll Fee: $10");
      break;
    case "bike":
      console.log("Toll Fee: $2");
      break;
    default:
      console.log("Invalid vehicle type! Please enter Car, Truck, or Bike.");
  }
}
// tollBoothSystem("Car");

//Question15:  Music Playlist Controller
function musicController(command) {
  switch (command.toLowerCase()) {
    case "play":
      console.log("Playing the song...");
      break;
    case "pause":
      console.log("Music paused.");
      break;
    case "next":
      console.log("Skipping to the next song...");
      break;
    case "previous":
      console.log("Going back to the previous song...");
      break;
    default:
      console.log(
        "Invalid command! Please use Play, Pause, Next, or Previous."
      );
  }
}
musicController("Play");

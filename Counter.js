document.body.onload = function () {
    var myNumbers = 1;
   
    let counterButton = document.getElementById("counterBtn");
    counterButton.style.backgroundColor = 'yellow';
  
    counterButton.addEventListener("click", function () {
        let Counter = document.getElementById("counter");
        let message = document.getElementById("Message");
        let desscriptions = document.getElementById("description");

        Counter.innerHTML = myNumbers;
        if (myNumbers % 3 == 0 && myNumbers % 5 == 0) {
            message.innerHTML = "Fizz Buzz";
            message.style.color= 'green';
        } else if (myNumbers % 3 == 0) {
            message.style.color= 'green';
            message.innerHTML = "Fizz";
        } else if (myNumbers % 5 == 0) {
            message.style.color= 'green';
            message.innerHTML = "Buzz";
        } else if (myNumbers == 17) {
            desscriptions.innerHTML = "Oops! You've reached your count limit!!"
            desscriptions.style.color = "red";
            desscriptions.style.fontSize = '2rem';
            counterButton.disabled= true;
        }
        else {
            message.style.color= 'blue';
            message.innerHTML = "Go Ahead";

        }
        myNumbers++;

    })
}
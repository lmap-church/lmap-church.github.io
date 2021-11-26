
// timer : String Date function -> undefined
// Place a countdown in id, counting down to countDownDate. When done call expired.
function timer(id, countDownDate, expired) {

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="id"
        document.getElementById(id).innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is finished, call expired
        if (distance < 0) {
            clearInterval(x);
            expired();
        }
    }, 1000);
}

// Function that is run when the time countdown finishes and the tour starts
function startTour() {

    // Activate buttons to start tour by adding the href and removing disabled styles
    journeyLink = document.getElementById("journey-start-btn");
    worldLink = document.getElementById("world-start-btn");

    journeyLink.classList.remove('btn-disabled');
    worldLink.classList.remove('btn-disabled');

    journeyLink.href = "journey_1.html";
    worldLink.href = "world_1.html";
   
    // Remove the countdown and the signup form.
    var countdownDiv = document.getElementById("countdown");
    countdownDiv.remove();

    var signupDiv = document.getElementById("signup");
    signupDiv.remove();

}




function main() {
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 11, 2021 19:00:00").getTime();
    // var countDownDate = new Date("Nov 26, 2021 14:40:00").getTime();

    timer("timer", countDownDate, startTour);

}

main();

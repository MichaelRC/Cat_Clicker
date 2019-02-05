/*Gobal Variables*/

// Take image and store in elem
var elem = document.getElementById('img');
// Take clicker HTML ID and store it in ClickCount
var clickCount = document.getElementById('num_clicks'); 
// Variable to store number of clicks.
var clicks = 0;


/*Click Iteration Function*/
elem.addEventListener('click', function () {
    //Every Click add 1 (clicks = clicks + 1)
    clicks += 1;
    // Apply number of clicks to clickCount ID so number 
    // changeson screen
    clickCount.innerHTML = clicks;
}, false);


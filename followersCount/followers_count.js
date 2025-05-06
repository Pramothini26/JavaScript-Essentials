let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if (count === 10) {
        alert("Your insta reached 10 followers! Congrats");
    }
    else if (count === 20) {
        alert("Your insta reached 20 followers! what an achievement.");
    }
}

function resetCount() {
    count = 0;
    displayCount();
    alert("Count is reset.")
}


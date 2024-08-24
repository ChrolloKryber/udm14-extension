const appendString = '&udm=14';

let a = window.location.href;
if (a.includes(appendString) || a.includes('udm=2') || a.includes('&tbm=')) {
    console.log("You are on a cleaner Google page.")
} else {

    a += appendString;
    window.location.href = a;
}

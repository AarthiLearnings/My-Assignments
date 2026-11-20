//Assignment Details:  
//Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, 
// and `runTests` with `switch` for test type messages.


// Function - launchBrowser using if-else
function launchBrowser(browserName)
{

if (browserName === "FIREFOX") {
    console.log("BROWSER is FIREFOX");
}
else if (browserName === "EDGE") {
    console.log("BROWSER is EDGE");
}
else if (browserName === "CHROME") {
    console.log("BROWSER is CHROME");
}
else {
    console.log("BROWSER is NOT FOUND");
}
}
//Calling the function
launchBrowser("EDGE");

// Function - runTest using SWITCH
function runTest(typeOfTest){
switch (typeOfTest) {
    case "SMOKE":
        console.log("1.SMOKE TEST in progress");
        break;

    case "SANITY":
        console.log("2.SANITY TEST in progress");
        break;

    case "SYSTEM TESTING":
        console.log("3.SYSTEM TEST in progress");
        break;

    case "INTEGRATION TESTING":
        console.log("4.INTEGRATION TEST in progress");
        break;

    case "SIT":
        console.log("5.SYSTEM INTEGRATION TEST in progress");
        break;

    case "UAT":
        console.log("6.USER ACCEPTANCE TEST in progress");
        break;

    default:
        console.log("INvalid Test type")
        }
}
runTest("UAT")
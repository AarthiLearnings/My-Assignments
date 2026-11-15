// Assignment 2 

// Global variable

const browserVersion = "Chrome";

function getBrowserVersion() {

    if (browserVersion == "Chrome") {
        let browserVersion = "Chrome Browser to displayed";
        console.log("Text in the Inside block of If condition and Function:", browserVersion);
    }

    console.log("Text in the Outside block of if condition but inside the Function:", browserVersion);
}

getBrowserVersion();
/* 
// Global variable - program for 'let'
const browserVersion = "Chrome";

function getBrowserVersion() {

    if (browserVersion === "Chrome") {
        let browserVersion = "Chrome Browser to displayed";
    }

    console.log("Text in the Outside block of Function:", browserVersion);
}

getBrowserVersion(); */




const fs = require("fs");
const assert = require("assert");

const html = fs.readFileSync("index.html", "utf8");

console.log("Starting HTML form tests...");

assert(/<form\b[^>]*>/i.test(html),
    "FAIL: Form is missing");
console.log("PASS: Form exists");

assert(/<input\b[^>]*\bname=["']name["']/i.test(html),
    "FAIL: Name field is missing");
console.log("PASS: Name field exists");

assert(/<input\b[^>]*\btype=["']email["']/i.test(html),
    "FAIL: Email field is missing");
console.log("PASS: Email field exists");

assert(/<input\b[^>]*\bname=["']contact["']/i.test(html),
    "FAIL: Contact Number field is missing");
console.log("PASS: Contact Number field exists");

assert(/<button\b[^>]*\btype=["']submit["']/i.test(html),
    "FAIL: Submit button is missing");
console.log("PASS: Submit button exists");

console.log("All tests passed successfully!");

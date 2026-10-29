
const downloadBtn = document.getElementById("downloadBtn");
const printBtn = document.getElementById("printBtn");

// Download Resume button
downloadBtn.addEventListener("click", function () {
    window.print();
});

// Print / Save as PDF button
printBtn.addEventListener("click", function () {
    window.print();
});

// Change browser tab title for printing
window.addEventListener("beforeprint", function () {
    document.title = "SAP-MM-Fresher-Resume";
});

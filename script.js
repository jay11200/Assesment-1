function updateForm() {
    var bookingType = document.getElementById("bookingType").value;
    var dateField = document.getElementById("dateField");
    var timeField = document.getElementById("timeField");
    var slotField = document.getElementById("slotField");

    if (bookingType === "fullDay") {
        dateField.style.display = "block";
        timeField.style.display = "none";
        slotField.style.display = "none";
    } else if (bookingType === "halfDay") {
        dateField.style.display = "block";
        slotField.style.display = "block";
        timeField.style.display = "none";
    } else if (bookingType === "hourly") {
        dateField.style.display = "block";
        timeField.style.display = "block";
        slotField.style.display = "none";
    } else {
        dateField.style.display = "none";
        timeField.style.display = "none";
        slotField.style.display = "none";
    }
}

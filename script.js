document.getElementById("calculate").addEventListener("click", function() {
    // Get input values
    const distance = parseFloat(document.getElementById("input-distance").value);
    const time = document.getElementById("input-time").value;

    // Validate inputs
    if (isNaN(distance) || distance <= 0) {
        alert("Please enter a valid distance.");
        return;
    }

    // Validate time format (hh:mm:ss)
    const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/;
    if (!timeRegex.test(time)) {
        alert("Please enter a valid time in hh:mm:ss format.");
        return;
    }

    // Parse the time input into hours, minutes, and seconds
    const timeParts = time.split(":");
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    const seconds = parseInt(timeParts[2]);

    // Convert the time to total minutes 
    const totalTimeInMinutes = hours * 60 + minutes + seconds / 60;

    // Calculate the pace (minutes per km)
    const paceInMinutes = totalTimeInMinutes / distance;

    // Convert the pace to minutes and seconds format
    const paceMinutes = Math.floor(paceInMinutes); // Get whole minutes
    const paceSeconds = Math.round((paceInMinutes - paceMinutes) * 60); 

    // Calculate the treadmill speed (km/h)
    const speed = distance / (totalTimeInMinutes / 60);

    // Display the results in the corresponding display fields
    document.getElementById("calculated-pace-display").value = `${paceMinutes}:${paceSeconds < 10 ? '0' : ''}${paceSeconds}` + " /km"; 
    document.getElementById("calculated-speed-display").value = speed.toFixed(2) + " km/h";
});

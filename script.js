// Create a new Accelerometer object with a sampling frequency of 60 Hz
const acl = new Accelerometer({ frequency: 60 });

// Add an event listener for the "reading" event
acl.addEventListener("reading", () => {
  // Log accelerometer data along the X-axis, Y-axis, and Z-axis
  console.log(`Acceleration along the X-axis: ${acl.x}`);
  console.log(`Acceleration along the Y-axis: ${acl.y}`);
  console.log(`Acceleration along the Z-axis: ${acl.z}`);

  // Display accelerometer data in a div
  const accelerometerDataDiv = document.getElementById("accelerometerData");
  accelerometerDataDiv.innerHTML = `
    <p>Acceleration along the X-axis: ${acl.x}</p>
    <p>Acceleration along the Y-axis: ${acl.y}</p>
    <p>Acceleration along the Z-axis: ${acl.z}</p>
  `;
});

// Start reading accelerometer data
acl.start();

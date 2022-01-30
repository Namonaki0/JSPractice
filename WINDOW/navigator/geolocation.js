if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showLocation);
} else {
  console.log("NO LOCATION AVAILABLE");
}

function showLocation(position) {
  console.log(
    `THIS IS YOUR CURRENT POSITION --> LATITUDE: ${position.coords.latitude}, LONGITUDE: ${position.coords.longitude}`
  );
}

//* "THIS IS YOUR CURRENT POSITION --> LATITUDE: [-----], LONGITUDE: [-----]"

// -----------------------------------------------

//? The geolocation property returns a Geolocation object that can be used to locate the user's position.
//? The geolocation property is read-only.
//? The geolocation property is only available in secure contexts (HTTPS).
//? The geolocation property is only available if the user approves it.

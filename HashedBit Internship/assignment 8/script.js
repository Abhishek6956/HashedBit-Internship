const movies = [
  { id: 1, title: "Housefull 5", image: "Housefull.jpg" },
  { id: 2, title: "Dunki", image: "Dunki.jpg" },
  { id: 3, title: "The Bhootni", image: "Bhootni.jpg" },
  { id: 4, title: "Raid 2", image: "Raid2.jpg" },
  { id: 5, title: "Fateh", image: "Fateh.jpg" },
  { id: 6, title: "URI", image: "URI.jpg" },
  { id: 7, title: "Chandu Champion", image: "Champion.jpg" },
  { id: 8, title: "Laapataa Ladies", image: "Laapataa.jpg" } // extra movie to fill grid
];

let selectedMovie = null;
let userDetails = {};

const app = document.getElementById("app");

function showMovieList() {
  app.innerHTML = "<h2>Select a Movie</h2><div class='grid'></div>";
  const grid = app.querySelector(".grid");

  movies.forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie-card";
    div.innerHTML = `
      <img src="${movie.image}" />
      <h3>${movie.title}</h3>
      <button onclick="showMovieDetails(${movie.id})">View Details</button>
    `;
    grid.appendChild(div);
  });
}

function showMovieDetails(id) {
  selectedMovie = movies.find(m => m.id === id);
  app.innerHTML = `
    <div class="details">
      <h2>${selectedMovie.title}</h2>
      <img src="${selectedMovie.image}" style="width:200px" />
      <p>Some details about the movie...</p>
      <button onclick="showBookingForm()">Book Seat</button>
      <button onclick="showMovieList()">Back</button>
    </div>
  `;
}

function showBookingForm() {
  app.innerHTML = `
    <div class="form">
      <h2>Book Seat for ${selectedMovie.title}</h2>
      <input id="name" type="text" placeholder="Your Name" required />
      <input id="email" type="email" placeholder="Email" @gmail.com required />
      <input id="mobile" type="tel" placeholder="Mobile" required />
      <button onclick="submitBooking()">Submit</button>
    </div>
  `;
}

function submitBooking() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  if (!name || !email || !mobile) {
    alert("Please fill all fields!");
    return;
  }

  userDetails = { name, email, mobile };
  showConfirmation();
}

function showConfirmation() {
  const bookingId = Math.floor(Math.random() * 1000000);
  app.innerHTML = `
    <div class="confirmation">
      <h2>Seat Booked Successfully!</h2>
      <p><strong>Booking ID:</strong> ${bookingId}</p>
      <p><strong>Name:</strong> ${userDetails.name}</p>
      <p><strong>Email:</strong> ${userDetails.email}</p>
      <p><strong>Mobile:</strong> ${userDetails.mobile}</p>
      <button onclick="showMovieList()">Back to Movies</button>
    </div>
  `;
}

// Initial Page Load
showMovieList();
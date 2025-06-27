const API_URL = "https://my-json-server.typicode.com/FreSauce/json-ipl/data";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    // Sort by NRR ascending
    data.sort((a, b) => a.NRR - b.NRR);

    const tbody = document.getElementById("table-body");
    tbody.innerHTML = ""; // Clear existing rows

    data.forEach(team => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${team.No}</td>
        <td>${team.Team}</td>
        <td>${team.Matches}</td>
        <td>${team.Won}</td>
        <td>${team.Lost}</td>
        <td>${team.Tied}</td>
        <td>${team.Points}</td>
        <td>${team.NRR.toFixed(3)}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Failed to fetch data:", error);
    document.getElementById("table-body").innerHTML = `
      <tr><td colspan="8">Unable to load data. Try again later.</td></tr>
    `;
  });

const resultsData = [
  {
    psid: "PSID001",
    rollNumber: "ROLL001",
    name: "Ayesha Khan",
    exam: "KK Aptitude Test",
    score: 88,
    status: "Passed"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("resultForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const psid = document.getElementById("psid").value.trim();
    const roll = document.getElementById("rollNumber").value.trim();
    const output = document.getElementById("resultOutput");

    const result = resultsData.find(
      (student) => student.psid === psid && student.rollNumber === roll
    );

    if (result) {
      output.innerHTML = `
        <div class="bg-white p-4 rounded-md shadow">
          <p><strong>Name:</strong> ${result.name}</p>
          <p><strong>Exam:</strong> ${result.exam}</p>
          <p><strong>Score:</strong> ${result.score}%</p>
          <p><strong>Status:</strong> 
            <span class="${result.status === 'Passed' ? 'text-green-600' : 'text-yellow-600'} font-semibold">${result.status}</span>
          </p>
        </div>
      `;
    } else {
      output.innerHTML = `<p class="text-red-600">No result found for this PSID and Roll Number.</p>`;
    }

    output.classList.remove("hidden");
  });
});

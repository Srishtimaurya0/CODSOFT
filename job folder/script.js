// Select elements
const jobForm = document.getElementById("jobForm");
const jobsContainer = document.getElementById("jobs");
const searchInput = document.getElementById("searchInput");

// Job array to store jobs
let jobs = [];

// Render jobs
function renderJobs(filteredJobs = jobs) {
  jobsContainer.innerHTML = ""; // Clear previous job listings

  filteredJobs.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";

    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p>${job.description}</p>
    `;

    jobsContainer.appendChild(jobCard);
  });
}

// Add job event listener
jobForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const title = document.getElementById("jobTitle").value;
  const company = document.getElementById("companyName").value;
  const location = document.getElementById("location").value;
  const description = document.getElementById("jobDescription").value;

  // Create job object
  const newJob = { title, company, location, description };

  // Add job to jobs array
  jobs.push(newJob);

  // Render jobs
  renderJobs();

  // Clear form
  jobForm.reset();
});

// Search functionality
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm)
  );

  renderJobs(filteredJobs);
});

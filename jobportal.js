const jobs = [
    {
      title: "Software Engineer",
      image: "https://media.licdn.com/dms/image/D4E12AQEnNKiiNUKz9Q/article-cover_image-shrink_720_1280/0/1693476739453?e=2147483647&v=beta&t=vA7q5Jo23C2UXQE4FQ3lTlpB7ugmZa5QZzAfSQ5rQ-A",
      details:
        "Responsible for designing, developing and maintaining software systems and applications.",
        openPositions: "2",
      link: "#",
    },
  
    {
      title: "Data Scientist",
      image: "https://abctrainings.in/media/thumbnails/data-science.jpg",
      details:
        "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
      openPositions: "3",
      link: "#",
    },
  
    {
      title: "Project Manager",
      image: "https://thumbs.dreamstime.com/b/project-management-word-cloud-business-concept-57175390.jpg",
      details:
        "Responsible for planning, executing and closing projects on time and within budget.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Product Manager",
      image: "https://www.questionpro.com/blog/wp-content/uploads/2023/02/product-management.jpg",
      details:
        "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Sales Representative",
      image: "https://i.ytimg.com/vi/djCqF8mdnoA/maxresdefault.jpg",
      details:
        "Responsible for reaching out to potential customers and closing sales deals.",
      openPositions: "4",
      link: "#",
    },
  
    {
      title: "Marketing Manager",
      image: "https://lumen5.com/learn/wp-content/uploads/2019/06/The-Ultimate-Marketing-Manager-Guide.jpg",
      details:
        "Responsible for creating and executing marketing strategies to promote a company or product.",
      openPositions: "1",
      link: "#",
    },
  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  const jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";
  
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
  }
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
  
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");
  
        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "More Details";
        detailsBtn.classList.add("details-btn");
  
        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
  
        if (job.openPositions == 1) {
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;
        }
  
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });
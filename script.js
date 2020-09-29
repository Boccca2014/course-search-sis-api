// sample schools
schools = [
  {
    Name: "School of Medicine",
  },
  {
    Name: "Whiting School of Engineering",
  },
];

// sample terms
terms = [
  {
    Name: "Fall 2020",
  },
  {
    Name: "Summer 2020",
  },
  {
    Name: "Spring 2020",
  },
];

// sample courses
// (SIS returns provides several other properties for a course)
courses = [
  {
    OfferingName: "EN.601.226",
    SectionName: "01",
    Title: "Data Structures",
    Instructors: "A. Madooei",
  },
  {
    OfferingName: "EN.601.226",
    SectionName: "02",
    Title: "Data Structures",
    Instructors: "A. Madooei",
  },
  {
    OfferingName: "EN.601.280",
    SectionName: "01",
    Title: "Full-Stack JavaScript",
    Instructors: "A. Madooei",
  },
  {
    OfferingName: "EN.601.280",
    SectionName: "02",
    Title: "Full-Stack JavaScript",
    Instructors: "A. Madooei",
  },
];

function populateSelector(selectElmId, data) {
  const select = document.getElementById(selectElmId);
  select.innerHTML = "";
  let item = null;
  for (let i = 0; i < data.length; i++) {
    item = document.createElement("option");
    item.value = data[i]["Name"];
    item.innerText = data[i]["Name"];
    select.appendChild(item);
  }
}

populateSelector("schools", schools);
populateSelector("terms", terms);

function search() {
  const query = document.getElementById("query").value.trim();
  const school = document.getElementById("schools").value;
  const term = document.getElementById("terms").value;

  fetch(
    `https://sis.jhu.edu/api/classes?key=${key}&School=${school}&Term=${term}&CourseTitle=${query}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => showSearchResults(data))
    .catch((error) => console.log("error", error));
}

document.getElementById("searchBtn").addEventListener("click", search);

function showSearchResults(data) {
  const resultDiv = document.querySelector(".result");
  resultDiv.innerHTML = "";
  const list = document.createElement("ul");
  list.className = "list-group";
  for (let i = 0; i < data.length; i++) {
    const item = document.createElement("li");
    item.className = "list-group-item";
    item.innerText = `${data[i]["OfferingName"]} (${data[i]["SectionName"]}) ${data[i]["Title"]}`;
    list.append(item);
  }
  resultDiv.append(list);
}

const key = "USE_YOUR_KEY"; // trrible practice!
// should never save API key directly in source code
// in particular when it can potentily be seen by users

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  `https://sis.jhu.edu/api/classes/codes/schools?key=${key}`,
  requestOptions
)
  .then((response) => response.json())
  .then((data) => populateSelector("schools", data))
  .catch((error) => console.log("error", error));

fetch(`https://sis.jhu.edu/api/classes/codes/terms?key=${key}`, requestOptions)
  .then((response) => response.json())
  .then((data) => populateSelector("terms", data))
  .catch((error) => console.log("error", error));

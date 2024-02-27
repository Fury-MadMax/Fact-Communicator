const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";

loadFacts();

async function loadFacts() {
  const res = await fetch("https://yrvfkqwdtwegnrqylbtk.supabase.co/rest/v1/facts", 
  {
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlydmZrcXdkdHdlZ25ycXlsYnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NzU1NTQsImV4cCI6MjAxNTU1MTU1NH0.5mCBLXgbKOeLhSSqH4-8fEv1M4YnLO3k1ff-EhIZ29o",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlydmZrcXdkdHdlZ25ycXlsYnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NzU1NTQsImV4cCI6MjAxNTU1MTU1NH0.5mCBLXgbKOeLhSSqH4-8fEv1M4YnLO3k1ff-EhIZ29o",
    },
  }
  );
  const data = await res.json();
  const filteredData=data.filter((el => el.category === "society"));
  createFactsList(filteredData);
}

createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
        <p>${fact.text}
            <a class="source" href="${fact.source}" target="_blank">(Source)</a>
        </p>
        <span class="tag" style="background-color: #3b82f6">${fact.category}</span>
        </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// const calcFactAge2 = (year) => 2022 - year;
// console.log(calcFactAge2(2015));

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

// //using map function
// const multi = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });
// console.log(multi);

// //using arrow function
// const multii = [2, 4, 6, 8].map((el) => el * 10);
// console.log(multii);

console.log([7,8,9,65,90].filter((el) => el > 10));

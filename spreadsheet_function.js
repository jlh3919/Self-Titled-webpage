const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const overall = document.getElementById("overall");
const spreadsheet = document.getElementById("spreadsheet");

daily.addEventListener("click", function () {
    daily.classList.add("active");
    weekly.classList.remove("active");
    overall.classList.remove("active");
    spreadsheet.src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSGUZQ22yZj6EzAWfRlcRmJrdZFMbebBFNOrU0uUZbv4AYVZfl0CT10CT2tWYhUKcxRleUOUaTRn_sO/pubhtml?gid=1420979174&amp;single=true&amp;widget=true&amp;headers=false";
});

weekly.addEventListener("click", function () {
    daily.classList.remove("active");
    weekly.classList.add("active");
    overall.classList.remove("active");
    spreadsheet.src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSGUZQ22yZj6EzAWfRlcRmJrdZFMbebBFNOrU0uUZbv4AYVZfl0CT10CT2tWYhUKcxRleUOUaTRn_sO/pubhtml?gid=1655819020&amp;single=true&amp;widget=true&amp;headers=false";
});

overall.addEventListener("click", function () {
    daily.classList.remove("active");
    weekly.classList.remove("active");
    overall.classList.add("active");
    spreadsheet.src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSGUZQ22yZj6EzAWfRlcRmJrdZFMbebBFNOrU0uUZbv4AYVZfl0CT10CT2tWYhUKcxRleUOUaTRn_sO/pubhtml?gid=461222815&amp;single=true&amp;widget=true&amp;headers=false";
});
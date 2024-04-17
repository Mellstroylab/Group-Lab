// JavaScript dosyası
document.getElementById("ageCalculatorForm").addEventListener("submit", function (e) {
    e.preventDefault();
    calculateAge();
});

function calculateAge() {
    const birthDay = parseInt(document.getElementById("day").value);
    const birthMonth = parseInt(document.getElementById("month").value);
    const birthYear = parseInt(document.getElementById("year").value);

    const today = new Date();
    const birthdate = new Date(birthYear, birthMonth - 1, birthDay);

    const ageInMilliseconds = today - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInYears = ageInDays / 365;

    const years = Math.floor(ageInYears);
    const months = Math.floor((ageInYears - years) * 12);
    const days = Math.floor((ageInYears * 365) % 30);

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
}

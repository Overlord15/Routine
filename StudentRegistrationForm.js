const dobday = document.getElementById("day");
for (let i = 1; i <= 31; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  dobday.appendChild(option);
}

const dobmonth = document.getElementById("month");
for (let i = 1; i <= 12; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  dobmonth.appendChild(option);
}

const dobyear = document.getElementById("year");
for (let i = 1900; i <= 2023; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  dobyear.appendChild(option);
}
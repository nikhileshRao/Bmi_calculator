const out1 = document.getElementById("output1");

async function calculateBmi() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  event.preventDefault();
  bmiResponse(weight, height);

  f;
}

// Calculate BMI
async function bmiResponse(weight, height) {
  const response = await fetch(
    "https://floating-plateau-72731.herokuapp.com/api",
    {
      method: "POST",

      body: JSON.stringify({
        weightInKg: parseInt(weight),
        heightInCm: parseInt(height),
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.result);
      let answer = data.result;

      if (answer < 15) {
        displayUnderweight(answer);
      } else if (answer > 25) {
        displayOverweight(answer);
      } else if (answer >= 15 && answer <= 25) {
        displayNormal(answer);
      } else {
        out1.innerHTML = "Error";
      }
    });
}

// Underweight display
function displayUnderweight(answer) {
  out1.classList.add("outputyellow");
  out1.classList.remove("outputred", "outputwhite");
  out1.innerHTML = "Your BMI is " + answer + "<br/>" + "Under-weight";
}

// overweight display
function displayOverweight(answer) {
  out1.classList.add("outputred");
  out1.classList.remove("outputyellow", "outputwhite");
  out1.innerHTML = "Your BMI is " + answer + "<br/>" + "Over-weight";
}

// Normal
function displayNormal(answer) {
  out1.classList.add("outputwhite");
  out1.classList.remove("outputred", "outputyellow");
  out1.innerHTML = "Your BMI is " + answer + "<br/>" + "Normal Weight";
}

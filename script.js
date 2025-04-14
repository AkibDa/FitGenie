document.getElementById("fitnessForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting and reloading

  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const illness = document.getElementById("illness").value;

  // Store data in localStorage to pass to the results page
  localStorage.setItem("age", age);
  localStorage.setItem("weight", weight);
  localStorage.setItem("height", height);
  localStorage.setItem("illness", illness);

  // Hide form and show results section
  document.getElementById("form-section").style.display = "none";
  document.getElementById("exerciseResults").style.display = "flex";

  // Generate exercise recommendations based on the user's input
  let exercises = [
      { name: "Cardio (Running, Cycling)" },
      { name: "Strength Training (Weight Lifting)" },
      { name: "Yoga & Stretching"  },
      { name: "HIIT (High-Intensity Interval Training)" },
      { name: "Swimming"}
  ];

  // Filter exercises based on illness
  if (illness === "hypertension") {
      exercises = exercises.filter(ex => ex.name !== "HIIT (High-Intensity Interval Training)");
  } else if (illness === "heart_disease") {
      exercises = exercises.filter(ex => ex.name !== "Strength Training (Weight Lifting)" && ex.name !== "HIIT (High-Intensity Interval Training)");
  }

  // Insert exercises into the results page
  exercises.forEach(exercise => {
      const div = document.createElement("div");
      div.classList.add("exercise-item");

      div.innerHTML = `
          <h3>${exercise.name}</h3>
      `;

      document.getElementById("exerciseResults").appendChild(div);
  });
});
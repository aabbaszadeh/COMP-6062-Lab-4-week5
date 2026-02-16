// 1) Select: get reference using getElementById (طبق دستور)
const topicSelect = document.getElementById("topicSelect");

// Checkbox container (برای hide/show)
const extraBox = document.getElementById("extraBox");

// Event handler for select change
topicSelect.addEventListener("change", function () {
  // وقتی گزینه "special" انتخاب شد checkbox رو نشون بده
  if (topicSelect.value === "special") {
    extraBox.classList.remove("hidden");
  } else {
    // در غیر این صورت مخفی کن
    extraBox.classList.add("hidden");
  }
});

// 2) Text input: reference + keydown handler
const textInput = document.getElementById("textInput");

textInput.addEventListener("keydown", function (event) {
  // اگر Enter زده شد
  if (event.key === "Enter") {
    alert("Enter key was pressed!");
  }
});

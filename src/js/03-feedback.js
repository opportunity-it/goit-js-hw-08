import { refs } from "./refs";

const feedbackEl = {};

refs.form.addEventListener('input', onSaveForm);
function onSaveForm({ target }) {
  const { name, value } = target
  
  feedbackEl[name] = value  
  console.log(feedbackEl);
    //  console.log(value)
}



// // Отримайте посилання на елементи форми
// const emailInput = form.elements.email;
// const messageInput = form.elements.message;

// // Отримайте збережені дані з локального сховища при завантаженні сторінки
// const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));

// // Заповніть поля форми збереженими даними або залиште їх порожніми
// emailInput.value = savedData ? savedData.email : "";
// messageInput.value = savedData ? savedData.message : "";

// // Встановіть обробник події "input" на форму з використанням throttle
// form.addEventListener("input", throttle(saveFormData, 500));

// // Збереження даних форми у локальне сховище
// function saveFormData() {
//   const formData = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };

//   localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// }

// // Обробник події "submit" для форми
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   // Очищення локального сховища та полів форми
//   localStorage.removeItem("feedback-form-state");
//   emailInput.value = "";
//   messageInput.value = "";

//   // Виведення даних форми у консоль
//   console.log("Form Data:", {
//     email: emailInput.value,
//     message: messageInput.value,
//   });
// });

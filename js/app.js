const btn_advise = document.querySelector("#advise-btn");
const id_advise = document.querySelector("#advise-id");
const text_advise = document.querySelector("#advise-text");
btn_advise.addEventListener("click", () => {
    async function getTodos() {
        try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      console.log(data);
      id_advise.textContent = data.slip.id;
      text_advise.textContent = data.slip.advice;
    } catch (error) {
      alert(error);
    }
  }
  getTodos();
});

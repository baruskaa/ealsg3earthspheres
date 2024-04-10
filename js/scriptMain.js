//--HOMEPAGE--//

const trigger = document.querySelector(".trigger");
const wrapper = document.querySelector(".wrapper");

function handleTrigger() {
  wrapper.classList.remove("hide");
}

function handleWrapper() {
  wrapper.classList.add("hide");
}

trigger.addEventListener("mouseenter", handleTrigger);
wrapper.addEventListener("click", handleWrapper);

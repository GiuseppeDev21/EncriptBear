const btnEncript = document.querySelector("#btn__1");
const btnDesencript = document.querySelector("#btn__2");
const btnCopy = document.querySelector("#btn__copy");

btnEncript.addEventListener("click", () => {
  checker("encripter");
});
btnDesencript.addEventListener("click", () => {
  checker("desencripter");
});
btnCopy.addEventListener("click", () => {
  copy();
});

const checker = (type) => {
  const letterNumbers = /^[a-z0-9\s]*$/;
  const text__1 = document.getElementById("text__1").value.toLowerCase();
  const text__2 = document.querySelector('.text__2');
  const verify = letterNumbers.test(text__1);
  const containerNonResult = document.querySelector(".container__nonResult");
  if (!verify) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se aceptan letras acentuadas, ni carácteres especiales",
    });
  }
  if (text__1 === "") {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se puede convertir un texto vacio",
    });
  }
  containerNonResult.style.display = 'none';
  if(window.innerWidth <= 820 ){
    const containerResuslt = document.querySelector('#container__result');
    containerResuslt.classList.replace("container__result", "container__resultMobile");
    btnCopy.classList.replace("btn__copy", "btn__copyMobile");
  }
  text__2.style.display = 'inherit';
  let result = type === "encripter" ? encript(text__1) : desencript(text__1);
  text__2.innerHTML = result;
};

const encript = (text) => {
  let newText = "";
  for (let index = 0; index < text.length; index++) {
    switch (text[index]) {
      case "a":
        newText = `${newText + "ai"}`;
        break;
      case "e":
        newText = `${newText + "enter"}`;
        break;
      case "i":
        newText = `${newText + "imes"}`;
        break;
      case "o":
        newText = `${newText + "ober"}`;
        break;
      case "u":
        newText = `${newText + "ufat"}`;
        break;
      default:
        newText = `${newText + text[index]}`;
        break;
    }
  }
  Swal.fire({
    icon: "success",
    title: "ENCRIPTBEAR",
    text: "Texto encriptado",
  })
  return newText;
};

const desencript = (text) => {
  let newText = "";
  let index = 0;
  while (index < text.length) {
    if (text.slice(index, index + 2) === "ai") {
      index += 2;
      newText += "a";
    } else if (text.slice(index, index + 5) === "enter") {
      index += 5;
      newText += "e";
    } else if (text.slice(index, index + 4) === "imes") {
      index += 4;
      newText += "i";
    } else if (text.slice(index, index + 4) === "ober") {
      index += 4;
      newText += "o";
    } else if (text.slice(index, index + 4) === "ufat") {
      index += 4;
      newText += "u";
    } else {
      newText += text[index];
      index++;
    }
  }
  Swal.fire({
    icon: "success",
    title: "DESENCRIPTBEAR",
    text: "Texto desencriptado",
  });  
  return newText;
};

const copy = () => {
  const text__2 = document.getElementById("text__2");
  if (text__2.value === "") {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se puede copiar un texto vacio",
    });
  }
  text__2.select();
  document.execCommand("copy");
  text__2.blur();
  return Swal.fire({
    icon: "success",
    title: "COPYBEAR",
    text: "texto copiado con éxito!!!",
  });
};
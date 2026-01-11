const display = document.getElementById("display");
const buttonscontainer = document.getElementById("buttons");

buttonscontainer.addEventListener("click", function (event) {

    if (event.target.tagName !== "BUTTON") return;

    let value = event.target.innerText;

    // Convert UI symbols to JS operators
    if (value === "X") value = "*";
    if (value === "÷") value = "/";

    if (value === "C") {
        display.value = "";
    }
    else if (value === "DEL") {
        display.value = display.value.slice(0, -1);
    }
    else if (value === "=") {
        try {
            display.value = eval(display.value);
        }
        catch {
            display.value = "Error";
        }
    }
    else {
        display.value += value;
    }
});

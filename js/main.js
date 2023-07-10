let discountCodes = ["test", "YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function submitForm(event) {
    event.preventDefault();
    console.log("test");
    let userHours = document.getElementById("inputHours").value;
    let typeWork = document.getElementById("inputWork").value;
    let userDiscount = document.getElementById("inputCode").value;

    let price;
    if (typeWork == "backend") {
        price = userHours * 20.5;
    } else if (typeWork == "frontend") {
        price = userHours * 15.3;
    } else if (typeWork == "analysis") {
        price = userHours * 33.6;
    }

    if (discountCodes.includes(userDiscount)) {
        price = price / 100 * 75;
    }

    console.log(price);
}
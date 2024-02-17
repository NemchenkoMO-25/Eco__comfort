function check() {
    let data = document.getElementsByClassName("inp");
    for (let el of data) {
        if (el.value == "") {
            alert("Не все поля заполнены!");
            break;
        }
    }
}
function onlynumbers(phone) {
    let Str = phone.value;
    Str = Str.replace(/\D/g, "");
    phone.value = "+" + Str;
}

var modal = document.getElementById('myModal'); // объявляем переменную modal которая будет принимать значения нашего элемента с  индификатора с myModal
var btn = document.getElementById("myBtn"); // принимает значение кнопки 
var span = document.getElementsByClassName("close")[0]; //получает значения класса close

btn.onclick = function () { //вызов функции при клике на кнопку
    modal.style.display = "block"; //придает значение блок
}
span.onclick = function () {
    modal.style.display = "none" // не показывает элемент 
}

window.onclick = function (event) { //функция при нажатий на область вокруг кнопки модального окна
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
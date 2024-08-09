document.addEventListener('DOMContentLoaded', function () {
    const datetime = document.getElementById('datetime');
    const dataForm = document.getElementById('dataForm');
    const dataList = document.getElementById('dataList');

    // Mostrar la fecha y hora actual
 

    // Guardar datos
    dataForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            addDataToList(name, email);
            dataForm.reset();
        }
    });

    // Agregar datos a la lista
    function addDataToList(name, email) {
        const li = document.createElement('li');
        li.innerHTML = `${name} - ${email} <button class="delete">Eliminar</button>`;
        dataList.appendChild(li);

        // Eliminar datos
        li.querySelector('.delete').addEventListener('click', function () {
            dataList.removeChild(li);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dynamicForm');
    const addInputButton = document.getElementById('addInput');
    const inputContainer = document.getElementById('inputContainer');
    const message = document.getElementById('message');

    addInputButton.addEventListener('click', function() {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        inputGroup.innerHTML = `
            <input type="text" class="form-control mb-2" name="inputField[]" placeholder="Ingrese un valor">
            <button type="button" class="btn btn-danger mb-2" onclick="removeInput(this)">Eliminar</button>
        `;
        inputContainer.appendChild(inputGroup);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = true;
        message.textContent = '';
        message.className = '';
        
        const inputs = document.querySelectorAll('input[name="inputField[]"]');
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                valid = false;
                input.classList.add('is-invalid');
                input.focus();
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (valid) {
            message.textContent = 'Datos enviados correctamente';
            message.classList.add('text-success');
            form.reset();
            inputContainer.innerHTML = `
                <div class="input-group">
                    <input type="text" class="form-control mb-2" name="inputField[]" placeholder="Ingrese un valor">
                    <button type="button" class="btn btn-danger mb-2" onclick="removeInput(this)">Eliminar</button>
                </div>
            `;
        } else {
            message.textContent = '¡Alerta! Rellene los campos obligatorios';
            message.classList.add('text-danger');
        }
    });
});

function removeInput(button) {
    const inputGroup = button.parentElement;
    inputGroup.remove();
}

let options = document.querySelectorAll('.option');
let selectedPayment = document.getElementById('selected-payment');

let methods = document.querySelectorAll('.title-method');
let selectedMethod = document.getElementById('selected-method');

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function () {
        for (let i = 0; i < options.length; i++) {
            options[i].classList.remove('active-option');
        }

        this.classList.add('active-option');
        selectedPayment.innerHTML = this.getAttribute('data-name');
    });
}

for (let i = 0; i < methods.length; i++) {
    methods[i].addEventListener('click', function () {
        for (let i = 0; i < methods.length; i++) {
            methods[i].classList.remove('active-method');
        }

        this.classList.add('active-method');
        selectedMethod.innerHTML = this.getAttribute('data-method');
    });
}

export function formOpen() {
    let openFormButton = document.querySelector('.arrow-down');
    if (openFormButton) {
        openFormButton.addEventListener('click', (e) => {
            e.preventDefault();
            DARKNESS.form.open();
        })
    }
};

export function formEvents() {
    var formEvent = {};
    let form = document.querySelector('.form-container');
    let closeButton = null;

    let onClose = () => {
        formEvent.close();
        closeButton.removeEventListener('click', onClose);
    };

    formEvent.open = () => {
        form.classList.remove('is-hidden');
        closeButton = document.querySelector('.form_close-button');
        closeButton.addEventListener('click', onClose);
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if (keyName === 'Escape') {
                onClose();
            }
        });
    };

    formEvent.close = () => {
        form.classList.add('is-hidden');
    };

    formEvent.isAllCompleted = (data) => {
        let result = true;
        for (let i = 0; i < data.length; i++) {
            if (!DARKNESS.validation.isNotEmpty(data[i].value)) {
                result = false;
                break;
            }
        }
        return result;
    };

    formEvent.isValid = () => {
        let requiredFields = document.querySelectorAll('[data-valid="required"]');
        let emailValue = document.querySelector('[data-email]').value;
        let numberValue = document.querySelector('[data-number]').value;

        if (!formEvent.isAllCompleted(requiredFields)) {
            return false;
        } else if (!DARKNESS.validation.isEmail(emailValue)) {
            console.log('Error Email');
            return false;
        } else if (!DARKNESS.validation.isNumber(numberValue)) {
            console.log('Error Number');
            return false;
        }
        return true;
    };

    DARKNESS.form = formEvent;
 };



export function formValidRegExp() {
    var validEvent = {};

    validEvent.isEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    validEvent.isNumber = (number) => {
        let re = /^\d+$/;
        return re.test(number);
    };
    validEvent.isNotEmpty = (str) => {
        return Boolean(str);
    };

    DARKNESS.validation = validEvent;
};

export function formSubmit() {
    let submitFormButton = document.querySelector('.form');

    if (submitFormButton) {
        submitFormButton.addEventListener('submit', (e) => {
            e.preventDefault();
            if (DARKNESS.form.isValid()) {
                console.log('All good');
            } else {
                console.log('Not good');
            }
        });
    }
};
const form = document.getElementById('form');
const firstName = document.getElementById('name');
const surname = document.getElementById('surname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', element => {
    element.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const nameValue = firstName.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();


    if(nameValue === '') {
        setError(firstName, 'Name is required');
    }
    else if (nameValue.length < 3) {
        setError(firstName, 'Name  must be minimum 3 character')
    }
    else {
        setSuccess(firstName);
    }
    if(surnameValue === '') {
        setError(surname, 'Surname is required');
    }
    else if (surnameValue.length < 3) {
        setError(surname, 'Surname must be minimum 3 character')
    } 
    else {
        setSuccess(surname);
    }

    if(phoneValue === '') {
        setError(phone, 'Phone is required');
    }
    else if (phone.length=!7) {
        setError(phone, 'Phone is not correct');
    }
    else {
        setSuccess(phone);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!emailValue.includes("@")) {
        setError(email, 'Please write your email');
    } else {
        setSuccess(email);
    }



    if(passwordValue === '') {
        setError(password, 'Password is required');
    } 
    else if (passwordValue.length = 7 ) {
        let capitalLetter= ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
        let smallLetter= ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
        if ((passwordValue.includes("Q")||passwordValue.includes("W")||passwordValue.includes("E")||passwordValue.includes("R")||passwordValue.includes("T")||passwordValue.includes("Y")||passwordValue.includes("U")||passwordValue.includes("I")||passwordValue.includes("O")||passwordValue.includes("P")||passwordValue.includes("A")||passwordValue.includes("S")||passwordValue.includes("D")||passwordValue.includes("F")||passwordValue.includes("G")||passwordValue.includes("H")||passwordValue.includes("J")||passwordValue.includes("K")||passwordValue.includes("L")||passwordValue.includes("Z")||passwordValue.includes("X")||passwordValue.includes("C")||passwordValue.includes("V")||passwordValue.includes("B")||passwordValue.includes("N")||passwordValue.includes("M"))&&(passwordValue.includes("q")||passwordValue.includes("w")||passwordValue.includes("e")||passwordValue.includes("r")||passwordValue.includes("t")||passwordValue.includes("y")||passwordValue.includes("u")||passwordValue.includes("i")||passwordValue.includes("o")||passwordValue.includes("p")||passwordValue.includes("a")||passwordValue.includes("s")||passwordValue.includes("d")||passwordValue.includes("f")||passwordValue.includes("g")||passwordValue.includes("h")||passwordValue.includes("j")||passwordValue.includes("k")||passwordValue.includes("l")||passwordValue.includes("z")||passwordValue.includes("x")||passwordValue.includes("c")||passwordValue.includes("v")||passwordValue.includes("b")||passwordValue.includes("n")||passwordValue.includes("m"))){
            setSuccess(password);
        }
        else{
            setError(password, 'Password must contain minimum 1 capital and small letter');
        }
    } 
    else {
        setError(password, 'Password must be 7 character');
    }

};

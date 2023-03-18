const validasiUsername = document.getElementById('input-username')
const validasiPassword = document.getElementById('input-password')
const validasiAge = document.getElementById('input-age')
const validasiNIM = document.getElementById('input-nim')
const validasiEmail = document.getElementById('input-email')

const myUsername = document.getElementById('username-text')
const myPassword = document.getElementById('password-text')
const myAge = document.getElementById('age-text')
const myNIM = document.getElementById('nim-text')
const myEmail = document.getElementById('email-text')

//Username
const checkUsername = (value) => {
    const regex = /^[a-zA-Z0-9]{8,12}$/
    const isUsername = regex.test(value)
    if (isUsername) {
        return true
    } else {
        return false
    }
}

validasiUsername.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isUsername = checkUsername(value)
    if (value.length <= 8) {
        if (isUsername) {
            myUsername.innerHTML = "<span style='color: green;'>Valid username.</span>"
        } else {
            myUsername.innerHTML = "<span style='color: red;'>Username contains at least 8 characters.</span>"
        }
    }
})

//NIM
const checkNIM = (value) => {
    const regex = /^[0-9]{9,11}$/
    const isNIM = regex.test(value)
    if (isNIM) {
        return true
    } else {
        return false
    }
}

validasiNIM.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isNIM = checkNIM(value)
    if (value.length <= 9) {
        if (isNIM) {
            myNIM.innerHTML = "<span style='color: green;'>Valid NIM.</span>"
        } else {
            myNIM.innerHTML = "<span style='color: red;'>NIM cannot be less than 9 digits.</span>"
        }
    } else {
        myNIM.innerHTML = "<span style='color: red;'>NIM cannot be more than 9 digits.</span>"
    }
})

//email
const checkEmail = (value) => {
    const regex = /^[a-zA-Z0-9._]{5,}@[a-zA-Z]{5,}[.]{1}[a-zA-Z.]{3,6}$/
    const isEmail = regex.test(value)
    if (isEmail) {
        return true
    } else {
        return false
    }
}

validasiEmail.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isEmail = checkEmail(value)
    if (isEmail) {
        myEmail.innerHTML = "<span style='color: green;'>Valid email address.</span>"
    } else {
        myEmail.innerHTML = "<span style='color: red;'>Invalid email address.</span>"
    }
})

//password
const checkPassword = (value) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const isPassword = regex.test(value)
    if (isPassword) {
        return true
    } else {
        return false
    }
}

validasiPassword.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isPassword = checkPassword(value)
    if (value.length <= 8) {
        if (isPassword) {
            myPassword.innerHTML = "<span style='color: green;'>Valid password.</span>"
        } else {
            myPassword.innerHTML = "<span style='color: red;'>Password contains at least 8 characters, one uppercase letter, one lowercase letter, and one number.</span>"
        }
    }
})

//age
const checkAge = (value) => {
    const regex = /^(0?[1-9]|[1-9][0-9])$/
    const isAge = regex.test(value)
    if (isAge) {
        return true
    } else {
        return false
    }
}

validasiAge.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isAge = checkAge(value)
    if (isAge) {
        myAge.innerHTML = "<span style='color: green;'>Valid age.</span>"
    } else {
        myAge.innerHTML = "<span style='color: red;'>Invalid age.</span>"
    }
})





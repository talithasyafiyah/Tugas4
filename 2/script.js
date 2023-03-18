const validasiRegex = document.getElementById('input-regex')
const myInput = document.getElementById('input-text')
const checkNama = (value) => {
    const regex = /^0[0-9]{9,11}$/
    const isNama = regex.test(value)
    if (isNama) {
        return true
    } else {
        return false
    }
}

validasiRegex.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isNama = checkNama(value)
    if (value.length <= 12) {
        if (isNama) {
            myInput.innerHTML = 'berhasil'
        } else {
            myInput.innerHTML = 'gagal'
        }
    } else {
        myInput.innerHTML = 'melebihi'
    }
})





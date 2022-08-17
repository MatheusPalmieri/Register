var form = document.querySelector('form')
var fields = document.querySelectorAll('.required')
var spans = document.querySelectorAll('#required')
var emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

form.addEventListener('submit', (event) => {
    event.preventDefault()
    nameValidate()
    emailValidate()
    passwordValidate()
    compatiblePasswordValidate()
})

function nameValidate() {
    if(fields[0].value.length < 3) {
        setError(0)
    } else {
        removeError(0)
    }
}

function emailValidate(){
    if(!emailRegex.test(fields[1].value))
    {
        setError(1)
    } else {
        removeError(1)
    }
}

function passwordValidate(){
    if(fields[2].value.length < 8)
    {
        setError(2)
    } else {
        removeError(2)
        compatiblePasswordValidate()
    }
}

function compatiblePasswordValidate(){
    if(fields[2].value == fields[3].value && fields[3].value.length >= 8)
    {
        removeError(3)
    } else {
        setError(3)
    }
}


function setError(index){
    fields[index].style.border = '2px solid #e63636'
    fields[index].style.border.focus = '2px solid #e63636'
    spans[index].style.display = 'block'
}

function removeError(index){
    fields[index].style.border = ''
    fields[index].style.border.focus = ''
    spans[index].style.display = 'none'
}

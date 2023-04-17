let stringUser = ''

function revertString() {
    const input = document.getElementById('input')
    const label = document.getElementById('label')
    for (i=input.value.length-1; i >= 0; i--){
        console.log(input.value[i])
        stringUser = stringUser + input.value[i]
    }
    label.innerHTML = stringUser
    label.style.backgroundColor = 'blue'
    label.style.color = 'white'
    stringUser = ''
}
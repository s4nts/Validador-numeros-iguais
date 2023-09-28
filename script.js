// function calculate() {
//     const n1 = document.getElementById('n1');
//     const n2 = document.getElementById('n2');
    
//     const result = document.getElementById('result');

//     if (+n1.value === +n2.value) {
//         result.textContent = 'Números são iguais';
//     } else {
//         result.textContent = 'Números diferentes';
//     }
// };


function calculate() {
    const n1 = document.getElementById('n1');
    const n2 = document.getElementById('n2');
    
    const result = document.getElementById('result');

    if (parseFloat(n1.value) === parseFloat(n2.value)) {
        result.textContent = 'Números são iguais';
    } else if (n1.value.trim() === '' || n2.value.trim() === '') {
        result.textContent = alert('Digite os dois valores');
    } else {
        result.textContent = 'Números diferentes';
    }
};

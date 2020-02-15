let counter =0;

function count(){
    counter++;
    document.querySelector('#id').innerHTML = counter;
    if (counter % 10 === 0){
        alert(`the counter is at ${counter}`);
    }
}
console.log('executed the code')
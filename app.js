// set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn')
//Select all the buttons, loop over them using forEach
//addEventListener for each button
//Use event object to get current target and class list

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--
        }
        else if (styles.contains('increase')){
            count++;
        }
        else{
           count = 0; 
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = '#222';
        }
        value.textContent = count

    })

})
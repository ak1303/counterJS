
let count=0;
let countDiv = document.getElementsByClassName('count')[0];
countDiv.innerHTML = `Your Current count is : 0`;
let errorDiv = document.getElementsByClassName('error')[0];
let buttons = document.getElementsByClassName('btn');
let clearBtn = document.getElementById('clear');
Array.from(buttons).forEach(button =>{
    button.addEventListener('click',(e)=>{
        errorDiv.style.visibility='hidden';
        clearBtn.style.display='block';
        if(e.target.id=='increment'){
            count++;
        }
        else if(e.target.id=='decrement'){
            if(count<=1){
                clearBtn.style.display='none';
            }
            if(count==0){
                errorDiv.style.visibility='visible';
            }else{
                count--;
            }

        }else{
            clearBtn.style.display='none';
            count=0;
        }
        countDiv.innerHTML = `Your Current count is : ${count}`;
        
    })
})
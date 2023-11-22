var number='';
var val1;
var val2;
var oper='';
var count=0;
var ans=0;
textbox.value=number;

function buttonClick(val){
    count++;
    console.log(count);
    if(count==1){
        val1=document.getElementById('textbox').value;
        console.log('val1'+val1);
        oper=val;
        console.log('operator'+oper);
        number='';
        document.getElementById('textbox').value=number;
    }
    else if(count==2){
        val2=document.getElementById('textbox').value;
        console.log(val2)
        switch(oper){
            case '+':
                ans=parseInt(val1)+parseInt(val2);
                break;
            case '-':
                ans=(parseInt(val1))-(parseInt(val2));
                console.log(val2)
                break;
            case '*':
                ans=parseInt(val1)*parseInt(val2);
                break;
            case '/':
                ans=parseInt(val1)/parseInt(val2);
                break;
            default:
        }
        document.getElementById('textbox').value=ans;
        val1='';
        val2='';
        count=0;
        ans=0;
        number='';
    }
    
}


function buttonClickValue(value){
    
    number=number+(value.toString());
    document.getElementById('textbox').value=number;
    console.log(number)
}   
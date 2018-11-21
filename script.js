var pos=0;
var speed=250;
var str=document.getElementById('str').innerText;
console.log(str);

// Clear string
document.getElementById('str').innerText = '';

// Type function

function type() {
    if(pos<str.length) {
        document.getElementById('str').innerText += str.charAt(pos);
        pos++;
        setTimeout(type,speed);
    } else {
        setTimeout(clear,speed);
    }
}

setTimeout(type,speed);

// Clear function
function clear(){
    if(pos>=0) {
        var temp = str.substring(0, pos);
        document.getElementById('str').innerText = temp;
        pos--;
        setTimeout(clear,speed);
    } else {
        setTimeout(type,speed);
    }
}
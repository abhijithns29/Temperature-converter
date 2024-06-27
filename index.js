const label =document.getElementById("textbox");
const cel_fah =document.getElementById("cel-fah");
const fah_cel =document.getElementById("fah-cel");
const button =document.getElementById("button");
const result =document.getElementById("result");
 let temp;
function convert(){
    if(cel_fah.checked){
    temp = Number(label.value);
    temp=temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1)+"°F";
    }
    else if(fah_cel.checked){
     temp = Number(label.value);
    temp=(temp - 32) * (5/9);
    result.textContent = temp.toFixed(1)+"°F";
    result.textContent = temp.toFixed(1)+"°C";
    }
    else{
        result.textContent="select a unit";
     }
}
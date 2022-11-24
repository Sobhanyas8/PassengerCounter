
let count=0;

function increament() {
count+=1
document.getElementById("count_el").innerText=count;
}

 function decreament() {
        count-=1
        document.getElementById("count_el").innerText=count;
    
   }

   function save() {
    document.getElementById("save-el").textContent += count +" - "
    document.getElementById("count_el").innerText=0;
    count=0;

   }
   alert('welcome to my app')
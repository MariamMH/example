window.addEventListener('load',function(){
let items = document.querySelectorAll('.item');
let value = document.querySelector('.value')

function onClick(){
   this.classList.toggle('shadow');
}
function changeValue(){
    let result = 0;
    for(let i = 0; i < items.length; i++){
      if(items[i].classList.contains('shadow')){
         result += parseInt(items[i].dataset.price);
    }
  }
   value.innerText = result;
}
for(let i = 0; i < items.length;i++){
    items[i].addEventListener('click',onClick);
    items[i].addEventListener('click',changeValue)
}
})
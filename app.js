const burgerButton= document.querySelector('.navbar-burger');
const menuPhone = document.querySelector('.BurgerRes');
let y=0;



burgerButton.addEventListener('click',(e)=>{
    
    
    
        if(y%2==0){
            menuPhone.style.display='block';
        
           
            
        }
        else{
            menuPhone.style.display='none'; 
        }
        y++;

    
})
window.addEventListener("resize",()=>{
if(window.screen.width>1024){
    menuPhone.style.display='none'; 
}
y=0;
});
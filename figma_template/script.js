document.addEventListener('scroll',function(){
if(window.scrollY>=450){
    button1.style.position="fixed"
    button1.style.left="88%"
    button1.style.top="2vh"
}
else if(window.scrollY<450){
    button1.style.position="relative"
    button1.style.left="0"
    button1.style.top="-10px"
}
})
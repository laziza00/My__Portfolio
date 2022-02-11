let a = 0;

document.getElementById('darkbtn').addEventListener('click', function () 
{document.body.classList.toggle('dark');
if (a==0){
    this.textContent =('');
    a++;
}else {
    this.textContent =('');
    a=0;
}
});
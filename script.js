console.log("himanshu jha is very handsome and cool guy");
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamberg').addEventListener("click",()=>{
    document.querySelector('.side_bar').classList.toggle('side_barGO');
    if(document.querySelector('.side_bar').classList.contains('side_barGO'))
    {
        document.querySelector('.cross').style.display= 'none';
        document.querySelector('.hum').style.display= 'inline'
    }
    else
    {
        setTimeout(()=>{document.querySelector('.cross').style.display= 'inline'},350);
        document.querySelector('.hum').style.display= 'none'

    }

    
})

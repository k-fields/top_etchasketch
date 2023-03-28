document.addEventListener('DOMContentLoaded',() => {
    const size = 64;
    let divArray = [];
    
    let containerMaster = document.getElementById('container-master');
    let containerStyles = getComputedStyle(containerMaster);
    
    console.log(containerMaster);
    console.log('height: '+ containerStyles.height);
    console.log('width: '+ containerStyles.width);
    
    for (let i = 0; i < size**2;i++){
        divArray.push(document.createElement('div'));
        divArray[i].setAttribute('class','tile div-'+(i+1));
        const styles = {
            'height': parseInt(containerStyles.height) / size +'px',
            'width': parseInt(containerStyles.width) / size+'px',
            'border':'1px solid hotpink'
        }
        //divArray[i].style.border = styles.border;
        divArray[i].style.height = styles.height;
        divArray[i].style.width = styles.width;
        divArray[i].setAttribute('draggable','false');
        //divArray[i].innerText=1;
        containerMaster.appendChild(divArray[i]);
        console.log("Div " + (i+1) +":\n\tHeight: "+styles.height+"\n\tWidth: "+styles.width);
    }

    let dragging = false;

    document.addEventListener('mousedown', () => {
        dragging = true;
    });

    document.addEventListener('mouseup', () => {
        dragging = false;
    });

    document.addEventListener('mousemove', (e) => {
        if(dragging && e.target.classList.contains('tile')){
            e.target.style.backgroundColor = 'black';
        }
    })
});
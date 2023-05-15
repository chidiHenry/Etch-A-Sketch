
const container = document.getElementById('grid')

const gridButton = document.getElementById('gridButton');

function clearGrid(){
    location.reload();
}

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', ()=>{
    clearGrid();
})

gridButton.addEventListener('click', ()=>{
        const val = prompt('Enter a number: example 12 to create a 12X12 Grid', 12);
        getGridSize(val);     
        
})




// let columns = 16;
// let rows = 16;
function getGridSize (size){

for (let i = 0; i < size; i++) {
    const column = document.createElement('div');
    column.className = 'column'
    for(let j=0; j< size; j++){
        const row = document.createElement('div');
        row.className = 'row';
       // row.textContent = i;
        
    if(size>100){
        return alert(`Choose an number between 1 and 100`);
    }
    
     
        column.appendChild(row);
    }
    
    container.appendChild(column);
    
}
}
//document.body.appendChild(container);

container.addEventListener('mouseover', function(e){
    
e.target.classList.add('hoverMouse');

})


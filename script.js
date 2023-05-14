
const container = document.getElementById('grid')

const gridButton = document.getElementById('gridButton');

gridButton.addEventListener('click', (e)=>{
const val = prompt('Enter Grid Size', 12);
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
        row.textContent = i + '-' +j;

        column.appendChild(row);
    }
    
    container.appendChild(column);
    
}
}
//document.body.appendChild(container);

container.addEventListener('mouseover', function(e){
    
e.target.classList.add('hoverMouse');

})


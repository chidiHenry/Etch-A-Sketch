
const container = document.getElementById('grid')

let columns = 16;
let rows = 16;

for (let i = 0; i < columns; i++) {
    const column = document.createElement('div');
    column.className = 'column'
    for(let j=0; j< rows; j++){
        const row = document.createElement('div');
        row.className = 'row';
        row.textContent = i + '-' +j;

        column.appendChild(row);
    }
    
    container.appendChild(column);
    
}
//document.body.appendChild(container);

container.addEventListener('mouseover', function(e){
    
e.target.classList.add('hoverMouse');

})
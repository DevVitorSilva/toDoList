function adicionar(){
    const content = document.querySelector('#content').value;
    const items = document.querySelector('#items');
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    
    if(content === ''){
        alert('Digite algo para poder adicionar');
    }else{
        let border = document.querySelector('#items');
        border.style.border = 'solid 1px black';
        
        div.classList.add('d-flex', 'align-items-start', 'mb-3');
        input.classList.add('me-2', 'mt-1');
        
        input.type = 'checkbox'
        input.style.minWidth = '25px';
        input.style.minHeight = '25px';

        div.appendChild(input);
        div.appendChild(label);
        label.appendChild(document.createTextNode(content));
        items.appendChild(div);

        document.querySelector('#content').value = '';

        input.addEventListener('click', () => {
            if(input.checked === true){
                label.classList.add('concluido');
            }else{
                label.classList.remove('concluido');
            }
        });
    }
      
}
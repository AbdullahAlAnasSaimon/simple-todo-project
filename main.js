/* const items = document.getElementsByClassName('in-out');
    for(const item of items){
      item.addEventListener('click', function(){
        event.target.parentNode.removeChild(event.target);
      })
    } */
    const listContainer = document.getElementById('in-out');
    listContainer.addEventListener('click', function(event){
      // event.target.parentNode.removeChild(event.target);
      event.target.style.textDecoration = "line-through";
      let myAudio = document.querySelector('#audio')
      myAudio.play();
    })
    listContainer.addEventListener("dblclick", function(event){
      event.target.parentNode.removeChild(event.target);
    })

    const button = document.getElementById('btn-task');
    button.addEventListener('click', function(){
      const listContainer = document.getElementById('in-out');

      const li = document.createElement('li');
      let inputValue = document.getElementById('text-input');
      li.innerText = inputValue.value;
      inputValue.value = '';
      li.classList.add('item');
      listContainer.appendChild(li);
    })
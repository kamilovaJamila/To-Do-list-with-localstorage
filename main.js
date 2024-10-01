
// let list = document.querySelector('#list');
// let btn = document.querySelector('#btn');
// let textInput = document.querySelector('#textInput');


// // btn addEventListener 

// btn.addEventListener('click', function(){
//    if(textInput.value === ''){
//     alert('You must write something ')
//    }else{
//     // create li element
//     let li = document.createElement('li');
//     li.textContent = textInput.value 
//     list.append(li)
//     textInput.value = ''
//    saveData()
//     li.style.textTransform = 'capitalize'

//     // span
//     let span = document.createElement('span');
//     span.textContent = "\u00d7" 
//     li.append(span)
//     saveData()
//    }

// })

// // event list addEventListener

// list.addEventListener('click', function(event){
//     if(event.target.tagName === 'LI'){
//         event.target.classList.toggle('checked')
//         saveData()
//     }
//     else if (event.target.tagName === 'SPAN'){
//         event.target.parentElement.remove()
//         saveData()
//     }
// })


// // save data with localstorage
//  function saveData(){
//     localStorage.setItem('data', list.innerHTML)
//  }

//  function showData(){
//     list.innerHTML = localStorage.getItem('data')
//  }

//  showData()


let btn = document.querySelector('#btn');
let textInput = document.querySelector('#textInput');
let list = document.querySelector('#list');

// btn addEventListener


btn.addEventListener('click', function(){
    if(textInput.value === ''){
        alert('You must write something')
    }else{
        let li = document.createElement('li')
       li.textContent = textInput.value 
       li.style.textTransform = "capitalize"
       list.append(li)
    saveData()
    textInput.value = ""
  
    let span = document.createElement('span')
    span.textContent = "\u00d7" 
    li.append(span)
    saveData()

    }

    
})


list.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked')
        list.style.textDecoration = 'lime-through'
    }else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove()
    }

    saveData()
})




function saveData(){
    localStorage.setItem('data', list.innerHTML)
}

function showData(){
    list.innerHTML = localStorage.getItem('data')
}


showData()
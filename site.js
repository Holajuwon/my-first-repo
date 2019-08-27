// alert('javascript is working')
// $('div').on('click', function () {
//     $(this).toggleClass('show-description');
// });

const showDescription = () =>{

    let description = document.querySelector('div')
    description.forEach(description=>{
        description.classList.toggle('show-description')
    })

    
}

document.querySelector('div').addEventListener('click', showDescription);

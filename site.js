// alert('javascript is working')
// $('div').on('click', function () {
//     $(this).toggleClass('show-description');
// });

const showDescription = () =>{

    let description = document.querySelector('.first, .second, .dessert')
    description.forEach(description=>{
        description.classList.toggle('show-description')
    })

    
}

document.querySelector('.first, .second, .dessert').addEventListener('click', showDescription());

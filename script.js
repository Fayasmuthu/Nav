const wrapper =document.querySelector('.wrapper');
const loginlink =document.querySelector('.login-link')
const registerlink =document.querySelector('.register-link');
const btnpopup =document.querySelector('.btnLogin-popup');
const iconclose =document.querySelector('.icon-close');
const iconperson=document.querySelector('.person1')
const backg =document.querySelector('.backg');
// const backgroundd =document.querySelector('.backg');



registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('action-popup');
});
iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('action-popup');
});
iconperson.addEventListener('click',()=>{
    wrapper.classList.add('action-popup');
});
backg.addEventListener('click',()=>{
    wrapper.classList.add('action-popup')
})
backg.addEventListener('click',()=>{
    wrapper.classList.remove('action-popup')
})

// backgroundd.addEventListener('click',()=>{
//     backg.classList.add('action-popup');
// });
// backgroundd.addEventListener('click',()=>{
//     backg.classList.remove('action-popup');
// });


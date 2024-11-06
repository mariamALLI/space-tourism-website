const clickOpen = document.querySelector('#click-open')
const clickClose = document.querySelector('#click_close')
const sideBar = document.getElementById('sidebar')

clickOpen.addEventListener('click', ()=>{
    sideBar.style.right = '0'
})

clickClose.addEventListener('click', ()=>{
    sideBar.style.right = '-290px'
})

const shareInfo = document.querySelector('.share_info-mobile');
const share = document.querySelector('.share_wrap');


window.addEventListener('load', () => {

    if (window.innerWidth < 732) {
        share.addEventListener('mouseover', (e) => {
            shareInfo.classList.add('flex')
        })
        share.addEventListener('mouseout', (e) => {
            shareInfo.classList.remove('flex')
        })
    
    }
})

window.addEventListener('resize', () => {

    if (window.innerWidth < 732) {
        console.log(window.innerWidth);
        share.addEventListener('mouseover', (e) => {
            shareInfo.classList.add('flex')
        })
        share.addEventListener('mouseout', (e) => {
            shareInfo.classList.remove('flex')
        })
    
    }else {
        return
    }
})






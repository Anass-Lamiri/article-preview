
const shareInfo = document.querySelector('.share_info-mobile');
const share = document.querySelector('.share_wrap');


window.addEventListener('load', () => {
    shareHover()
})

window.addEventListener('resize', () => {
    shareHover()
})



function shareHover() {

    share.addEventListener('mouseover', () => {
        if (window.innerWidth < 860) {
            shareInfo.classList.add('flex')
        }
    })
    share.addEventListener('mouseout', () => {
        shareInfo.classList.remove('flex')
    })
}


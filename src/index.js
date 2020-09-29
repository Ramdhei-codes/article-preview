const shareButton = document.querySelector(".profile__share")
const socialMedia = document.querySelector(".social-media")

socialMedia.classList.add('disappear')

shareButton.addEventListener('click', hideShow)

function hideShow() {
    if(socialMedia.classList.contains('disappear')){
        socialMedia.classList.remove('disappear')
    } else{
        socialMedia.classList.add('disappear')
    }
}


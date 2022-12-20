let imageMore = document.getElementById('image_more');
let divImageMore = document.querySelector('.choice_of_subject')

function imageMoreFun(){
    imageMore.style.height = '260px';
    imageMore.style.width = '260px';
}

divImageMore.addEventListener('click', imageMoreFun);


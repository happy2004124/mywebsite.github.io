document.addEventListener('DOMContentLoaded', function() {  
    const photos = ["609e3da1139f295acb282f2f86fba70.jpg", "a287580595807632e962682af25edc2.jpg"];   
    let currentIndex = 0; // 当前显示的图片索引  
  
    const displayPhoto = document.querySelector('.display-photo');  
    const switchButton = document.querySelector('.switch-photo');  
  
    switchButton.addEventListener('click', function() {  
        currentIndex = (currentIndex + 1) % photos.length; // 循环切换图片  
        displayPhoto.src = photos[currentIndex]; // 更新图片源  
    });  
});
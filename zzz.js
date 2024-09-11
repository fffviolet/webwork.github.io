document.getElementById('saveSite').addEventListener('click', function() {
    alert('收藏成功');
});
document.getElementById('myimage').addEventListener('click', function() {
    var src = this.getAttribute('src');
    if(src.endsWith('image/quan.jpg')) {
        this.setAttribute('src', 'image/quan2.jpg');
    } else {
        this.setAttribute('src', 'image/quan.jpg');
    }
})
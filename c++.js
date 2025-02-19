function showCode(type) {
    var codes = document.getElementsByClassName('code-block');
    for (var i = 0; i < codes.length; i++) {
        codes[i].style.display = 'none';
    }
    document.getElementById(type).style.display = 'block';
}

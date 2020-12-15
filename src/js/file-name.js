function getFileParam() {
    var file = document.getElementById('input__file').files[0];
    if (file) {
        var fileSize = 0;
        if (/\.(jpe?g|bmp|gif|png)$/i.test(file.name)) {
            var elPreview = document.getElementById('preview');
            elPreview.innerHTML = '';
            var newImg = document.createElement('img');
            newImg.className = "preview-img";
            if (typeof file.getAsDataURL == 'function') {
                if (file.getAsDataURL().substr(0, 11) == 'data:image/') {
                    newImg.onload = function() {
                        document.getElementById('input__file').innerHTML += ' (' + newImg.naturalWidth + 'x' + newImg.naturalHeight + ' px)';
                    }
                    newImg.setAttribute('src', file.getAsDataURL());
                    elPreview.appendChild(newImg);
                }
            } else {
                var reader = new FileReader();
                reader.onloadend = function(evt) {
                    if (evt.target.readyState == FileReader.DONE) {
                        newImg.onload = function() {
                            document.getElementById('input__file').innerHTML += ' (' + newImg.naturalWidth + 'x' + newImg.naturalHeight + ' px)';
                        }
                        newImg.setAttribute('src', evt.target.result);
                        elPreview.appendChild(newImg);
                    }
                };
                var blob;
                if (file.slice) {
                    blob = file.slice(0, file.size);
                } else if (file.webkitSlice) {
                    blob = file.webkitSlice(0, file.size);
                } else if (file.mozSlice) {
                    blob = file.mozSlice(0, file.size);
                }
                reader.readAsDataURL(blob);
            }
        }
    }
}

function getFile1Param() {
    var file = document.getElementById('input__file1').files[0];
    if (file) {
        var fileSize = 0;
        if (/\.(jpe?g|bmp|gif|png)$/i.test(file.name)) {
            var elPreview = document.getElementById('preview1');
            elPreview.innerHTML = '';
            var newImg = document.createElement('img');
            newImg.className = "preview-img1";
            if (typeof file.getAsDataURL == 'function') {
                if (file.getAsDataURL().substr(0, 11) == 'data:image/') {
                    newImg.onload = function() {
                        document.getElementById('input__file1').innerHTML += ' (' + newImg.naturalWidth + 'x' + newImg.naturalHeight + ' px)';
                    }
                    newImg.setAttribute('src', file.getAsDataURL());
                    elPreview.appendChild(newImg);
                }
            } else {
                var reader = new FileReader();
                reader.onloadend = function(evt) {
                    if (evt.target.readyState == FileReader.DONE) {
                        newImg.onload = function() {
                            document.getElementById('input__file1').innerHTML += ' (' + newImg.naturalWidth + 'x' + newImg.naturalHeight + ' px)';
                        }
                        newImg.setAttribute('src', evt.target.result);
                        elPreview.appendChild(newImg);
                    }
                };
                var blob;
                if (file.slice) {
                    blob = file.slice(0, file.size);
                } else if (file.webkitSlice) {
                    blob = file.webkitSlice(0, file.size);
                } else if (file.mozSlice) {
                    blob = file.mozSlice(0, file.size);
                }
                reader.readAsDataURL(blob);
            }
        }
    }
}

function getFile2Param() {
    var file = document.getElementById('input__file2').files[0];
    if (file) {
        var fileSize = 0;
        if (/\.(jpe?g|bmp|gif|png)$/i.test(file.name)) {
            var elPreview = document.getElementById('preview2');
            elPreview.innerHTML = '';
            var newImg = document.createElement('img');
            newImg.className = "preview-img1";
            if (typeof file.getAsDataURL == 'function') {
                if (file.getAsDataURL().substr(0, 11) == 'data:image/') {
                    newImg.onload = function() {
                        document.getElementById('input__file2').innerHTML += ' (' + newImg.naturalWidth + 'x' + newImg.naturalHeight + ' px)';
                    }
                    newImg.setAttribute('src', file.getAsDataURL());
                    elPreview.appendChild(newImg);
                }
            } else {
                var reader = new FileReader();
                reader.onloadend = function(evt) {
                    if (evt.target.readyState == FileReader.DONE) {
                        newImg.onload = function() {
                            document.getElementById('input__file2').innerHTML += ' (' + newImg.naturalWidth + 'x' + newImg.naturalHeight + ' px)';
                        }
                        newImg.setAttribute('src', evt.target.result);
                        elPreview.appendChild(newImg);
                    }
                };
                var blob;
                if (file.slice) {
                    blob = file.slice(0, file.size);
                } else if (file.webkitSlice) {
                    blob = file.webkitSlice(0, file.size);
                } else if (file.mozSlice) {
                    blob = file.mozSlice(0, file.size);
                }
                reader.readAsDataURL(blob);
            }
        }
    }
}
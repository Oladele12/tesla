        let header = document.getElementById('header')
        let ms = document.getElementById('models')
        let m3 = document.getElementById('model3')
        let mx = document.getElementById('modelx')
        let my = document.getElementById('modely')
        let model = document.getElementById('model')
        let miles = document.getElementById('miles')


        ms.onclick = () => {
            header.style.backgroundImage = "url(images/image-1.png)"
            model.innerHTML = "Model S"
            miles.innerHTML ="396 mi"
        }
        m3.onclick = () => {
            header.style.backgroundImage = "url(images/image-2.png)"
            model.innerHTML ="Model 3"
            miles.innerHTML = "400 mi"
        }
        mx.onclick = function(){
            header.style.backgroundImage = "url(images/image-3.png)";
            model.innerHTML = "Model X"
            miles.innerHTML = "450 mi"
        }
        my.onclick = function(){
            header.style.backgroundImage = "url(images/image-4.png)";
            model.innerHTML= "Model Y"
            miles.innerHTML = "500 mi"
        }
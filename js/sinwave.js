var btnShow = document.getElementById('btnShowMe');


btnShow.addEventListener('click',function (){
    letters =[];
    document.getElementById('stage').innerHTML = "<div id=\"stage\"></div>";
    var inputText = document.getElementById('inputText').value;

    console.log(inputText.length);

    // var angleIncrement = 100/(inputText.length-1);
    // var angle = 0;
    // var offset = 200;
    // var amplitude = 175;

    for (var i = 0; i < inputText.length; i++) {

        var spanElement = document.createElement('span');
        spanElement.className = 'char';
        spanElement.innerText = inputText.charAt(i);
        letters.push(spanElement);
        // var stage = document.querySelector("#stage");
        // stage.append(spanElement);
        //
        // var theta = 2 * Math.PI * (angle/100);
        // var y = amplitude * Math.sin(theta);
        // var x = angle;
        //
        // console.log(y);
        //
        // spanElement.style.left = x + "%";
        // spanElement.style.top = offset - y + "px";
        //
        // angle += angleIncrement;
    }
    var angleIncrement = 100/(letters.length-1);
    var angle = 0;
    var offset = 200;
    var amplitude = 175;

    var i = 0;
    function animateWave() {
        var stage = document.querySelector("#stage");
        stage.append(letters[i]);

        var theta = 4 * Math.PI * (angle/100);
        var y = amplitude * Math.sin(theta);
        var x = angle;

        console.log(y);
        console.log(angle);
        console.log(x);
        console.log(angleIncrement);

        letters[i].style.left = x + "%";
        letters[i].style.top = offset - y + "px";

        angle += angleIncrement;
        i++;
        if (i >= letters.length){
            i = 0;
            angle = 0;
            stage.innerHTML = "<div id=\"stage\"></div>";
        }
        // }
    }
    var waveTimer = setInterval(animateWave, 50);

});




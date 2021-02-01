window.onload = () => {
    var canv = document.getElementById("canv");
    var position = document.getElementById("position");
    var ctx = canv.getContext("2d");

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    canv.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canv, evt);
        position.innerHTML = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    }, false);


    var trianglePositions = [];
    trianglePositions.push({x: 375, y: 50});
    trianglePositions.push({x: 675, y: 650});
    trianglePositions.push({x: 75, y: 650});


    //Vierkant
    // trianglePositions.push({x: 375, y: 50});
    // trianglePositions.push({x: 675, y: 350});
    // trianglePositions.push({x: 75, y: 350});
    // trianglePositions.push({x: 275, y: 650});
    
    var pos = {x: 300, y: 300 };

    var drawPoint = (x, y) => {
        ctx.fillRect(x, y, 1, 1);
    }
    
    var calculateDistance = (fromX, fromY, toX, toY) => {
        var xDistance = Math.floor((fromX - toX) / 2);
        var yDistance = Math.floor((fromY - toY) / 2);

        return { x: fromX - xDistance, y: fromY - yDistance };
    }
    
    var putOnePoint = () => {
        var towards = Math.floor(Math.random() * trianglePositions.length);
        pos = calculateDistance(pos.x, pos.y, trianglePositions[towards].x, trianglePositions[towards].y);
        drawPoint(pos.x, pos.y);
    }

    trianglePositions.forEach(el => {
        ctx.fillRect(el.x, el.y, 1, 1);    
    });

    var speed = 5;
    var seconden = (1000 / speed) * 15;
    var interval = setInterval(function() {
        for(i = 0; i < 100; i++) {
            putOnePoint();
        }
        
        seconden--;
        if(seconden < 0) {
            clearInterval(interval);
        }
    }, speed);

    // for(i = 0; i < 1000000; i++) {
    //     putOnePoint();
    // }

};
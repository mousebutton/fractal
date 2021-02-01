window.onload = () => {
    var canv = document.getElementById("canv");
    var ctx = canv.getContext("2d");

    var trianglePositions = [];
    trianglePositions.push({x: 275, y: 250});
    trianglePositions.push({x: 375, y: 450});
    trianglePositions.push({x: 75, y: 450});

    // trianglePositions.push({x: 575, y: 50});
    // trianglePositions.push({x: 675, y: 250});
    // trianglePositions.push({x: 475, y: 250});

    
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
        ctx.fillRect(el.x, el.y, 3, 3);    
    });

    // var pos = {x: 150, y: 200};
    // var speed = 1;
    // var seconden = (1000 / speed) * 15;
    // var interval = setInterval(function() {
    //     putOnePoint();

    //     seconden--;
    //     if(seconden < 0) {
    //         clearInterval(interval);
    //     }
    // }, speed);

    for(i = 0; i < 100000; i++) {
        putOnePoint();
    }

};
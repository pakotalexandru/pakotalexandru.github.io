
$('.pen-tool').on('click',function (e) {
    let $li = $(e.currentTarget);
    $li.addClass('current').siblings().removeClass('current');
});


let canvas = document.querySelector('.drawInput');
let clientHeight = document.documentElement.clientHeight;
let clientWidth = document.documentElement.clientWidth;
canvas.width = clientWidth-6;
canvas.height = clientHeight-68;
let prePoint;


canvas.addEventListener('touchmove', function (e) {
    e.preventDefault();
    
    let clientX = e.touches[0].clientX;
    let clientY = e.touches[0].clientY;

    
    let $index = $('.pen-tool').filter('.current').index();

    
    if ($index === 0) {                              
        if (prePoint) {
            let ctx = canvas.getContext('2d');
            ctx.fillStyle = 'green';
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#14E8BB';
            
            ctx.beginPath();
            ctx.moveTo(prePoint.x, prePoint.y);      
            ctx.lineTo(clientX, clientY);            
            ctx.stroke();
        }
        prePoint = {
            x: clientX,
            y: clientY
        
    } else if ($index === 1) {                       
        let ctx = canvas.getContext('2d');
        ctx.clearRect(clientX - 10, clientY - 10, 20, 20)
    }
});

canvas.addEventListener('touchend',function (e){
    
    prePoint={undefined};
});


$('.save').on('click',function () {
    let ctx = canvas.getContext('2d');
    
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < imageData.data.length; i += 4) {
    
        if(imageData.data[i + 3] == 0) {
            imageData.data[i] = 255;
            imageData.data[i + 1] = 255;
            imageData.data[i + 2] = 255;
            imageData.data[i + 3] = 255;
        }
    }
    ctx.putImageData(imageData, 0, 0);

    window.open(canvas.toDataURL('image/png'));
});

$('.reset').on('click',function () {
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
});
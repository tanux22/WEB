window.addEventListener('load', () => {
    const canvas = document.getElementById('curveGraphCanvas');
    const ctx = canvas.getContext('2d');

    // Data points for the curve graph
    const data = [
        { x: 0, y: 100 },
        { x: 100, y: 50 },
        { x: 200, y: 150 },
        { x: 300, y: 80 },
        { x: 400, y: 120 },
        { x: 500, y: 200 },
        { x: 600, y: 90 },
        { x: 700, y: 180 },
        { x: 800, y: 100 }
    ];

    // Function to draw the curve graph
    function drawCurveGraph() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw axes
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.moveTo(0, canvas.height);
        ctx.lineTo(0, 0);
        ctx.stroke();

        // Draw curve
        ctx.beginPath();
        ctx.strokeStyle = '#ff5733'; // Curve color
        ctx.lineWidth = 2;
        ctx.moveTo(data[0].x, data[0].y);
        for (let i = 1; i < data.length - 2; i++) {
            const xc = (data[i].x + data[i + 1].x) / 2;
            const yc = (data[i].y + data[i + 1].y) / 2;
            ctx.quadraticCurveTo(data[i].x, data[i].y, xc, yc);
        }
        // curve through the last two points
        ctx.quadraticCurveTo(data[i].x, data[i].y, data[i + 1].x, data[i + 1].y);
        ctx.stroke();

        // Draw data points
        ctx.fillStyle = '#ff5733'; // Data point color
        data.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    drawCurveGraph();
});

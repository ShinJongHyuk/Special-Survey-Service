import { useState, useRef, useEffect } from 'react'

function useScratchHook() {

    // scratch
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const mouseDown = useRef<boolean>(false);
    const [canvasOpacity, setCanvasOpacity] = useState(1);

    const initializeCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const image = new Image();
        image.src = '/instantwin/board.png';
        image.onload = () => {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        }
    };


    const erase = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        if (!mouseDown.current) return;

        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = 30;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'rgba(0,0,0,1)';

        const { left, top } = canvas.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let transparency = 0;
        for (let i = 3; i < imageData.data.length; i += 4) {
            if (imageData.data[i] === 0) {
                transparency += 1;
            }
        }

        const totalPixels = imageData.data.length / 4;
        if (transparency / totalPixels > 0.5) {
            setCanvasOpacity(0);
        }
    };

    useEffect(() => {
        initializeCanvas();
    }, []);

    return { canvasRef, mouseDown, canvasOpacity, erase };
}

export default useScratchHook;

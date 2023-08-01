"use client"
import { useState, useRef, useEffect } from 'react'
import { StyledTitleBox, StyledBox, StyledImg, StyledProbability, StyledWinBox } from "./InstantWinConfirm.styled"

const InstantWinConfirm = (props: any) => {

    const images: { [key: string]: string } = {
        chicken: "/card/chicken.png",
        coffee: "/card/coffee.png",
    };
    const imgsrc = images[props.giveaways];


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

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }} >
            <img src="/instantwin/instantwin.png" style={{ position: "absolute", width: "100%", height: "100%", zIndex: "-1" }}></img>


            <StyledBox>
                <StyledTitleBox>
                    <img src="/instantwin/money.png" style={{ width: "70px", height: "70px" }} alt="money" />
                    <div className='title'> 즉시 당첨 확인하기 </div>
                    <div className='subtitle'> 당첨여부를 확인하고 상품을 받아가세요! </div>
                </StyledTitleBox>
                <StyledWinBox >

                    <div style={{ position: "absolute", width: "140px", height: "140px", zIndex: "0" }}>
                        <img src="/card/chicken.png" style={{ borderRadius: "100px", width: "100%", height: "100%" }}></img>
                    </div>
                    <canvas
                        ref={canvasRef}
                        width={380}
                        height={140}
                        onMouseDown={() => { mouseDown.current = true; }}
                        onMouseUp={() => { mouseDown.current = false; }}
                        onMouseMove={erase}
                        style={{ position: 'absolute', left: '0', top: '0', cursor: 'pointer', transition: 'opacity 1s', opacity: canvasOpacity }}
                    />
                </StyledWinBox>

            </StyledBox>
        </div>

    )
}

export default InstantWinConfirm

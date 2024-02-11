import { onMount } from "solid-js";
import { Application, Graphics } from "pixi.js";

export const Scene = () => {
    let appContainer: HTMLElement | undefined = undefined;

    const app = new Application<HTMLCanvasElement>({
        width: window.innerWidth,
        height: window.innerHeight,
        background: 0x2F2F2F,
        antialias: true,
        resizeTo: window
    });

    const createCircle = () => {
        const circle = new Graphics();
        
        circle.lineStyle(2, 0x993333);
        circle.beginFill(0xCC3333);
        circle.drawCircle(0, 0, 25);
        circle.endFill();

        return circle;
    }
    
    onMount(() => {
        if (!appContainer) {
            console.error("Could not find node to mount scene to.");
            return;
        }

        const circle = createCircle();
        appContainer.appendChild(app.view);
        app.stage.addChild(circle);

        app.ticker.add((deltaTime) => {
            
        });

        app.ticker.start();
    });

    return (
        <div ref={appContainer}></div>
    )
}
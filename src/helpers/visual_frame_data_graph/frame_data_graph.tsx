import React from "react";
import './frame_block.scss'
interface OwnProps {
    startup: string | null;
    active: string | null;
    recovery: string | null;
    onScreen?: string | null;
}
type VisualGraphProps = OwnProps;

const generateBlocks = (totalFrames: number, active: number, startup: number, assist: boolean) => {
    let i: number = 1;
    let frames: string[] = [];
    while (i <= totalFrames){
        if(i >= startup && (i < active + startup)){
            frames.push('active');
        } else if(i >= active + startup){
            if(assist){
                frames.push('on screen');
            } else {
                frames.push('recovery');
            }
        } else {
            frames.push('non-active');
        }
        i++;
    }

    return frames
}

const VisualGraph = (props: VisualGraphProps) => {
    const { startup, active, recovery, onScreen } = props;
    const hasValue = recovery || onScreen
    if(startup && active && hasValue) {
        let frameData: string[]
        
        if(onScreen){
            frameData = generateBlocks(parseInt(onScreen), parseInt(active), parseInt(startup), true)
        } else {
            const totalFrames = parseInt(startup) + parseInt(active) - 1 + parseInt(recovery || '0')
            frameData = generateBlocks(totalFrames, parseInt(active), parseInt(startup), false)
        }
        return (
            <div className="frame-data-container">
                {
                    frameData.map((f: string, key: number) => {
                    return(<div className={`frame-block ${f}`} key={key} title={`frame ${key + 1}`} />)
                    })
                }
            </div>
        );
    } else {
        return (null)
    }
    
        
}
    export default VisualGraph
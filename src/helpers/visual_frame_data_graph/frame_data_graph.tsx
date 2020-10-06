import React from "react";
import './frame_block.scss'
interface OwnProps {
    startup: string | null;
    active: string | null;
    recovery: string | null;
}
type VisualGraphProps = OwnProps;

const generateBlocks = (totalFrames: number, active: number, startup: number) => {
    let i: number = 1;
    let frames: string[] = [];
    while (i <= totalFrames){
        if(i >= startup && (i < active + startup)){
            frames.push('active');
        } else if(i >= active + startup){
            frames.push('recovery');
        } else {
            frames.push('non-active');
        }
        i++;
    }

    return frames
}

const VisualGraph = (props: VisualGraphProps) => {
    const { startup, active, recovery } = props;
    
    if(startup && active && recovery) {
        const totalFrames = parseInt(startup) + parseInt(active) - 1 + parseInt(recovery)
        const frameData: string[] = generateBlocks(totalFrames, parseInt(active), parseInt(startup))
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
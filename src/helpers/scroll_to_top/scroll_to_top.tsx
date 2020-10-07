import './scroll_to_top.scss'

import React, { useEffect } from 'react';

import { Fab } from '@material-ui/core';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if(position > 50){
            setIsVisible(true);
        }
    }

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        setTimeout(() => {
            setIsVisible(false);
        }, 500)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="scroll-to-top">
            {
                isVisible ?
                <Fab onClick={() => handleScrollToTop()}>
                   Top
                </Fab>
                :
                null
            }
        </div>
    )
}

export default ScrollToTop;
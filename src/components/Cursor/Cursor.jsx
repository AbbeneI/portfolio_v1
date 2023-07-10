import './Cursor.css';
import { forwardRef, useImperativeHandle, useRef } from "react";
import { gsap } from 'gsap';

export const Cursor = forwardRef(function (props, ref) {
    const cursorRef = useRef({});

    useImperativeHandle(ref, () => {
        // return the API
        return {
            moveTo(x, y) {
                gsap.to(cursorRef.current, { x, y });
            }
        };
    }, []);

    return (
        <div className="cursor" ref={cursorRef}></div>
    );
})
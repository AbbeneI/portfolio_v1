import './Cursor.css';
import { forwardRef, useImperativeHandle, useRef } from "react";
import { gsap } from 'gsap';

export const Cursor = forwardRef((props, ref) => {
    const el = useRef({});
    let content = '';

    useImperativeHandle(ref, () => {
        // return the API
        return {
            moveTo(x, y) {
                gsap.to(el.current, { x, y });
            }
        };
    }, []);

    return (
        <div className="cursor" ref={el}>{content}</div>
    );
})
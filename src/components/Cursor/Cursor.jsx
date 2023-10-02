import './Cursor.css';
import { forwardRef, useImperativeHandle, useRef } from "react";
import { gsap } from 'gsap';

export const Cursor = forwardRef((props, ref) => {
    const el = useRef(null);

    let content = props.content;
    let classList = props.classList;

    useImperativeHandle(ref, () => {
        // return the API
        return {
            moveTo(x, y) {
                gsap.to(el.current, { x, y });
            }
        };
    }, []);

    return (
        <div className="c cursor-center" ref={el}>
            {(content === '' ?
                <div className={"cursor " + classList}></div>
                :
                <div className={`cursor content ${classList}`} >{content}</div>
            )}
        </div>
    );
})
import './Cursor.css';
import { forwardRef, useImperativeHandle, useRef, useState, useEffect } from "react";
import { gsap } from 'gsap';

export const Cursor = forwardRef((props, ref) => {
    const el = useRef({});
    // console.log("\n cursor props: ", props)

    let content = props.content;
    // console.log("\ncontent: ", content)

    useImperativeHandle(ref, () => {
        // return the API
        return {
            moveTo(x, y) {
                gsap.to(el.current, { x, y });
            }
        };
    }, [props.content]);

    useEffect(() => {
        function setContent(c) {
            props.setCursorContent('new state')
        }
    }, [])

    return (
        (content === '' ?
            <div className="cursor" ref={el}>{content}</div>
            :
            <div className="cursor content" ref={el}>{content}</div>
        )
    );
})
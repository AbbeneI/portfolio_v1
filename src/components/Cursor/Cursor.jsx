import './Cursor.css';
import { forwardRef, useImperativeHandle, useRef, useState, useEffect } from "react";
import { gsap } from 'gsap';

export const Cursor = forwardRef((props, ref) => {
    const el = useRef({});

    let content = props.content;
    let classList = props.classList;

    useImperativeHandle(ref, () => {
        // return the API
        return {
            moveTo(x, y) {
                gsap.to(el.current, { x, y });
            }
        };
    }, [props.content]);

    useEffect(() => {
        function setContent() {
            props.setCursorContent('new state')
        }
        function setClassList(list) {
            props.setCursorClassList(list)
        }
    }, [])

    return (
        (content === '' ?
            <div className={"cursor " + classList} ref={el}></div>
            :
            <div className={`cursor content ${classList}`} ref={el}>{content}</div>
        )
    );
})
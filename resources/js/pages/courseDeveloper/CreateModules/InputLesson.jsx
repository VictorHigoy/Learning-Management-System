import React, { useEffect } from "react";

import { useQuill } from "react-quilljs";
// or const { useQuill } = require('react-quilljs');

import "quill/dist/quill.snow.css"; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

function InputLesson({ setLesson, error, lesson }) {
    const { quill, quillRef } = useQuill();

    useEffect(() => {
        if (quill) {
            quill.on("text-change", () => {
                setLesson(quillRef.current.firstChild.innerHTML);
            });
        }
    }, [quill]);

    return (
        <div className="d-block createModuleMargin">
            <label className="fs-5 fw-semibold">Module Lesson : </label>

            <div>
                <div
                    className={`textEditorContainer ${
                        error && lesson === undefined ? "errorBorderColor" : ""
                    }`}
                >
                    <div ref={quillRef} />
                </div>
            </div>
        </div>
    );
}

export default InputLesson;

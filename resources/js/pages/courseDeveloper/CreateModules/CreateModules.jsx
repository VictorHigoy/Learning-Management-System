import React, { useState, useEffect } from "react";
import Dropdown from "./ModulesOtherComponents/Dropdown";
import InputLesson from "./InputLesson";
import InputPrelimAct from "./InputPrelimAct";
import InputGeneralization from "./InputGeneralization";
import InputAnalysis from "./InputAnalysis";

function CreateModules() {
    const [moduleValue, setModuleValue] = useState();
    const [moduleTitle, setModuleTitle] = useState("");
    const [lesson, setLesson] = useState();
    const [generalization, setGeneralization] = useState();
    const [prelimAct, setPrelimAct] = useState();
    const [error, setError] = useState(false);

    // useEffect(() => {
    //     console.log(prelimAct);
    // }, [prelimAct]);

    const moduleOfSubject = [];

    const onSubmitLessonHandler = () => {
        if (
            moduleValue === undefined ||
            "" ||
            moduleTitle === "" ||
            lesson === undefined ||
            "" ||
            generalization === undefined ||
            "" ||
            prelimAct === undefined ||
            ""
        ) {
            setError(true);
        } else {
            moduleOfSubject.push(
                { moduleValue },
                { moduleTitle },
                { lesson },
                { generalization },
                { prelimAct }
            );
            setError(false);
            setLesson(undefined);
            setModuleTitle("");
            setModuleValue(undefined);
            setGeneralization(undefined);
            setPrelimAct(undefined);
        }
        console.log(moduleOfSubject);
    };

    return (
        <div>
            <div className="d-flex align-items-center mb-5 mt-3 mt-sm-0">
                <h3 className="border-end border-4 border-dark border-opacity-75 pe-2 m-0">
                    Create Modules
                </h3>
                <h3 className="ps-2 text-secondary m-0">
                    122 - CAP101 Capstone Project 1
                </h3>
            </div>
            <div className="ms-lg-4">
                <InputAnalysis />
                <Dropdown
                    error={error}
                    moduleValue={moduleValue}
                    setModuleValue={setModuleValue}
                    moduleTitle={moduleTitle}
                    setModuleTitle={setModuleTitle}
                />
                <InputLesson
                    error={error}
                    lesson={lesson}
                    setLesson={setLesson}
                />
                {/* <div dangerouslySetInnerHTML={{ __html: lesson }} /> */}
                <InputPrelimAct
                    error={error}
                    prelimAct={prelimAct}
                    setPrelimAct={setPrelimAct}
                />
                <InputGeneralization
                    error={error}
                    generalization={generalization}
                    setGeneralization={setGeneralization}
                />
                {error ? "You are missing something" : ""}
                <div className="d-flex justify-content-end createModuleSubmit">
                    <button
                        className="btn btn-primary btn-lg submitModule"
                        type="button"
                        onClick={onSubmitLessonHandler}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateModules;

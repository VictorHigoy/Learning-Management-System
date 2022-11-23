import React, { useEffect, useState } from "react";

function InputAnalysis() {
    // States

    const [question, setQuestion] = useState({
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
        question7: "",
        question8: "",
        question9: "",
        question10: "",
    });

    const numberOfChoices = [
        { id: 1, rightAnswerNo: "rightAnswer1", letter: "A" },
        { id: 2, rightAnswerNo: "rightAnswer2", letter: "B" },
        { id: 3, rightAnswerNo: "rightAnswer3", letter: "C" },
        { id: 4, rightAnswerNo: "rightAnswer4", letter: "D" },
    ];

    const numberOfQuestions = [
        { id: 1, question: "Question 1", questionNumber: "question1" },
        { id: 2, question: "Question 2", questionNumber: "question2" },
        { id: 3, question: "Question 3", questionNumber: "question3" },
        { id: 4, question: "Question 4", questionNumber: "question4" },
        { id: 5, question: "Question 5", questionNumber: "question5" },
        { id: 6, question: "Question 6", questionNumber: "question6" },
        { id: 7, question: "Question 7", questionNumber: "question7" },
        { id: 8, question: "Question 8", questionNumber: "question8" },
        { id: 9, question: "Question 9", questionNumber: "question9" },
        { id: 10, question: "Question 10", questionNumber: "question10" },
    ];

    const InputAnalysisQuestions = [];

    // const InputAnalysisHandler = () => {
    //     if (
    //         question1 === "" ||
    //         undefined ||
    //         question2 === "" ||
    //         undefined ||
    //         question3 === "" ||
    //         undefined ||
    //         question4 === "" ||
    //         undefined ||
    //         question5 === "" ||
    //         undefined ||
    //         question6 === "" ||
    //         undefined ||
    //         question7 === "" ||
    //         undefined ||
    //         question8 === "" ||
    //         undefined ||
    //         question9 === "" ||
    //         undefined ||
    //         question10 === "" ||
    //         undefined
    //     ) {
    //         console.log("Please Fill up all the question");
    //     } else {
    //         InputAnalysisQuestions.push({
    //             question1,
    //             question2,
    //             question3,
    //             question4,
    //             question5,
    //             question6,
    //             question7,
    //             question8,
    //             question9,
    //             question10,
    //         });

    //         setQuestion1(),
    //             setQuestion2(""),
    //             setQuestion3(""),
    //             setQuestion4(""),
    //             setQuestion5(""),
    //             setQuestion6(""),
    //             setQuestion7(""),
    //             setQuestion8(""),
    //             setQuestion9(""),
    //             setQuestion10(""),
    //             console.log(InputAnalysisQuestions);
    //     }
    // };

    const setQuestionHandler = (e) => {
        const { name, value } = e.target;
        setQuestion((prev) => {
            return { ...prev, [name]: value };
        });
    };

    console.log(question);

    const numberOfQuestionsHandler = () => {
        return numberOfQuestions.map((question, i) => {
            return (
                <div className="mb-3" key={i}>
                    <div className="mb-3">
                        <label
                            className="fw-semibold mb-2"
                            htmlFor={question.questionNumber}
                        >
                            {question.question}
                        </label>
                        <input
                            id={question.id}
                            className="form-control"
                            type="text"
                            name={question.questionNumber}
                            required
                            onChange={setQuestionHandler}
                        />
                    </div>
                    <div className="row gx-4 gy-2">
                        {multipleChoiceHandler()}
                    </div>
                </div>
            );
        });
    };

    const multipleChoiceHandler = () => {
        return numberOfChoices.map((choice) => {
            return (
                <div className="col-xl-6 mb-3" key={choice.id}>
                    <div className="d-flex">
                        <label
                            className="m-auto me-2 fw-semibold"
                            htmlFor={choice.letter}
                        >
                            {choice.letter}.
                        </label>
                        <div className="input-group">
                            <input type="text" className="form-control" />
                            <div className="form-check input-group-text m-0">
                                <input
                                    className="form-check-input me-2 ms-1"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id={choice.rightAnswerNo}
                                />
                                <label
                                    htmlFor={choice.rightAnswerNo}
                                    className="form-check-label"
                                >
                                    Right Answer
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="mb-4 w-100">
            <label className="fs-5 fw-semibold">Input Analysis : </label>
            <form className="p-3 inputAnalysisContainer shadow">
                {numberOfQuestionsHandler()}
                <button
                    type="button"
                    className="btn btn-primary btn"
                    // onClick={InputAnalysisHandler}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default InputAnalysis;

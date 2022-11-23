import React from "react";

function Dropdown({
    error,
    moduleValue,
    setModuleValue,
    moduleTitle,
    setModuleTitle,
}) {
    const moduleNumber = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ];

    const ModuleNumberHandler = () => {
        return moduleNumber.map((number, i) => {
            return (
                <li key={i}>
                    <button
                        className="dropdown-item"
                        value={number}
                        onClick={() => {
                            setModuleValue(number);
                        }}
                    >
                        {number}
                    </button>
                </li>
            );
        });
    };

    return (
        <div>
            <div className="dropdown mb-4">
                <button
                    className={`d-flex align-items-center btn btn-secondary dropdown-toggle fs-5 ${
                        error && moduleValue === undefined
                            ? "errorBorderColor"
                            : ""
                    }`}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <p className={`mb-0 ${moduleValue ? "mx-5" : "me-1"}`}>
                        {moduleValue
                            ? "Module # " + moduleValue
                            : "Select Module Number"}
                    </p>
                </button>
                <ul className="dropdown-menu">{ModuleNumberHandler()}</ul>
            </div>
            <div className="mb-4">
                <label className="fs-5 fw-semibold" htmlFor="inputModuleTitle">
                    Module Title :{" "}
                </label>
                <input
                    id="inputModuleTitle"
                    type="text"
                    className={`moduleTitle form-control ${
                        error && moduleTitle === "" ? "errorBorderColor" : ""
                    }`}
                    value={moduleTitle}
                    onChange={(e) => {
                        setModuleTitle(e.target.value);
                    }}
                    required
                />
            </div>
        </div>
    );
}

export default Dropdown;

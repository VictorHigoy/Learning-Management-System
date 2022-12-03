import { useContext } from "react";
import CreateModuleContext from "../../context/CourseDev/CreateModuleProvider";

function useCreateModule() {
    return useContext(CreateModuleContext);
}

export default useCreateModule;

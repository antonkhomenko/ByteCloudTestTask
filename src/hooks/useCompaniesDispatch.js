import {useContext} from "react";
import {CompaniesDispatchContext} from "../contexts/companiesContext.jsx";

export const useCompaniesDispatch = () => {
    return useContext(CompaniesDispatchContext);
}
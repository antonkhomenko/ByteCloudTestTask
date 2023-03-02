import {useContext} from "react";
import {CompaniesContext} from "../contexts/companiesContext.jsx";

export const useCompaniesData = () => {
    return useContext(CompaniesContext);
}
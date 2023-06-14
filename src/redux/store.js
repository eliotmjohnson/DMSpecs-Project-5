import { configureStore } from "@reduxjs/toolkit"
import potentialCountriesReducer  from "./slices/potentialCountriesSlice"


const store = configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
    }
})


export default store
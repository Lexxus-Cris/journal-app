import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"


export const JournalRoutes = () => {
    return (
        <Routes>
            <Route path='/' Element={JournalPage} />

            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}

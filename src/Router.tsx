import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Resume from './screens/Resume';
import GoBackScreen from './screens/GoBackScreen';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Resume />} />
                <Route path="downloaded" element={<GoBackScreen />} />
            </Routes>
        </BrowserRouter>
    );
}
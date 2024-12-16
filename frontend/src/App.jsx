import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DetailedPage from './Pages/DetailedPage';
import AdminSignIn from './Pages/AdminSignIn';
import AdminPage from './Pages/AdminPage';
import AddPackage from './Pages/AddPackage';
import EditPackage from './Pages/EditPackage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/:id" element={<DetailedPage />} />
      <Route path="/admin" element={<AdminSignIn></AdminSignIn>}></Route>
      <Route path="/admin/home" element={<AdminPage></AdminPage>}></Route>
      <Route
        path="/admin/add-package"
        element={<AddPackage></AddPackage>}
      ></Route>
      <Route
        path="/admin/edit-package"
        element={<EditPackage></EditPackage>}
      ></Route>
    </Routes>
  );
};

export default App;

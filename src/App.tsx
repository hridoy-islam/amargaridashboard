import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import ECommerce from './pages/Dashboard/ECommerce';
import Customer from './pages/Customer';
import CustomerCreate from './pages/CustomerCreate';
import Car from './pages/Car';
import CarCreate from './pages/CarCreate';
import Carwash from './pages/Carwash';
import CarwashCreate from './pages/CarwashrCreate';
import Consultancy from './pages/Consultancy';
import MessageCreate from './pages/MessageCreate';
import Message from './pages/Message';
import ConsultancyCreate from './pages/ConsultancyCreate';
import FormElements from './pages/Form/FormElements';
import SignIn from './pages/Authentication/SignIn';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="dashboard"
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="dashboard/customer"
          element={
            <>
              <PageTitle title="Customer" />
              <Customer />
            </>
          }
        />
        <Route
          path="dashboard/customer/create"
          element={
            <>
              <PageTitle title="Create New Customer" />
              <CustomerCreate />
            </>
          }
        />
        <Route
          path="dashboard/car"
          element={
            <>
              <PageTitle title="Car List" />
              <Car />
            </>
          }
        />

        <Route
          path="dashboard/car/create"
          element={
            <>
              <PageTitle title="Create Car" />
              <CarCreate />
            </>
          }
        />

        <Route
          path="dashboard/carwash"
          element={
            <>
              <PageTitle title="Car Wash List" />
              <Carwash />
            </>
          }
        />

        <Route
          path="dashboard/carwash/create"
          element={
            <>
              <PageTitle title="Create Car Wash" />
              <CarwashCreate />
            </>
          }
        />

        <Route
          path="dashboard/consultancy"
          element={
            <>
              <PageTitle title=" Consultancy List" />
              <Consultancy />
            </>
          }
        />

        <Route
          path="dashboard/consultancy/create"
          element={
            <>
              <PageTitle title="Create Consultancy" />
              <ConsultancyCreate />
            </>
          }
        />

        <Route
          path="dashboard/message"
          element={
            <>
              <PageTitle title=" Message List" />
              <Message />
            </>
          }
        />

        <Route
          path="dashboard/message/create"
          element={
            <>
              <PageTitle title="Create Message" />
              <MessageCreate />
            </>
          }
        />
        <Route
          path="dashboard/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;

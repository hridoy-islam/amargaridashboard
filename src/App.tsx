import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
// import SignIn from './pages/Authentication/SignIn';
// import SignUp from './pages/Authentication/SignUp';
// import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
// import FormElements from './pages/Form/FormElements';
// import FormLayout from './pages/Form/FormLayout';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';
// import Tables from './pages/Tables';
// import Alerts from './pages/UiElements/Alerts';
// import Buttons from './pages/UiElements/Buttons';
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
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/customer"
          element={
            <>
              <PageTitle title="Customer" />
              <Customer />
            </>
          }
        />
        <Route
          path="/customer/create"
          element={
            <>
              <PageTitle title="Create New Customer" />
              <CustomerCreate />
            </>
          }
        />
             <Route
          path="/car"
          element={
            <>
              <PageTitle title="Car List" />
              <Car />
            </>
          }
        />

      <Route
          path="/car/create"
          element={
            <>
              <PageTitle title="Create Car" />
              <CarCreate />
            </>
          }
        />

    <Route
          path="/carwash"
          element={
            <>
              <PageTitle title="Car Wash List" />
              <Carwash />
            </>
          }
        />

      <Route
          path="/carwash/create"
          element={
            <>
              <PageTitle title="Create Car Wash" />
              <CarwashCreate />
            </>
          }
        />

      <Route
          path="/consultancy"
          element={
            <>
              <PageTitle title=" Consultancy List" />
              <Consultancy />
            </>
          }
        />

      <Route
          path="/consultancy/create"
          element={
            <>
              <PageTitle title="Create Consultancy" />
              <ConsultancyCreate />
            </>
          }
        />

<Route
          path="/message"
          element={
            <>
              <PageTitle title=" Message List" />
              <Message />
            </>
          }
        />

      <Route
          path="/message/create"
          element={
            <>
              <PageTitle title="Create Message" />
              <MessageCreate />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        {/* <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
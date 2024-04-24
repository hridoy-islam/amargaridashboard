import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import ECommerce from './pages/Dashboard/ECommerce';
import Customer from './pages/Customer';
import CustomerCreate from './pages/CustomerCreate';
import CustomerEdit from './pages/CustomerEdit';
import Car from './pages/Car';
import CarCreate from './pages/CarCreate';
import CarwashCreate from './pages/CarwashrCreate';
import FormElements from './pages/Form/FormElements';
import SignIn from './pages/Authentication/SignIn';
import DriverCreateForm from './components/Driver/DriverCreate';
import DriverList from './components/Driver/DriverList';
import DriverCreate from './pages/DriverCreate';
import Driver from './pages/Driver';
import { DriverView } from './pages/DriverView';
import Bookings from './pages/Bookings';
import Contact from './pages/Contact';
import BookingCreate from './pages/BookingCreate';

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
              <PageTitle title="Garir Mela Admin" />
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
          path="dashboard/customer/:id"
          element={
            <>
              <PageTitle title="Edit Customer Details" />
              <CustomerEdit />
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
          path="dashboard/booking"
          element={
            <>
              <PageTitle title="All Bookings" />
              <Bookings />
            </>
          }
        />
        <Route
          path="dashboard/booking"
          element={
            <>
              <PageTitle title="All Bookings" />
              <Bookings />
            </>
          }
        />

        <Route
          path="dashboard/booking/create"
          element={
            <>
              <PageTitle title="Create Service Booking" />
              <BookingCreate />
            </>
          }
        />

        <Route
          path="dashboard/driver"
          element={
            <>
              <PageTitle title=" Driver List" />
              <Driver />
            </>
          }
        />

        <Route
          path="dashboard/driver/create"
          element={
            <>
              <PageTitle title="Create Driver" />
              <DriverCreate />
            </>
          }
        />
        <Route
          path="dashboard/driver/:id"
          element={
            <>
              <PageTitle title="Driver Details" />
              <DriverView />
            </>
          }
        />
        <Route
          path="dashboard/contact"
          element={
            <>
              <PageTitle title="Contact Form" />
              <Contact />
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

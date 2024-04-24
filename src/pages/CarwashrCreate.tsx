import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import CarwashCreateForm from '../components/Booking/CarwashCreateForm';
import DefaultLayout from '../layout/DefaultLayout';

const CarwashCreate = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Create New Carwash" />
      <CarwashCreateForm />
    </DefaultLayout>
  );
};

export default CarwashCreate;

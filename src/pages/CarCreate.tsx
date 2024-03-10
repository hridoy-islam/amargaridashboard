import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import CarCreateForm from '../components/Car/CarCreateForm';
import DefaultLayout from '../layout/DefaultLayout';

const CustomerCreate = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Create New Car" />
      <CarCreateForm />
    </DefaultLayout>
  );
};

export default CustomerCreate;

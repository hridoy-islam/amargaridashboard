import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import CarwashList from '../components/Carwash/CarwashList';
import DefaultLayout from '../layout/DefaultLayout';

const Carwash = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Carwash" />
 <CarwashList/>
    </DefaultLayout>
  );
};

export default Carwash;

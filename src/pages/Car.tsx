import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import CarList from '../components/Car/CarList';
import DefaultLayout from '../layout/DefaultLayout';

const Car = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Car" />
 <CarList/>
    </DefaultLayout>
  );
};

export default Car;

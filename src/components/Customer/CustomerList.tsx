import { Customer } from '../../types/Customer';

const customerData: Customer[] = [
  {
    name: 'Ridoy Islam',
    email: 'rudiy@gmail.copm',
    phone: '012144777777',
    status: 'active',
  },
  {
    name: 'Ridoy Islam',
    email: 'rudiy@gmail.copm',
    phone: '012144777777',
    status: 'pending',
  },
  {
    name: 'Ridoy Islam',
    email: 'rudiy@gmail.copm',
    phone: '012144777777',
    status: 'blocked',
  },
  {
    name: 'Ridoy Islam',
    email: 'rudiy@gmail.copm',
    phone: '012144777777',
    status: 'active',
  },
];

const CustomerList = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Phone</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Status</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Actions</p>
        </div>
      </div>

      {customerData.map((customer, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                {customer.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {customer.email}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {customer.phone}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p
              className={`text-sm dark:text-white ${
                customer.status == 'active'
                  ? 'text-green-600'
                  : customer.status == 'pending'
                  ? 'text-red-500'
                  : customer.status == 'blocked'
                  ? 'text-blue-500'
                  : 'text-black'
              }`}
            >
              {customer.status}
            </p>
          </div>
          <div className="col-span-1 flex items-center space-x-2">
            <p className="text-sm text-meta-3">Edit</p>
            <p className="text-sm text-meta-5">Delete</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;

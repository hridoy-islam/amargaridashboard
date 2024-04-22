export const DriverDetails = ({ driver }) => {
  console.log(driver);
  return (
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div className="flex flex-col gap-9">
        {/* <!-- Input Fields --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Personal Information
            </h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Drivers Name
              </label>
              <p>{driver.name}</p>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Drivers Phone
              </label>
              <p>{driver.phone}</p>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Division
              </label>

              <p>{driver.division}</p>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                District
              </label>
              <p>{driver.district}</p>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Upazila
              </label>
              <p>{driver.upazila}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-9">
        {/* <!-- Input Fields --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Other Details
            </h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Car Name
              </label>
              <p>{driver.car}</p>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Driving License Front Side
              </label>
              <p>{driver.licenseFront}</p>
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Driving License Back Side
              </label>
              <p>{driver.licenseBack}</p>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Car Bluebook / RC Front Side
              </label>
              <p>{driver.bluebookFront}</p>
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Car Bluebook / RC Back Side
              </label>
              <p>{driver.bluebookBack}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

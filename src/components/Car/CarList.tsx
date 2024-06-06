import { useEffect, useState } from 'react';
import axiosInstance from '../../axios';
import Pagination from '../Pagination/Pagination';
import { SearchFilter } from '../SearchFilter/SearchFilter';
import { TiTick, TiEyeOutline } from 'react-icons/ti';
import ConfirmModal from '../Modal/ConfirmModal';
import ViewModal from '../Modal/ViewModal';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const [isViewModal, setIsViewModal] = useState(false);
  const [viewModalData, setViewModalData] = useState();

  const handleViewModal = (item) => {
    setViewModalData(item);
    setIsViewModal(true);
  };
  const closeViewModal = () => {
    setIsViewModal(false);
  };

  const fetchData = async (page, entriesPerPage, searchTerm = '') => {
    try {
      let url = `/cars?page=${page}&limit=${entriesPerPage}`;
      // Check if searchTerm is not empty before adding to the URL
      if (searchTerm.trim() !== '') {
        url += `&searchTerm=${searchTerm}`;
      }

      const response = await axiosInstance.get(url);
      setCars(response.data.data.result);
      setTotalPages(response.data.data.meta.totalPage);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(currentPage, entriesPerPage, searchTerm);
  }, [currentPage, entriesPerPage, searchTerm]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleEntriesPerPageChange = (event) => {
    setEntriesPerPage(event.target.value);
  };

  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    type: null, // 'pending', 'approve', or 'sold'
    carId: null,
  });

  const openConfirmModal = (type, carId) => {
    setConfirmModal({ isOpen: true, type, carId });
  };

  const closeConfirmModal = () => {
    setConfirmModal({ ...confirmModal, isOpen: false });
  };

  const handleConfirm = async () => {
    let newStatus = '';
    switch (confirmModal.type) {
      case 'pending':
        newStatus = 'pending';
        break;
      case 'approve':
        newStatus = 'approve';
        break;
      case 'sold':
        newStatus = 'sold';
        break;
      default:
        return; // No action if the type is not recognized
    }

    const res = await axiosInstance.patch(`/cars/${confirmModal.carId}`, {
      status: newStatus,
    });

    console.log(res);

    if (res.data.success) {
      fetchData(currentPage, entriesPerPage, searchTerm);
    }
    closeConfirmModal();
  };

  // ... existing fetchData, useEffect, handlePageChange, handleSearch, handleEntriesPerPageChange functions

  const handleStatus = (type, carId) => {
    openConfirmModal(type, carId);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <SearchFilter
        onSearch={handleSearch}
        onEntriesPerPageChange={handleEntriesPerPageChange}
      />
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Title</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Brand</p>
        </div>

        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Posted By</p>
        </div>

        <div className="col-span-1 flex items-center">
          <p className="font-medium">Status</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Actions</p>
        </div>
      </div>

      {cars.map((item, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-1 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">{item.title}</p>
          </div>
          <div className="col-span-1 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">{item.brand}</p>
          </div>

          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{item.price}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {item.user.name}
            </p>
          </div>

          <div className="col-span-1 flex items-center">
            <p
              className={`text-sm font-semibold dark:text-white ${
                item?.status == 'sold'
                  ? 'text-green-600'
                  : item?.status == 'pending'
                  ? 'text-red-500'
                  : item?.status == 'approve'
                  ? 'text-blue-500'
                  : 'text-black'
              }`}
            >
              {item?.status.toUpperCase()}
            </p>
          </div>
          <div className="col-span-1 flex items-center space-x-2">
            {item?.status == 'pending' && (
              <button
                className="bg-blue-500 text-white p-1.5"
                onClick={() => handleStatus('approve', item?.id)}
              >
                Approve Car
              </button>
            )}

            {item?.status == 'approve' && (
              <button
                className="bg-red-500 text-white p-1"
                onClick={() => handleStatus('sold', item?.id)}
              >
                Sold Car
              </button>
            )}

            {item?.status == 'sold' && (
              <button className="bg-green-600 text-white p-1">
                Already Sold
              </button>
            )}

            <p
              className="text-3xl text-meta-5 cursor-pointer"
              onClick={() => handleViewModal(item)}
            >
              <TiEyeOutline />
            </p>
          </div>
        </div>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title={`Confirm ${
          confirmModal.type === 'block'
            ? 'Block'
            : confirmModal.type === 'approve'
            ? 'Approve'
            : 'Sold'
        } Car`}
        message={`Are you sure you want to ${
          confirmModal.type === 'block'
            ? 'block'
            : confirmModal.type === 'approve'
            ? 'approve'
            : 'mark as sold'
        } this car listing?`}
        onCancel={closeConfirmModal}
        onConfirm={handleConfirm}
      />

      <ViewModal
        isOpen={isViewModal}
        title="Car Details"
        data={viewModalData}
        onCancel={closeViewModal}
        type="car"
      />
    </div>
  );
};

export default CarList;

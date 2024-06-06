import { useEffect, useState } from 'react';
import axiosInstance from '../../axios';
import Pagination from '../Pagination/Pagination';
import { SearchFilter } from '../SearchFilter/SearchFilter';
import { Link } from 'react-router-dom';
import { ImBlocked } from 'react-icons/im';
import ConfirmModal from '../Modal/ConfirmModal';
import { FaCheck } from 'react-icons/fa';
import { FaPenToSquare } from 'react-icons/fa6';

const CustomerList = () => {
  const [customer, setCustomer] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    type: null, // 'block' or 'approve'
    userId: null,
  });

  const closeModal = () => {
    setConfirmModal({ ...confirmModal, isOpen: false });
  };

  const openModal = (type, userId) => {
    setConfirmModal({ isOpen: true, type, userId });
  };

  const handleConfirm = async () => {
    const status = confirmModal.type === 'block' ? 'block' : 'active';
    const res = await axiosInstance.patch(`/users/${confirmModal.userId}`, {
      status,
    });
    if (res.data.success) {
      fetchData(currentPage, entriesPerPage, searchTerm);
    }
    closeModal();
  };

  const fetchData = async (page, entriesPerPage, searchTerm = '') => {
    try {
      let url = `/users?role=user&page=${page}&limit=${entriesPerPage}`;
      // Check if searchTerm is not empty before adding to the URL
      if (searchTerm.trim() !== '') {
        url += `&searchTerm=${searchTerm}`;
      }

      const response = await axiosInstance.get(url);
      setCustomer(response.data.data.result);
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

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <SearchFilter
        onSearch={handleSearch}
        onEntriesPerPageChange={handleEntriesPerPageChange}
      />
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

      {customer.map((item, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">{item.name}</p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">{item.email}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{item.phone}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p
              className={` text-md dark:text-white ${
                item.status == 'active'
                  ? 'text-green-600'
                  : item?.status == 'block'
                  ? 'text-red-500'
                  : 'text-black'
              }`}
            >
              {item?.status.toUpperCase()}
            </p>
          </div>
          <div className="col-span-1 flex items-center space-x-2">
            <p className="text-sm text-meta-3">
              <Link to={`/dashboard/customer/${item.id}`}>
                <FaPenToSquare />
              </Link>
            </p>
            {item?.status === 'active' ? (
              <p
                className="text-lg text-danger cursor-pointer"
                onClick={() => openModal('block', item?.id)}
              >
                <ImBlocked />
              </p>
            ) : (
              <p
                className="text-lg text-blue-500 cursor-pointer"
                onClick={() => openModal('approve', item?.id)}
              >
                <FaCheck />
              </p>
            )}
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
          confirmModal.type === 'block' ? 'Block' : 'Approve'
        } User`}
        message={`Are you sure you want to ${
          confirmModal.type === 'block' ? 'block' : 'approve'
        } this user?`}
        onCancel={closeModal}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default CustomerList;

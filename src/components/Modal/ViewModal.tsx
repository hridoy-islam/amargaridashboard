import moment from 'moment';
import { useEffect } from 'react';

const ViewModal = ({ isOpen, title, data, onCancel, type }) => {
  // Apply a class to the root element conditionally based on the modal's visibility
  const modalContainerClass = isOpen ? '' : 'hidden';

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      onCancel(); // Close the modal
    }
  };

  // Effect to add event listener for escape key press
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  // Function to handle click outside the modal
  const handleClickOutside = (e) => {
    if (!e.target.closest('.modal-content')) {
      onCancel(); // Close the modal
    }
  };

  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto ${modalContainerClass}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={handleClickOutside}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="absolute inset-0 bg-black opacity-60 backdrop-filter backdrop-blur-sm"></div>{' '}
        {/* Background blur effect */}
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full relative z-10 modal-content">
          <div className="p-4">
            <div className="text-lg font-semibold mb-8" id="modal-title">
              {title} -{' '}
              <span
                className={`${
                  data?.status === 'pending'
                    ? 'bg-red-500'
                    : data?.status === 'approved'
                    ? 'bg-blue-500'
                    : 'bg-warning'
                } text-white p-2`}
              >
                {data?.status.toUpperCase()}
              </span>
            </div>
            <div className="mb-6">
              {type === 'booking' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-2">
                      <span className="font-semibold">Booking Date</span>:{' '}
                      {moment(data?.bookingDate).format('MMM Do YY')}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Address</span>:{' '}
                      {data.address}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Customer Name</span>:{' '}
                      {data.name}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Customer Phone</span>:{' '}
                      {data.phone}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Car</span>: {data.car}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Message</span>:{' '}
                      {data.message}
                    </div>

                    <div className="mb-2">
                      <span className="font-semibold">Booked By</span>:{' '}
                      {data.userid.name}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Booked Email</span>:{' '}
                      {data.userid.email}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Date When Booked</span>:{' '}
                      {moment(data?.userid.createdAt).format('MMM Do YY')}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;

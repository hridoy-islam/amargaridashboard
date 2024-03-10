import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import MessageList from '../components/Message/MessageList';
import DefaultLayout from '../layout/DefaultLayout';

const Message = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Message" />
      <MessageList />
    </DefaultLayout>
  );
};

export default Message;

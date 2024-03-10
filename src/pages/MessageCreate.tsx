import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import MessageCreateForm from '../components/Message/MessageCreate';
import DefaultLayout from '../layout/DefaultLayout';

const MessageCreate = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Create Message " />
      <MessageCreateForm />
    </DefaultLayout>
  );
};

export default MessageCreate;

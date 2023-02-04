import { Form, Input, Button } from './SearchBox.styled';
import { useSearchParams } from 'react-router-dom';
import { toastNotifyInfo } from 'services/toast-notify';

export default function SearchBox() {
  const [, setSearchParams] = useSearchParams();

  const handleSubmitForm = e => {
    e.preventDefault();

    if (e.target[0].value.trim().length === 0) {
      toastNotifyInfo('Please, specify your search criteria');
      return;
    }
    setSearchParams({ query: e.target[0].value });
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Input type="text" />
      <Button type="submit">Search</Button>
    </Form>
  );
}

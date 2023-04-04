import { useState } from 'react';

export const useLoading = () => {
  const [loading, setLoading] = useState('success');

  const changeStatusLoading = type => {
    switch (type) {
      case 'pending':
        setLoading('pending');
        break;
      case 'success':
        setLoading('success');
        break;

      default:
        setLoading('error');
        break;
    }
  };

  return { loading, changeStatusLoading };
};

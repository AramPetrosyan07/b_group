import { useDispatch } from 'react-redux';
import { actions as LoadActions } from '../store/LoadMoreProducts/loadMore';
import { actions as consumerReducer } from '../store/consumer/consumer.slice';
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';

const rootActions = {
  ...LoadActions,
  ...consumerReducer,
};

const useAction = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch);
  }, [dispatch]);
};

export default useAction;

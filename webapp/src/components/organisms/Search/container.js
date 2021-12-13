import Search from './component';
import { useDispatch } from 'react-redux';
import {
  setSearchStarsFromBD
} from '../../../redux/actions/stars';
const SearchContainer = () => {
  const dispatch = useDispatch();
  const onSubmit = (name) => {
    if (name) {
      dispatch(setSearchStarsFromBD(name));
    }
  };

  return <Search onSubmit={onSubmit} />;
};

export const container = SearchContainer;

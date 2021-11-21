import React from 'react';
import { FilteredName, FilteredInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/contact-actions';
// import { filterAction } from '../../redux/contacts/contact-slice';
import { getFilter } from '../../redux/contacts/contact-selectors';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <>
      <form>
        <FilteredName>
          Find contacts by name
          <FilteredInput
            type="text"
            name="filter"
            value={filter}
            onChange={onChange}
          />
        </FilteredName>
      </form>
    </>
  );
}

export default Filter;

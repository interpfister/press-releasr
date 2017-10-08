import React from 'react';
import Autocomplete from 'react-autocomplete';
import wineNames from './wine-names';

const matchStateToTerm = (state, value) => {
  return (
    state.FIELD1.toLowerCase().indexOf(value.toLowerCase()) !== -1
      && state.FIELD1.toLowerCase() !== value.toLowerCase() //hide exact matches
  );
};
  
const VarietalsAutocomplete = (props) => {
  return (
    <Autocomplete {...props.input}
      getItemValue={(item) => item.FIELD1}
      inputProps={{className: "form-control", onFocus: props.input.onFocus}}
      wrapperStyle={{ display: 'block' }}
      items={wineNames}
      renderMenu={children => (
        <div className="menu">
          {children}
        </div>
      )}
      renderItem={(item, isHighlighted) => (
        <div
          className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
          key={item.FIELD1}
        >{item.FIELD1}</div>
      )}
      open={props.meta.active && !!props.input.value && props.input.value.length > 2}
      onSelect={props.input.onChange}
      shouldItemRender={matchStateToTerm}
    />
  );
};

export default VarietalsAutocomplete;
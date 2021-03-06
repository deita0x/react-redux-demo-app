import React, { PropTypes } from 'react';

const SelectInput = (props) => {
  const { name, label, onChange, defaultOption, value, error, options } = props;
  
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">
          <option value="">{defaultOption}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.text}</option>
          ))}
        </select>
        {error && <span className="help-block">{error}</span>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
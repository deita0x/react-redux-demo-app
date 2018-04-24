import React, { PropTypes } from 'react';

const TextInput = ({name, label, placeholder, value, onChange, error}) => {
  let classes = 'form-group';
  if (error) { classes += ' has-error'; }

  return (
    <div className={classes}>
      <label className="control-label" htmlFor={'input' + name}>{label}</label>
      <input
        type="text"
        className="form-control"
        name={name}
        id={'input' + name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="help-block">{error}</span>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default TextInput;
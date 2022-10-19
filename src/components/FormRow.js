const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-input'
        style={{ 'padding': '5px', 'backgroundColor': '#D3D3D3', 'borderRadius': '5px'}} 
      />
    </div>
  );
};
export default FormRow;

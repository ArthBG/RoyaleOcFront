const Option = ({ value, label, imageSrc }) => {
    return (
      <option value={value}>
        <img src={imageSrc} alt={label} />
        {label}
      </option>
    );
  };

 export default Option;
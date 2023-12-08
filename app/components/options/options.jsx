const Option2 = ({ value, label, imageSrc }) => {
  return (
    <option data-value={value}>
      <img src={imageSrc} alt={label} />
      {label}
    </option>
  );
};

 export default Option2;
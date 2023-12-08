const Option = ({ value, label, imageSrc }) => {
  return (
    <li data-value={value}>
      <img src={imageSrc} alt={label} />
      {label}
    </li>
  );
};

 export default Option;
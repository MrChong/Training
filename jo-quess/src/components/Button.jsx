const Button = ({ url, color, text }) => {
  const buttonStyle = 'top-0 left-0 right-0 h-full rounded-lg px-4 py-2 font-mate text-[#F5F5F5]/90 font-medium text-lg';
  const buttonColor = {backgroundColor:color};

  return (
    <>
      {url ? (
        <a href={url} className={buttonStyle} style={buttonColor} target="_blank">
          {text}
        </a>
      ) : (
        <button className={buttonStyle} style={buttonColor}>{text}</button>
      )}
    </>
  );
};

export default Button;

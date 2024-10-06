const Button = ({ url, color, opacity, text }) => {
  const buttonStyle = 'top-0 left-0 right-0 h-full h-36 rounded-lg px-4 py-2 font-mate text-[#F5F5F5]/90 font-medium';
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

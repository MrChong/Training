const Button = ({ url, text, style}) => {
  const buttonStyle = `h-auto rounded-lg px-4 py-2 font-mate ${style}`;


  return (
    <>
      {url ? (
        <a href={url} className={buttonStyle} target="_blank">
          {text}
        </a>
      ) : (
        <button className={buttonStyle}>{text}</button>
      )}
    </>
  );
};

export default Button;

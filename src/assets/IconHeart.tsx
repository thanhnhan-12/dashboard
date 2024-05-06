import { useState } from 'react';

const IconHeart = () => {
  const [changeBgColor, setChangeBgColor] = useState(false);

  const handleClickChangeBgColor = () => {
    setChangeBgColor(!changeBgColor);
  };

  return (
    <svg
      onClick={handleClickChangeBgColor}
      width="16"
      height="16"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4994 5.52149C15.4994 2.38986 13.6396 0.0629883 10.7378 0.0629883C9.68989 0.0629883 8.97926 0.429363 7.99939 1.25999C7.0197 0.429176 6.30889 0.0629883 5.26095 0.0629883C2.3592 0.0629883 0.49939 2.38986 0.49939 5.52149C0.49939 7.95168 2.69839 10.6281 7.03095 13.6354C7.31547 13.8324 7.65331 13.938 7.99939 13.938C8.34547 13.938 8.68331 13.8324 8.96783 13.6354C13.3004 10.6281 15.4994 7.95168 15.4994 5.52149Z"
        fill={changeBgColor ? '#FF4500' : '#fff'}
        stroke={changeBgColor ? 'none' : '#FF4500'}
      />
    </svg>
  );
};

export default IconHeart;

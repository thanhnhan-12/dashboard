import { Image, ImageProps } from 'antd';
import clsx from 'clsx';
import './AImage.scss';

interface IAImage extends ImageProps {}

const AImage = ({ src }: IAImage) => {
  const classAntd = clsx('a-image');

  return <Image src={src} alt="a-image" className={classAntd} />;
};

export default AImage;

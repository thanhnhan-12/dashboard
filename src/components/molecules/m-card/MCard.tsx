import { Card, CardProps } from 'antd';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { IconHeart } from '~/assets';
import AImage from '~atoms/a-image';
import './MCard.scss';
import ATag from '~atoms/a-tag';
import { tagsData } from '~utils/data';

interface IMCard extends CardProps {
  description?: ReactNode;
  thumbnailUrl?: string;
}

const { Meta } = Card;

const MCard = ({ description, title, thumbnailUrl }: IMCard) => {
  const classAntd = clsx('m-card');

  return (
    <Card
      className={classAntd}
      cover={
        <div>
          <ATag tagsData={tagsData} />
          <AImage src={thumbnailUrl} />
        </div>
      }
      actions={[<IconHeart />]}
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default MCard;

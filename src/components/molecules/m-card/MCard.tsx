import { Card, CardProps } from 'antd';
import clsx from 'clsx';
import { ReactNode, useState } from 'react';
import { IconHeart } from '~/assets';
import AImage from '~atoms/a-image';
import './MCard.scss';
import ATag from '~atoms/a-tag';
import { tagsData } from '~utils/data';
import { ETypeCard } from '~/types/enum.type';

interface IMCard extends Omit<CardProps, 'type'> {
  type: ETypeCard;
  description?: ReactNode;
  thumbnailUrl?: string;
}

const { Meta } = Card;

const MCard = ({ type, description, title, thumbnailUrl }: IMCard) => {
  const [showAllTags, setShowAllTags] = useState(false);

  const classAntd = clsx('m-card', type, `m-card-${type}`);

  const maxTagsToShow = type === ETypeCard.HORIZONTAL ? 20 : 6;
  const visibleTags = showAllTags ? tagsData : tagsData.slice(0, maxTagsToShow);

  return (
    <Card
      className={classAntd}
      extra={<ATag tagsData={visibleTags} />}
      cover={<AImage src={thumbnailUrl} />}
      actions={[<IconHeart />]}
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default MCard;

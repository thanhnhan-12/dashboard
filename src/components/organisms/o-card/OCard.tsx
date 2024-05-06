import { Card, Flex } from 'antd';
import { CSSProperties } from 'react';
import MCard from '~molecules/m-card';
import ImageJob from '../../../assets/imageJob.png';
import { IconLike, IconCurrency, IconLocation } from '~/assets';
import MFormButton from '~molecules/m-form-button';
import { ETypeAButtonPC } from '~/types/enum.type';

const gridStyle: CSSProperties = {
  width: '30rem',
  backgroundColor: 'unset',
  border: 'unset',
  boxShadow: 'unset',
  padding: '0',
};

const OCard = () => {
  return (
    <Card
      style={{
        border: 'unset',
        background: 'unset',
        marginLeft: '2rem',
      }}
    >
      <Card.Grid hoverable={false} style={gridStyle}>
        <MCard
          thumbnailUrl={ImageJob}
          title={
            <div className="m-card-title">
              <p>株式会社ザ・サーフ オーシャンテ...</p>
              <p>
                <img src={IconLike} alt="icon-like" />
              </p>
              <p>3人</p>
            </div>
          }
          description={
            <div className="m-card-description">
              <p>【結婚式場のパティシエ求人】火水定休◆全国23店舗の結婚式場◎社宅制</p>
              <div className="m-card-infor">
                <div className="m-card-currency">
                  <img src={IconCurrency} alt="icon-currency" />
                  <span>月収</span>
                  <span className="m-card-currency-price">23~32 万円</span>
                </div>

                <div className="m-card-location">
                  <img src={IconLocation} alt="icon-location" />
                  <span>千葉県 千葉市美浜区</span>
                </div>
              </div>
              <Flex style={{ margin: '2rem 0 1rem' }}>
                <MFormButton
                  type={ETypeAButtonPC.ACCENT}
                  children="電話で応募する"
                  size="large"
                  hidden
                />
                <MFormButton
                  type={ETypeAButtonPC.PRIMARY}
                  children="Webで応募する"
                  size="large"
                  hidden
                />
              </Flex>
            </div>
          }
        />
      </Card.Grid>
    </Card>
  );
};

export default OCard;

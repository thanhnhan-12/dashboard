import { Card, Col, Flex, Row } from 'antd';
import { CSSProperties } from 'react';
import { IconCurrency, IconLike, IconLocation } from '~/assets';
import { ETypeCard } from '~/types/enum.type';
import { ETypeAButtonPC } from '~/types/enum.type';
import MCard from '~molecules/m-card';
import MFormButton from '~molecules/m-form-button';
import ImageJob from '../../../assets/imageJob.png';

const gridStyle: CSSProperties = {
  width: 'unset',
  backgroundColor: 'unset',
  border: 'unset',
  boxShadow: 'unset',
  padding: '0',
};

const OCard = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col lg={16}>
        <Card
          style={{
            border: 'unset',
            background: 'unset',
            marginLeft: '2rem',
          }}
        >
          <Card.Grid hoverable={false} style={gridStyle}>
            <MCard
              type={ETypeCard.VERTICAL}
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
                  <p className="m-card-recruitment">
                    【結婚式場のパティシエ求人】火水定休◆全国23店舗の結婚式場◎社宅制度あり
                  </p>
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

                  <div className="m-card-text-flex">
                    <p className="m-card-text">
                      PR文について入ります。PR文について入ります。PR文について入ります。PR文について入ります。
                    </p>
                    <Flex justify="center" style={{ margin: '1rem 0' }}>
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
                </div>
              }
            />
          </Card.Grid>
        </Card>
      </Col>

      <Col lg={16}>
        <Card
          style={{
            border: 'unset',
            background: 'unset',
            marginLeft: '2rem',
          }}
        >
          <Card.Grid hoverable={false} style={gridStyle}>
            <MCard
              type={ETypeCard.HORIZONTAL}
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
                  <p className="m-card-recruitment">
                    【結婚式場のパティシエ求人】火水定休◆全国23店舗の結婚式場◎社宅制度あり
                  </p>
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

                  <div className="m-card-text-flex">
                    <p className="m-card-text">
                      PR文について入ります。PR文について入ります。PR文について入ります。PR文について入ります。
                    </p>

                    <Flex justify="center" style={{ margin: '1rem 0' }}>
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
                </div>
              }
            />
          </Card.Grid>
        </Card>
      </Col>
    </Row>
  );
};

export default OCard;

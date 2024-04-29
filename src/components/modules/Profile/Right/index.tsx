import Image from 'next/image';
import { Timeline } from 'antd';
import { matchHistoryItems } from './actionList';

import area from '@/public/icon/match-propertiesIcon/area.svg';
import location from '@/public/icon/match-propertiesIcon/location.svg';
import people from '@/public/icon/match-propertiesIcon/people.svg';
import rank from '@/public/icon/match-propertiesIcon/rank.svg';
import stadiumCost from '@/public/icon/match-propertiesIcon/stadiumCost.svg';
import time from '@/public/icon/match-propertiesIcon/time.svg';

import * as S from './style';

export default function Right() {
  return (
    <>
      <S.Right>
        <S.MatchHistory>
          <Timeline>
            {matchHistoryItems.map((item, index) => (
              <Timeline.Item key={index} color="#4DAA57">
                <S.Activites>
                  <S.Content>
                    <S.UserAction>Bảo Thắng đã tham gia</S.UserAction>
                    <S.Title>
                      <S.TitleText>{item.valueTitleAction}</S.TitleText>
                    </S.Title>
                    <S.MatchProperties>
                      <S.PropertiesList>
                        <S.Item>
                          <S.ImageWrapper>
                            <Image src={time} alt="" fill sizes="auto" />
                          </S.ImageWrapper>
                          <span>{item.valueTime}</span>
                        </S.Item>
                        <S.Item>
                          <S.ImageWrapper>
                            <Image src={rank} alt="" fill sizes="auto" />
                          </S.ImageWrapper>
                          <span>{item.valueRank}</span>
                        </S.Item>
                        <S.Item>
                          <S.ImageWrapper>
                            <Image src={people} alt="" fill sizes="auto" />
                          </S.ImageWrapper>
                          <span>{item.valuePeople}</span>
                        </S.Item>

                        <S.Item>
                          <S.ImageWrapper>
                            <Image src={location} alt="" fill sizes="auto" />
                          </S.ImageWrapper>
                          <span>{item.valueLocation}</span>
                        </S.Item>

                        <S.Item>
                          <S.ImageWrapper>
                            <Image src={area} alt="" fill sizes="auto" />
                          </S.ImageWrapper>
                          <span>{item.valueArea}</span>
                        </S.Item>

                        <S.Item>
                          <S.ImageWrapper>
                            <Image src={stadiumCost} alt="" fill sizes="auto" />
                          </S.ImageWrapper>

                          <span>{item.costStadium} VNĐ</span>
                        </S.Item>
                      </S.PropertiesList>
                    </S.MatchProperties>
                  </S.Content>
                </S.Activites>
              </Timeline.Item>
            ))}
          </Timeline>
        </S.MatchHistory>
      </S.Right>
    </>
  );
}

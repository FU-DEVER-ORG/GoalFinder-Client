import Image from 'next/image';
import { Timeline } from 'antd';

import area from '@/public/icon/match-propertiesIcon/area.svg';
import location from '@/public/icon/match-propertiesIcon/location.svg';
import people from '@/public/icon/match-propertiesIcon/people.svg';
import rank from '@/public/icon/match-propertiesIcon/rank.svg';
import stadiumCost from '@/public/icon/match-propertiesIcon/stadiumCost.svg';
import time from '@/public/icon/match-propertiesIcon/time.svg';

import * as S from './style';

interface FootBallMatch {
  id: string;
  pitchAddress: string;
  maxMatchPlayersNeed: number;
  pitchPrice: number;
  description: string;
  startTime: string;
  address: string;
  competitionLevel: string;
}

interface matchHistory {
  footballMatch: FootBallMatch[];
  userName: string;
}
export default function Right({ footballMatch, userName }: matchHistory) {
  return (
    <>
      <S.Right>
        <S.MatchHistory>
          <Timeline>
            {footballMatch.map((match, index) => (
              <Timeline.Item key={index} color="#4DAA57">
                <S.Activites>
                  <S.Content>
                    <S.UserAction>{userName} đã tham gia</S.UserAction>
                    <S.Title>
                      <S.TitleText>{match.description}</S.TitleText>
                    </S.Title>
                    <S.MatchProperties>
                      <S.PropertiesList>
                        <S.Item>
                          <S.ImageWrapper>
                            <Image src={time} alt="" fill sizes="auto" />
                          </S.ImageWrapper>
                          <span>{match.startTime}</span>
                        </S.Item>
                        <S.Item>
                          <S.ImageWrapper>
                            <Image src={rank} alt="" fill sizes="auto" />
                          </S.ImageWrapper>
                          <span>{match.competitionLevel}</span>
                        </S.Item>
                        <S.Item>
                          <S.ImageWrapper>
                            <Image src={people} alt="" fill sizes="auto" />
                          </S.ImageWrapper>
                          <span>{match.maxMatchPlayersNeed} người</span>
                        </S.Item>

                        <S.Item>
                          <S.ImageWrapper>
                            <Image src={location} alt="" fill sizes="auto" />
                          </S.ImageWrapper>
                          <span>{match.address}</span>
                        </S.Item>

                        <S.Item>
                          <S.ImageWrapper>
                            <Image src={area} alt="" fill sizes="auto" />
                          </S.ImageWrapper>
                          <span>{match.pitchAddress}</span>
                        </S.Item>

                        <S.Item>
                          <S.ImageWrapper>
                            <Image src={stadiumCost} alt="" fill sizes="auto" />
                          </S.ImageWrapper>

                          <span>{match.pitchPrice} VNĐ</span>
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

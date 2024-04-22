'use client';
import MainLayout from '@/components/core/layouts/MainLayout';
import * as S from './style';
import { UserOutlined } from '@ant-design/icons';
import { Divider, Flex } from 'antd';
export default function Profile() {
  return (
    <>
      <MainLayout>
        <S.ImgArea>
          <S.CoverImg>
            <p>Up load your cover image</p>
            <S.BannerUser>
              <S.UserAvatar
                size={200}
                icon={<UserOutlined />}
                style={{ border: '5px solid white', background: '#D9D9D9' }}
              />
              <S.BoxUser>
                <S.Name>Trần Văn Bảo Thắng</S.Name>
                <S.Prestige>100 Uy tín</S.Prestige>
              </S.BoxUser>
            </S.BannerUser>
          </S.CoverImg>
        </S.ImgArea>

        <S.Container>
          <S.Moreinfor>
            <S.Left>
              <S.Introduction>
                <S.IntroTitle>Giới Thiệu</S.IntroTitle>
                <S.IntroQuotes>
                  Âm nhạc, Nghệ thuật và Giải trí.
                  <br />
                  Hòm thư: contact.cotdien@gmail.com
                </S.IntroQuotes>
                <Divider />
                <S.Aboutme>Hoà Hải, Ngũ Hành Sơn, Đà Nẵng</S.Aboutme>
                <S.Aboutme>Nghiệp dư</S.Aboutme>
                <S.Aboutme>Thủ môn, hậu vệ, tiền đạo</S.Aboutme>
                <S.Aboutme>Đá vui vẻ, Đá nghiêm túc</S.Aboutme>
              </S.Introduction>
            </S.Left>
            <S.Right>
              <S.MatchHistory>
                <S.Activites>
                  <S.Content>
                    <S.UserAction>Bảo Thắng đã tham gia</S.UserAction>
                    <S.Title> Kèo anh em văn phòng đấm nhau</S.Title>
                    <S.MatchProperties>
                      <S.PropertiesList>
                        <S.Item>
                          <S.ItemName>Thời gian: </S.ItemName>
                          <span>20/04/2024, 15:00</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Địa Điểm: </S.ItemName>
                          <span>Sân ABC, Đường XYZ</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Cạnh tranh: </S.ItemName>
                          <span>Vui vẻ</span>
                        </S.Item>

                        <S.Item>
                          <S.ItemName>Khu vực: </S.ItemName>
                          <span>Hoà Hải, Ngũ Hành Sơn, Đà Nẵng</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Số lượng: </S.ItemName>
                          <span>12 người</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Tiền sân: </S.ItemName>
                          <span>500.000 VNĐ</span>
                        </S.Item>
                      </S.PropertiesList>
                    </S.MatchProperties>
                  </S.Content>
                </S.Activites>

                <S.Activites>
                  <S.Content>
                    <S.UserAction>Bảo Thắng đã tham gia</S.UserAction>
                    <S.Title> Kèo anh em văn phòng đấm nhau</S.Title>
                    <S.MatchProperties>
                      <S.PropertiesList>
                        <S.Item>
                          <S.ItemName>Thời gian: </S.ItemName>
                          <span>20/04/2024, 15:00</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Địa Điểm: </S.ItemName>
                          <span>Sân ABC, Đường XYZ</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Cạnh tranh: </S.ItemName>
                          <span>Vui vẻ</span>
                        </S.Item>

                        <S.Item>
                          <S.ItemName>Khu vực: </S.ItemName>
                          <span>Hoà Hải, Ngũ Hành Sơn, Đà Nẵng</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Số lượng: </S.ItemName>
                          <span>12 người</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Tiền sân: </S.ItemName>
                          <span>500.000 VNĐ</span>
                        </S.Item>
                      </S.PropertiesList>
                    </S.MatchProperties>
                  </S.Content>
                </S.Activites>

                <S.Activites>
                  <S.Content>
                    <S.UserAction>Bảo Thắng đã tham gia</S.UserAction>
                    <S.Title> Kèo anh em văn phòng đấm nhau</S.Title>
                    <S.MatchProperties>
                      <S.PropertiesList>
                        <S.Item>
                          <S.ItemName>Thời gian: </S.ItemName>
                          <span>20/04/2024, 15:00</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Địa Điểm: </S.ItemName>
                          <span>Sân ABC, Đường XYZ</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Cạnh tranh: </S.ItemName>
                          <span>Vui vẻ</span>
                        </S.Item>

                        <S.Item>
                          <S.ItemName>Khu vực: </S.ItemName>
                          <span>Hoà Hải, Ngũ Hành Sơn, Đà Nẵng</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Số lượng: </S.ItemName>
                          <span>12 người</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Tiền sân: </S.ItemName>
                          <span>500.000 VNĐ</span>
                        </S.Item>
                      </S.PropertiesList>
                    </S.MatchProperties>
                  </S.Content>
                </S.Activites>

                <S.Activites>
                  <S.Content>
                    <S.UserAction>Bảo Thắng đã tham gia</S.UserAction>
                    <S.Title> Kèo anh em văn phòng đấm nhau</S.Title>
                    <S.MatchProperties>
                      <S.PropertiesList>
                        <S.Item>
                          <S.ItemName>Thời gian: </S.ItemName>
                          <span>20/04/2024, 15:00</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Địa Điểm: </S.ItemName>
                          <span>Sân ABC, Đường XYZ</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Cạnh tranh: </S.ItemName>
                          <span>Vui vẻ</span>
                        </S.Item>

                        <S.Item>
                          <S.ItemName>Khu vực: </S.ItemName>
                          <span>Hoà Hải, Ngũ Hành Sơn, Đà Nẵng</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Số lượng: </S.ItemName>
                          <span>12 người</span>
                        </S.Item>
                        <S.Item>
                          <S.ItemName>Tiền sân: </S.ItemName>
                          <span>500.000 VNĐ</span>
                        </S.Item>
                      </S.PropertiesList>
                    </S.MatchProperties>
                  </S.Content>
                </S.Activites>
              </S.MatchHistory>
            </S.Right>
          </S.Moreinfor>
        </S.Container>
      </MainLayout>
    </>
  );
}

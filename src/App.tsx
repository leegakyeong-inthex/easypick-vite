import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet } from "react-modal-sheet";
import NavigationBar from "@/components/NavigationBar";
import CardRegistration from "@/components/pages/CardRegistration";
import Notifications from "@/components/pages/Notifications";
import './App.css'

// Icon imports
import martIcon from '@/assets/images/icons/mart.png';
import cafeIcon from '@/assets/images/icons/cafe.png';
import beautyIcon from '@/assets/images/icons/beauty.png';
import sportIcon from '@/assets/images/icons/sport.png';
import movieIcon from '@/assets/images/icons/movie.png';
import notificationsIcon from '@/assets/images/icons/notifications.png';
import arrowLeftIcon from '@/assets/images/icons/arrow-left.png';
import tuneIcon from '@/assets/images/icons/tune.png';
import chevronRightIcon from '@/assets/images/icons/chevron_right.png';
import directionsIcon from '@/assets/images/icons/directions.png';
import callIcon from '@/assets/images/icons/call.png';
import bookmarkIcon from '@/assets/images/icons/bookmark.png';
import grayDotIcon from '@/assets/images/icons/gray-dot.png';
import closeIcon from '@/assets/images/icons/close.png';

// Card and photo imports
import card1 from '@/assets/images/card-1.png';
import card2 from '@/assets/images/card-2.png';
import card3 from '@/assets/images/card-3.png';
import card4 from '@/assets/images/card-4.png';
import mcdonaldsImg from '@/assets/images/mcdonalds.png';
import eventBannerImg from '@/assets/images/event-banner.png';
import photo1 from '@/assets/images/photo-1.png';
import photo2 from '@/assets/images/photo-2.png';

const places = [
  {
    name: "마트",
    iconUrl: martIcon,
  },
  {
    name: "카페",
    iconUrl: cafeIcon,
  },
  {
    name: "뷰티",
    iconUrl: beautyIcon,
  },
  {
    name: "스포츠",
    iconUrl: sportIcon,
  },
  {
    name: "영화",
    iconUrl: movieIcon,
  },
  {
    name: "레스토랑",
    iconUrl: movieIcon,
  },
]

const keywords = [
  '#분위기 좋은 카페',
  '#주말맞이 문화생활',
  '#가족들과 외식',
]

const cardTypes = ['적립형', '할인형', '추천 카드 포함']

const cards = [
  {
    name: "신한카드 청춘대로 톡톡카드",
    spot: "CU 서울숲점",
    description: "대형마트 10%할인",
    image: card1,
  },
  {
    name: "신한카드 청춘대로 톡톡카드",
    spot: "이마트 왕십리점",
    description: "대형마트 10%할인",
    image: card2,
  },
  {
    name: "신한카드 청춘대로 톡톡카드",
    spot: "홈플러스 익스프레스 왕십리점",
    description: "대형마트 10%할인",
    image: card3,
  },
]

const spotCards = [
  {
    company: "신한카드",
    name: "청춘대로 톡톡카드",
    benefit: "5% 할인",
    image: card1,
  },
  {
    company: "삼성카드",
    name: "청춘대로 톡톡카드",
    benefit: "5% 할인",
    image: card2,
  },
]

const photos = [
  photo1,
  photo2,
  photo2,
]

const companies = [
  '전체', '신한', '하나', '삼성', 'BC바로', '현대', '롯데', 'KB국민', '농협', '우리', 'IBK',
]

const ownedCards = [
  {
    name: "신한카드 청춘대로 톡톡카드",
    benefit: "간편결제 10% 청구할인",
    image: card1,
  },
  {
    name: "롯데카드 디지로카 Las Vegas",
    benefit: "국내외 모든 가맹점 최대 2%",
    image: card2,
  },
  {
    name: "삼성카드 모니모니 카드",
    benefit: "포인트를 현금처럼 쓰는 카드",
    image: card3,
  },
  {
    name: "신한카드 청춘대로 톡톡카드",
    benefit: "국내외 모든 가맹점 최대 2%",
    image: card4,
  },
]

const cardBenefits = [
  {
    category: "영화",
    condition: "CGV, 롯데시네마 1만원 이상 결제 시",
    benefit: "회당 5,000원 할인",
    spots: [
      {
        image: mcdonaldsImg,
        name: "CGV 건대입구",
        benefit: "1만원 이상 결제 시 회당 5000원 할인",
        distance: "115m",
      }
    ]
  },
  {
    category: "식당",
    condition: "버거/패스트푸드 업종",
    benefit: "20% 청구",
    spots: [
      {
        image: mcdonaldsImg,
        name: "맥도날드 건대입구",
        benefit: "1만원 이상 결제 시20% 청구 할인",
        distance: "115m",
      },
      {
        image: mcdonaldsImg,
        name: "맥도날드 건대입구",
        benefit: "1만원 이상 결제 시20% 청구 할인",
        distance: "115m",
      },
    ]
  }
]

interface CardBenefitSpot {
  image: string
  name: string
  benefit: string
  distance: string
}

interface CardBenefit {
  category: string
  condition: string
  benefit: string
  spots: CardBenefitSpot[]
}

interface SheetRef {
  snapTo: (index: number) => void
}

export default function Home() {
  const [isLoggedIn, _] = useState<boolean>(false)
  const [selectedBenefit, setselectedBenefit] = useState<string>('place')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLoginSheetOpen, setIsLoginSheetOpen] = useState<boolean>(false)
  const [selectedPlace, setSelectedPlace] = useState<string>('')
  const [selectedSpot, setSelectedSpot] = useState<string>('')
  const [selectedCard, setSelectedCard] = useState<string>('')
  const [isCardRegistrationVisible, setIsCardRegistrationVisible] = useState<boolean>(false)
  const [isNotificationsVisible, setIsNotificationsVisible] = useState<boolean>(false)
  const [selectedKeyword, setSelectedKeyword] = useState<string>('')
  const [isKeywordSheetOpen, setIsKeywordSheetOpen] = useState<boolean>(false)
  const [selectedKeywordSpot, setSelectedKeywordSpot] = useState<string>('')
  const [selectedBenefitSpot, setSelectedBenefitSpot] = useState<CardBenefitSpot | null>(null)
  const [selectedKeywordBenefit, setSelectedKeywordBenefit] = useState<CardBenefit | null>(null)
  const [isBetterCardSheetOpen, setIsBetterCardSheetOpen] = useState<boolean>(false)
  const ref = useRef<SheetRef>(null);
  const snapTo = (i: number): void => ref.current?.snapTo(i);

  useEffect(() => {
    setIsOpen(true)
  }, [])

  // useEffect(() => {
  //   if (selectedBenefit === 'place') {
  //     snapTo(2)
  //   } else {
  //     snapTo(3)
  //   }
  // }, [selectedBenefit])

  return (
    <>
      <div className="absolute top-0 w-full h-[60px] rounded-b-2xl flex justify-center" style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.08)' }}>
        <div className="w-fit h-fit flex items-center mt-1.5 rounded-full font-semibold text-base border border-[#EBEBEB] p-px bg-[#F2F2F2] leading-none">
          <div
            className={`rounded-full px-3.5 py-[9px] ${selectedBenefit === 'place' ? 'selectedBenefit' : 'unselectedBenefit' }`}
            onClick={() => setselectedBenefit('place')}
          >
            장소
          </div>
          <div
            className={`rounded-full px-3.5 py-[9px] ${selectedBenefit === 'card' ? 'selectedBenefit' : 'unselectedBenefit' }`}
            onClick={() => setselectedBenefit('card')}
          >
            카드
          </div>
        </div>
        <img
          src={notificationsIcon}
          width="24"
          height="24"
          alt="알림"
          className="absolute right-[18px] top-3.5 bottom-[22px]"
          onClick={() => {
            setIsNotificationsVisible(true)
          }}
        />
      </div>

      {selectedKeyword && (
        <div className="absolute top-0 w-full h-[60px] bg-white flex items-center" style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.08)' }}>
          <img
            src={arrowLeftIcon}
            width="24"
            height="24"
            alt="뒤로가기"
            className="ml-[17px]"
            onClick={() => {
              setSelectedKeyword('')
              setIsOpen(true)
            }}
          />
          <div className="font-bold text-xl ml-3">{selectedKeyword.substring(1)}</div>
        </div>
      )}

      <Sheet
        // unstyled
        ref={ref}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        snapPoints={[0, 150, 500, 1]}
        // detent="content"
        initialSnap={2}
        className="bottomSheet"
        disableDismiss
      >
        <Sheet.Container style={{ zIndex: 1000, boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)', borderRadius: '18px 18px 0px 0px' }}>
          <Sheet.Header />
          <Sheet.Content>
            {selectedBenefit === 'place' ? (
              <>
                <div className="mb-20 overflow-x-hidden overflow-y-scroll">
                  <div className="font-semibold text-lg tracking-[-2%] mb-4 pl-5">장소 맞춤 카드찾기</div>
                  <div className="flex items-center space-x-4 overflow-x-scroll mb-5 pl-5">
                    {places.map((place) => (
                      <div
                        key={place.name}
                        className="flex flex-col items-center shrink-0"
                        onClick={() => {
                          if (!isLoggedIn) {
                            setIsLoginSheetOpen(!isLoginSheetOpen)
                          }

                          if (selectedPlace && selectedPlace === place.name) {
                            setSelectedPlace('')
                            snapTo(2)
                          } else {
                            setSelectedPlace(place.name)
                            snapTo(3)
                          }
                        }}
                      >
                        <img src={place.iconUrl} width="52" height="52" alt={place.name} className="block mb-[5px]" />
                        <div className="font-medium text-sm">{place.name}</div>
                      </div>
                    ))}
                  </div>
                  <hr className="border-t border-[#F4F4F4] mb-5" />
                  {isLoggedIn && places.find((p) => p.name === selectedPlace) && (
                    <div>
                      <div className="flex items-center space-x-3 mb-1 px-5">
                        <div className="bg-[#F7F8F8] p-[9px] h-10 text-[15px] text-[#5A5B64] shrink-0 rounded-full">
                          <img src={tuneIcon} width="20" height="20" alt="필터" />
                        </div>
                        <div className="flex items-center space-x-1.5">
                          {cardTypes.map((type) => (
                            <div key={type} className="bg-[#F7F8F8] px-3.5 py-2.5 h-10 text-[15px] text-[#5A5B64] shrink-0 rounded-full">{type}</div>
                          ))}
                        </div>
                      </div>
                      <div className="divide-y divide-solid divide-[F4F4F4]">
                        {cards.map((card) => (
                          <div
                            key={card.spot}
                            className="py-4 px-5"
                            onClick={() => {
                              setSelectedSpot(card.spot)
                              snapTo(2)
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <img src={card.image} width="49" height="78" alt={card.name} className="mr-5" />
                                <div>
                                  <div className="flex items-center space-x-0.5">
                                    <div className="font-medium text-[#6D727A] text-[13px]">{card.name}</div>
                                    <img src={chevronRightIcon} width="20" height="20" alt="이동하기" />
                                  </div>
                                  <div className="text-base font-semibold">{card.spot}</div>
                                  <div className="text-[13px] text-[#6D727A]">{card.description}</div>
                                </div>
                              </div>
                              <div className="bg-[#CCE1FF] px-[7px] py-[5px] text-[#0068FF] text-[11px] font-semibold rounded-[20px]">MY</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {!isLoggedIn && (
                    <div className="flex items-center justify-between px-5 pt-2 pb-7 mb-4 border-b border-[#F4F4F4]">
                      <div className="font-semibold text-lg leading-[25px]">카드 등록하고<br />슬기로운 소비생활 시작하기</div>
                      <div
                        className="bg-[#E3EEFF] rounded-full leading-none px-3 py-[9px] font-semibold text-[15px] text-[#0D58BB] h-9"
                        onClick={() => {
                          setIsCardRegistrationVisible(true)
                        }}
                      >카드 등록하기</div>
                    </div>
                  )}
                  <div className="font-semibold text-lg tracking-[-2%] mb-4 pl-5">추천 장소 키워드</div>
                  <div className="flex items-center space-x-1.5 overflow-x-scroll pl-5 mb-4">
                    {keywords.map((keyword) => (
                      <div
                        key={keyword}
                        className="bg-[#F7F8F8] px-3.5 py-2.5 h-10 text-[15px] text-[#5A5B64] shrink-0 rounded-full"
                        onClick={() => {
                          setSelectedKeyword(keyword)
                          setIsKeywordSheetOpen(true)
                          setIsOpen(false)
                        }}
                      >{keyword}</div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center rounded-[20px] mx-5 h-[81px] bg-[#F3F3F3] text-[#5A5B64] text-[15px] leading-[-1%]">광고 영역입니다.</div>
                  <img src={eventBannerImg} width="375" height="300" alt="이벤트 배너" />
                </div>

                {selectedSpot && (
                  <div className="absolute top-0 bg-white w-full">
                    <div className="px-[18px] flex items-center justify-between mb-4">
                      <img
                        src={arrowLeftIcon}
                        width="24"
                        height="24"
                        alt="뒤로가기"
                        onClick={() => {
                          setSelectedSpot('')
                          snapTo(3)
                        }}
                      />
                      <div className="flex items-center space-x-[7px]">
                        <div className="rounded-full bg-[#EEEEEE] p-1.5">
                          <img src={directionsIcon} width="20" height="20" alt="" />
                        </div>
                        <div className="rounded-full bg-[#EEEEEE] p-1.5">
                          <img src={callIcon} width="20" height="20" alt="" />
                        </div>
                        <div className="rounded-full bg-[#EEEEEE] p-1.5">
                          <img src={bookmarkIcon} width="20" height="20" alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="px-[18px] leading-none mb-4">
                      <div className="text-xl font-semibold mb-1">이마트 왕십리점</div>
                      <div className="flex items-center space-x-1 font-medium text-[13px] mb-3">
                        <div>마트</div>
                        <img src={grayDotIcon} width="3" height="3" alt="" />
                        <div>90m</div>
                      </div>
                      <div className="text-sm text-[#6D727A] mb-px">서울 광진구 아차산로 30길 26</div>
                      <div className="flex items-center space-x-1.5 text-sm font-medium">
                        <div>영업중</div>
                        <img src={grayDotIcon} width="3" height="3" alt="" />
                        <div className="text-[#6D727A]">00:00 - 24:00</div>
                      </div>
                    </div>

                    <div className="px-[18px] flex items-center space-x-2 overflow-x-scroll mb-4">
                      {spotCards.map((card) => (
                        <div key={card.company} className="w-[200px] h-[90px] bg-[#F7F8F8] flex items-center p-[7px] rounded-[10px] shrink-0">
                          <img src={card.image} width="49" height="78" alt={card.name} className="grow-0" />
                          <div className="ml-3.5 font-medium">
                            <div className="text-xs text-[#B2B2B2]">{card.company}</div>
                            <div className="text-[13px] text-[#6D727A]">{card.name}</div>
                            <div className="text-[15px] font-semibold">{card.benefit}</div>
                          </div>
                          <div className="bg-[#CCE1FF] px-[7px] py-1 text-[#0068FF] text-[10px] font-semibold rounded-[20px] self-start">MY</div>
                        </div>
                      ))}
                    </div>

                    <div className="px-[18px] flex items-center space-x-2 overflow-x-scroll mb-4">
                      {photos.map((photo, i) => (
                        <img key={photo+i} src={photo} width="149" height="100" alt="" />
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="mb-20 overflow-x-hidden overflow-y-scroll">
                  <div className="font-semibold text-lg tracking-[-2%] mb-4 pl-5">카드 맞춤 장소찾기</div>
                  <div className="flex items-center mx-5 mb-[11px]">
                    <div className="w-[55px] font-semibold shrink-0 text-sm mr-2.5">카드사</div>
                    <div className="flex overflow-x-scroll space-x-1.5">
                      {companies.map((company) => (
                        <div key={company} className="rounded-full bg-[#F7F8F8] px-3.5 py-2.5 text-sm shrink-0 h-9">{company}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex mb-[17px] items-center mx-5">
                    <div className="w-[55px] font-semibold shrink-0 text-sm mr-2.5">카드 유형</div>
                    <div className="flex overflow-x-scroll space-x-1.5">
                      <div className="rounded-full bg-[#F7F8F8] px-3.5 py-2.5 text-sm shrink-0 h-9">전체</div>
                      <div className="rounded-full bg-[#F7F8F8] px-3.5 py-2.5 text-sm shrink-0 h-9">보유카드</div>
                      <div className="rounded-full bg-[#F7F8F8] px-3.5 py-2.5 text-sm shrink-0 h-9">추천카드</div>
                    </div>
                  </div>
                  <hr className="border-[3.5px] border-[#F4F4F4] mb-5" />
                  <div className="ml-5 font-medium text-[15px] text-[#6D727A]">총 4개</div>
                  <div className="divide-y divide-solid divide-[F4F4F4]">
                    {ownedCards.map((card, i) => (
                      <div
                        key={card.name+i}
                        className="flex items-center py-[8.5px] pl-[13px] pr-[18px]"
                        onClick={() => {
                          setSelectedCard(card.name)
                        }}
                      >
                        <img src={card.image} width="49" height="78" alt={card.name} className="mr-5" />
                        <div className="flex-1">
                          <div className="font-medium text-[#6D727A] text-[13px]">{card.name}</div>
                          <div className="font-semibold text-base">{card.benefit}</div>
                        </div>
                        <div className="bg-[#CCE1FF] px-[7px] py-[5px] text-[#0068FF] text-[11px] font-semibold rounded-[20px] leading-none">MY</div>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedCard && (
                  <div className="absolute top-0 bg-white w-full">
                    <div className="px-[18px] flex items-center mb-[7px]">
                      <img
                        src={arrowLeftIcon}
                        width="24"
                        height="24"
                        alt="뒤로가기"
                        onClick={() => {
                          setSelectedCard('')
                          // snapTo(3)
                        }}
                      />
                      <div className="ml-[5px] text-lg font-semibold">{selectedCard}</div>
                      <div className="ml-auto rounded-full px-3 py-[7px] border border-[#EBEBEB] text-[#5A5B64] text-[13px] font-semibold">카드 상세</div>
                    </div>
                    <div className="divide-y divide-solid divide-[F4F4F4]">
                      {cardBenefits.map((benefit) => (
                        <div key={benefit.category} className="mt-[27px]">
                          <div className="flex items-start px-[18px] mb-[22px]">
                            <div className="bg-[#F3F3F3] rounded-full px-[9px] py-[5px] font-semibold text-[15px]">{benefit.category}</div>
                            <div className="ml-[31px]">
                              <div className="text-[13px] text-[#6D727A] font-medium">{benefit.condition}</div>
                              <div className="text-base font-semibold">{benefit.benefit}</div>
                            </div>
                          </div>
                          <div
                            className="mx-[18px] bg-[#0B0D0F] flex items-center justify-center text-white py-3 rounded-[10px] h-10 mb-3 cursor-pointer"
                            onClick={() => setIsBetterCardSheetOpen(true)}
                          >더 나은 혜택 카드 보기</div>
                          {benefit.spots.map((spot, i) => (
                            <div
                              key={spot.name+i}
                              className="flex items-center mx-[18px] rounded-[13px] bg-[#F8F8F8] border border-[#F4F4F4] px-2 py-3.5 mb-[7px] last:mb-[30px] cursor-pointer"
                              onClick={() => {
                                setSelectedKeywordBenefit(benefit)
                                setSelectedBenefitSpot(spot)
                              }}
                            >
                              <img src={spot.image} width="34" height="34" alt="" />
                              <div className="flex-1 ml-[11px]">
                                <div className="font-semibold text-[13px]">{spot.name}</div>
                                <div className="font-medium text-[13px] text-[#6D727A]">{spot.benefit}</div>
                              </div>
                              <div className="bg-white border border-[#EBEBEB] rounded-full px-2 py-1 font-medium text-[13px] text-[#5A5B64]">{spot.distance}</div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </Sheet.Content>
        </Sheet.Container>
        {/* <Sheet.Backdrop style={{ zIndex: 500 }} /> */}
      </Sheet>

      {!isLoggedIn && places.find((p) => p.name === selectedPlace) && (
        <Sheet
          isOpen={isLoginSheetOpen}
          onClose={() => setIsLoginSheetOpen(false)}
          snapPoints={[0, 200, 1]}
          // detent="content"
          initialSnap={1}
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              <div>
                <div className="px-5 font-semibold text-lg leading-[25px] mb-8">로그인하고 내 소비패턴에 맞는<br />카드 혜택과 이벤트를 확인해보세요.</div>
                <div className="px-[18px]">
                  <Button>로그인하고 확인하기</Button>
                </div>
              </div>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop onClick={() => setIsLoginSheetOpen(false)} />
        </Sheet>
      )}

      <NavigationBar />

      {isCardRegistrationVisible && <CardRegistration setIsVisible={setIsCardRegistrationVisible} />}

      {selectedKeyword && (
        <Sheet
          isOpen={isKeywordSheetOpen}
          onClose={() => {
            setIsKeywordSheetOpen(false)
            setSelectedKeyword('')
          }}
          snapPoints={[0, 200, 1]}
          initialSnap={1}
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              {!selectedKeywordSpot ? (
                <div className="mb-20 overflow-x-hidden overflow-y-scroll">
                  <div className="flex items-center space-x-3 mb-2 px-5">
                    <div className="bg-[#F7F8F8] p-[9px] h-10 text-[15px] text-[#5A5B64] shrink-0 rounded-full">
                      <img src={tuneIcon} width="20" height="20" alt="필터" />
                    </div>
                    <div className="flex items-center space-x-1.5">
                      {cardTypes.map((type) => (
                        <div key={type} className="bg-[#F7F8F8] px-3.5 py-2.5 h-10 text-[15px] text-[#5A5B64] shrink-0 rounded-full">{type}</div>
                      ))}
                    </div>
                  </div>
                  <div className="divide-y divide-solid divide-[#F4F4F4]">
                    {cards.map((card) => (
                      <div
                        key={card.spot}
                        className="py-4 px-5 cursor-pointer"
                        onClick={() => setSelectedKeywordSpot(card.spot)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img src={card.image} width="49" height="78" alt={card.name} className="mr-5" />
                            <div>
                              <div className="flex items-center space-x-0.5">
                                <div className="font-medium text-[#6D727A] text-[13px]">{card.name}</div>
                                <img src={chevronRightIcon} width="20" height="20" alt="이동하기" />
                              </div>
                              <div className="text-base font-semibold">{card.spot}</div>
                              <div className="text-[13px] text-[#6D727A]">{card.description}</div>
                            </div>
                          </div>
                          <div className="bg-[#CCE1FF] px-[7px] py-[5px] text-[#0068FF] text-[11px] font-semibold rounded-[20px]">MY</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mb-20 overflow-x-hidden overflow-y-scroll">
                  <div className="px-[18px] flex items-center justify-between mb-4">
                    <img
                      src={arrowLeftIcon}
                      width="24"
                      height="24"
                      alt="뒤로가기"
                      className="cursor-pointer"
                      onClick={() => setSelectedKeywordSpot('')}
                    />
                    <div className="flex items-center space-x-[7px]">
                      <div className="rounded-full bg-[#EEEEEE] p-1.5">
                        <img src={directionsIcon} width="20" height="20" alt="" />
                      </div>
                      <div className="rounded-full bg-[#EEEEEE] p-1.5">
                        <img src={callIcon} width="20" height="20" alt="" />
                      </div>
                      <div className="rounded-full bg-[#EEEEEE] p-1.5">
                        <img src={bookmarkIcon} width="20" height="20" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="px-[18px] leading-none mb-4">
                    <div className="text-xl font-semibold mb-1">{selectedKeywordSpot}</div>
                    <div className="flex items-center space-x-1 font-medium text-[13px] mb-3">
                      <div>카페</div>
                      <img src={grayDotIcon} width="3" height="3" alt="" />
                      <div>90m</div>
                    </div>
                    <div className="text-sm text-[#6D727A] mb-px">서울 광진구 아차산로 30길 26</div>
                    <div className="flex items-center space-x-1.5 text-sm font-medium">
                      <div>영업중</div>
                      <img src={grayDotIcon} width="3" height="3" alt="" />
                      <div className="text-[#6D727A]">00:00 - 24:00</div>
                    </div>
                  </div>

                  <div className="px-[18px] flex items-center space-x-2 overflow-x-scroll mb-4">
                    {spotCards.map((card) => (
                      <div key={card.company} className="w-[200px] h-[90px] bg-[#F7F8F8] flex items-center p-[7px] rounded-[10px] shrink-0">
                        <img src={card.image} width="49" height="78" alt={card.name} className="grow-0" />
                        <div className="ml-3.5 font-medium">
                          <div className="text-xs text-[#B2B2B2]">{card.company}</div>
                          <div className="text-[13px] text-[#6D727A]">{card.name}</div>
                          <div className="text-[15px] font-semibold">{card.benefit}</div>
                        </div>
                        <div className="bg-[#CCE1FF] px-[7px] py-1 text-[#0068FF] text-[10px] font-semibold rounded-[20px] self-start">MY</div>
                      </div>
                    ))}
                  </div>

                  <div className="px-[18px] flex items-center space-x-2 overflow-x-scroll mb-4">
                    {photos.map((photo, i) => (
                      <img key={photo+i} src={photo} width="149" height="100" alt="" />
                    ))}
                  </div>
                </div>
              )}
            </Sheet.Content>
          </Sheet.Container>
        </Sheet>
      )}

      {selectedKeywordBenefit && (
        <Sheet
          isOpen={!!selectedKeywordBenefit}
          onClose={() => setSelectedKeywordBenefit(null)}
          snapPoints={[0, 200, 1]}
          initialSnap={1}
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              {!selectedBenefitSpot ? (
                <div className="mb-20 overflow-x-hidden overflow-y-scroll">
                  <div className="px-[18px] flex items-center justify-between mb-4">
                    <img
                      src={arrowLeftIcon}
                      width="24"
                      height="24"
                      alt="뒤로가기"
                      className="cursor-pointer"
                      onClick={() => setSelectedKeywordBenefit(null)}
                    />
                    <div className="flex items-center space-x-[7px]">
                      <div className="rounded-full bg-[#EEEEEE] p-1.5">
                        <img src={directionsIcon} width="20" height="20" alt="" />
                      </div>
                      <div className="rounded-full bg-[#EEEEEE] p-1.5">
                        <img src={callIcon} width="20" height="20" alt="" />
                      </div>
                      <div className="rounded-full bg-[#EEEEEE] p-1.5">
                        <img src={bookmarkIcon} width="20" height="20" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="px-[18px] leading-none mb-4">
                    <div className="text-xl font-semibold mb-1">{selectedKeywordSpot}</div>
                    <div className="flex items-center space-x-1 font-medium text-[13px] mb-3">
                      <div>{selectedKeywordBenefit.category}</div>
                      <img src={grayDotIcon} width="3" height="3" alt="" />
                      <div>90m</div>
                    </div>
                    <div className="text-sm text-[#6D727A] mb-px">서울 광진구 아차산로 30길 26</div>
                    <div className="flex items-center space-x-1.5 text-sm font-medium">
                      <div>영업중</div>
                      <img src={grayDotIcon} width="3" height="3" alt="" />
                      <div className="text-[#6D727A]">00:00 - 24:00</div>
                    </div>
                  </div>

                  <div className="px-[18px] flex items-center space-x-2 overflow-x-scroll mb-4">
                    {spotCards.map((card) => (
                      <div key={card.company} className="w-[200px] h-[90px] bg-[#F7F8F8] flex items-center p-[7px] rounded-[10px] shrink-0">
                        <img src={card.image} width="49" height="78" alt={card.name} className="grow-0" />
                        <div className="ml-3.5 font-medium">
                          <div className="text-xs text-[#B2B2B2]">{card.company}</div>
                          <div className="text-[13px] text-[#6D727A]">{card.name}</div>
                          <div className="text-[15px] font-semibold">{card.benefit}</div>
                        </div>
                        <div className="bg-[#CCE1FF] px-[7px] py-1 text-[#0068FF] text-[10px] font-semibold rounded-[20px] self-start">MY</div>
                      </div>
                    ))}
                  </div>

                  <div className="px-[18px] flex items-center space-x-2 overflow-x-scroll mb-4">
                    {photos.map((photo, i) => (
                      <img key={photo+i} src={photo} width="149" height="100" alt="" />
                    ))}
                  </div>

                  <div className="divide-y divide-solid divide-[#F4F4F4]">
                    {selectedKeywordBenefit.spots.map((spot, i) => (
                      <div
                        key={spot.name+i}
                        className="flex items-center mx-[18px] rounded-[13px] bg-[#F8F8F8] border border-[#F4F4F4] px-2 py-3.5 mb-[7px] last:mb-[30px] cursor-pointer"
                        onClick={() => setSelectedBenefitSpot(spot)}
                      >
                        <img src={spot.image} width="34" height="34" alt="" />
                        <div className="flex-1 ml-[11px]">
                          <div className="font-semibold text-[13px]">{spot.name}</div>
                          <div className="font-medium text-[13px] text-[#6D727A]">{spot.benefit}</div>
                        </div>
                        <div className="bg-white border border-[#EBEBEB] rounded-full px-2 py-1 font-medium text-[13px] text-[#5A5B64]">{spot.distance}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mb-20 overflow-x-hidden overflow-y-scroll">
                  <div className="px-[18px] flex items-center justify-between mb-4">
                    <img
                      src={arrowLeftIcon}
                      width="24"
                      height="24"
                      alt="뒤로가기"
                      className="cursor-pointer"
                      onClick={() => setSelectedBenefitSpot(null)}
                    />
                    <div className="flex items-center space-x-[7px]">
                      <div className="rounded-full bg-[#EEEEEE] p-1.5">
                        <img src={directionsIcon} width="20" height="20" alt="" />
                      </div>
                      <div className="rounded-full bg-[#EEEEEE] p-1.5">
                        <img src={callIcon} width="20" height="20" alt="" />
                      </div>
                      <div className="rounded-full bg-[#EEEEEE] p-1.5">
                        <img src={bookmarkIcon} width="20" height="20" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="px-[18px] leading-none mb-4">
                    <div className="text-xl font-semibold mb-1">{selectedBenefitSpot.name}</div>
                    <div className="flex items-center space-x-1 font-medium text-[13px] mb-3">
                      <div>{selectedKeywordBenefit.category}</div>
                      <img src={grayDotIcon} width="3" height="3" alt="" />
                      <div>{selectedBenefitSpot.distance}</div>
                    </div>
                    <div className="text-sm text-[#6D727A] mb-px">서울 광진구 아차산로 30길 26</div>
                    <div className="flex items-center space-x-1.5 text-sm font-medium">
                      <div>영업중</div>
                      <img src={grayDotIcon} width="3" height="3" alt="" />
                      <div className="text-[#6D727A]">00:00 - 24:00</div>
                    </div>
                  </div>

                  <div className="px-[18px] flex items-center space-x-2 overflow-x-scroll mb-4">
                    {spotCards.map((card) => (
                      <div key={card.company} className="w-[200px] h-[90px] bg-[#F7F8F8] flex items-center p-[7px] rounded-[10px] shrink-0">
                        <img src={card.image} width="49" height="78" alt={card.name} className="grow-0" />
                        <div className="ml-3.5 font-medium">
                          <div className="text-xs text-[#B2B2B2]">{card.company}</div>
                          <div className="text-[13px] text-[#6D727A]">{card.name}</div>
                          <div className="text-[15px] font-semibold">{card.benefit}</div>
                        </div>
                        <div className="bg-[#CCE1FF] px-[7px] py-1 text-[#0068FF] text-[10px] font-semibold rounded-[20px] self-start">MY</div>
                      </div>
                    ))}
                  </div>

                  <div className="px-[18px] flex items-center space-x-2 overflow-x-scroll mb-4">
                    {photos.map((photo, i) => (
                      <img key={photo+i} src={photo} width="149" height="100" alt="" />
                    ))}
                  </div>
                </div>
              )}
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop onClick={() => {
            setSelectedKeywordBenefit(null)
            setSelectedBenefitSpot(null)
          }} />
        </Sheet>
      )}

      {isBetterCardSheetOpen && (
        <Sheet
          isOpen={isBetterCardSheetOpen}
          onClose={() => setIsBetterCardSheetOpen(false)}
          snapPoints={[0, 510, 1]}
          initialSnap={1}
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              <div className="mb-20 overflow-x-hidden overflow-y-scroll">
                <div className="px-5 flex items-center justify-between mb-8">
                  <div className="font-semibold text-lg leading-[25px]">더 나은 영화 혜택 카드</div>
                  <img
                    src={closeIcon}
                    width="24"
                    height="24"
                    alt="닫기"
                    className="cursor-pointer"
                    onClick={() => setIsBetterCardSheetOpen(false)}
                  />
                </div>
                <div className="divide-y divide-solid divide-[#F4F4F4]">
                  {ownedCards.map((card, i) => (
                    <div key={card.name+i} className="flex items-center py-4 px-5">
                      <img src={card.image} width="54" height="86" alt={card.name} className="mr-5" />
                      <div className="flex-1">
                        <div className="font-medium text-[#6D727A] text-[13px] mb-1">{card.name}</div>
                        <div className="font-semibold text-base">{card.benefit}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop onClick={() => setIsBetterCardSheetOpen(false)} />
        </Sheet>
      )}

      {isNotificationsVisible && <Notifications setIsVisible={setIsNotificationsVisible} />}
    </>
  )
}

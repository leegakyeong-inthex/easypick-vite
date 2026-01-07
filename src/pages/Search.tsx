import { useState, useRef, useEffect } from "react";
import { Sheet } from "react-modal-sheet";
import card1 from '@/assets/images/card-1.png';
import card2 from '@/assets/images/card-2.png';
import arrowLeftIcon from '@/assets/images/icons/arrow-left.png';
import directionsIcon from '@/assets/images/icons/directions.png';
import callIcon from '@/assets/images/icons/call.png';
import bookmarkIcon from '@/assets/images/icons/bookmark.png';
import grayDotIcon from '@/assets/images/icons/gray-dot.png';
import photo1 from '@/assets/images/photo-1.png';
import photo2 from '@/assets/images/photo-2.png';
import { Input } from "@/components/ui/input";
import martIcon from '@/assets/images/icons/mart.png';
import cafeIcon from '@/assets/images/icons/cafe.png';
import beautyIcon from '@/assets/images/icons/beauty.png';
import sportIcon from '@/assets/images/icons/sport.png';
import movieIcon from '@/assets/images/icons/movie.png';
import restaurantIcon from '@/assets/images/icons/restaurant.png';
import closeIcon from '@/assets/images/icons/close.png';
import exploreNearbyIcon from '@/assets/images/icons/explore_nearby.png';
import scheduleIcon from '@/assets/images/icons/schedule.png';
import locationOnIcon from '@/assets/images/icons/location_on.png';
import callGrayIcon from '@/assets/images/icons/call_gray.png';
import languageIcon from '@/assets/images/icons/language.png';
import SheetHeader from "@/components/SheetHeader";
import map1 from '@/assets/images/map-1.png';
import naverMapIcon from '@/assets/images/icons/naver_map.png';
import kakaoMapIcon from '@/assets/images/icons/kakao_map.png';
import { useNavigate, useSearchParams } from 'react-router'

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

const recentSearches = [
  "CGV 건대입구",
  "롯데시네마",
  "영화관",
  "CGV 뚝섬역점",
];

const searchResults = {
  "cgv": [
    { id: 1, name: "CGV 건대입구", address: "서울 광진구 아차산로30길 26", distance: "119m", category: "영화", phone: "1544-1122", website: "http://cgv.co.kr/cnm/bzpicCgv/0229001" },
    { id: 2, name: "CGV 건대입구", address: "서울 광진구 아차산로30길 26", distance: "119m", category: "영화", phone: "1544-1122", website: "http://cgv.co.kr/cnm/bzpicCgv/0229001" },
    { id: 3, name: "CGV 건대입구", address: "서울 광진구 아차산로30길 26", distance: "119m", category: "영화", phone: "1544-1122", website: "http://cgv.co.kr/cnm/bzpicCgv/0229001" },
  ],
  "cgv 건대입구역": [
    { id: 1, name: "CGV 건대입구역", address: "서울 광진구 아차산로 30길 26", distance: "900m", category: "영화", phone: "1544-1122", website: "http://cgv.co.kr/cnm/bzpicCgv/0229001" }
  ],
  "마트": [
    { id: 1, name: "홈플러스 건대입구", address: "서울 광진구 아차산로30길 26", distance: "119m", category: "영화", phone: "1544-1122", website: "http://cgv.co.kr/cnm/bzpicCgv/0229001" },
    { id: 2, name: "홈플러스 건대입구", address: "서울 광진구 아차산로30길 26", distance: "119m", category: "영화", phone: "1544-1122", website: "http://cgv.co.kr/cnm/bzpicCgv/0229001" },
    { id: 3, name: "홈플러스 건대입구", address: "서울 광진구 아차산로30길 26", distance: "119m", category: "영화", phone: "1544-1122", website: "http://cgv.co.kr/cnm/bzpicCgv/0229001" },
  ],
  "카페": [
    { id: 1, name: "메가커피 건대입구", address: "서울 광진구 아차산로30길 26", distance: "119m", category: "영화", phone: "1544-1122", website: "http://cgv.co.kr/cnm/bzpicCgv/0229001" },
    { id: 2, name: "메가커피 건대입구", address: "서울 광진구 아차산로30길 26", distance: "119m", category: "영화", phone: "1544-1122", website: "http://cgv.co.kr/cnm/bzpicCgv/0229001" },
    { id: 3, name: "메가커피 건대입구", address: "서울 광진구 아차산로30길 26", distance: "119m", category: "영화", phone: "1544-1122", website: "http://cgv.co.kr/cnm/bzpicCgv/0229001" },
  ],
};

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
    iconUrl: restaurantIcon,
  },
]

interface SheetRef {
  snapTo: (index: number) => void
}

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [currentSnapPoint, setCurrentSnapPoint] = useState(1);
  const ref = useRef<SheetRef>(null);
  const [isDirectionSheetOpen, setIsDirectionSheetOpen] = useState(false);
  const navigate = useNavigate()

  const [searchParams, _] = useSearchParams();

  const nearMe = searchParams.get('near');

  useEffect(() => {
    if (nearMe === '마트' || nearMe === '카페') {
      setSearchInput(nearMe)
      setIsSheetOpen(true);
      setCurrentSnapPoint(1);
    }
  }, [nearMe])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchInput.trim()) {
      setIsSheetOpen(true);
      setCurrentSnapPoint(1);
    }
  };

  const currentResults = searchResults[searchInput.toLowerCase() as keyof typeof searchResults] || [];
  const showRecentSearches = !searchInput.trim();
  const isDetailedResult = currentResults.length === 1;
  // const isExpanded = currentSnapPoint === 3;

  return (
    <>
      {isSheetOpen && currentSnapPoint !== 3 && <img src={map1} width="375" height="auto" alt="배경 이미지" className="absolute top-0 left-0 w-full h-full object-cover" />}
      <div className="flex flex-col min-h-full bg-white">
        {(currentSnapPoint === 3 && isDetailedResult) ? (
          <div className="bg-white w-full px-[18px] flex items-center justify-between h-[60px]">
            <img
              src={arrowLeftIcon}
              width="24"
              height="24"
              alt="뒤로가기"
              onClick={() => {
                setIsSheetOpen(false)
                setCurrentSnapPoint(0)
              }}
            />
            <div className="flex items-center space-x-[7px]">
              <div className="rounded-full bg-[#EEEEEE] p-1.5" onClick={() => setIsDirectionSheetOpen(true)}>
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
        ) : (
          <div className="w-full h-[60px] flex justify-between items-center px-[18px] z-50 bg-white" style={{ boxShadow: (isSheetOpen && currentSnapPoint !== 3) ? '0px 4px 10px 0px rgba(0, 0, 0, 0.08)' : 'none' }}>
            <div className="flex items-center justify-center mr-2.5 min-w-6">
              <img
                src={arrowLeftIcon}
                width="24"
                height="24"
                alt="뒤로가기"
                onClick={() => {
                  if (isSheetOpen) {
                    setIsSheetOpen(false)
                    setCurrentSnapPoint(0)
                  } else {
                    navigate(-1);
                  }
                }}
              />
            </div>
            <Input
              placeholder="검색어를 입력하세요"
              className="w-full h-10"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        )}

        {/* Recent Searches or Search Results Overlay */}
        {!isSheetOpen && (
          <div className="pb-4 overflow-y-auto">
            {showRecentSearches ? (
              <div>
                <div className="mt-2 flex items-center space-x-4 overflow-x-scroll pb-[19px] px-[18px] border-b border-[#F4F4F4]">
                  {places.map((place) => (
                    <div
                      key={place.name}
                      className="flex flex-col items-center shrink-0"
                    >
                      <img src={place.iconUrl} width="52" height="52" alt={place.name} className="block mb-[5px]" />
                      <div className="font-medium text-sm">{place.name}</div>
                    </div>
                  ))}
                </div>

                <div className="px-[18px] flex items-center justify-between mb-3.5 mt-5">
                  <div className="text-[15px] font-semibold">최근 검색</div>
                  <div className="text-[13px] text-[#686B70]">전체 삭제</div>
                </div>
                <div className="space-y-3">
                  {recentSearches.map((search, index) => (
                    <div
                      key={index}
                      className="px-[18px] mb-[0px] flex items-center justify-between cursor-pointer py-3.5 text-base font-medium border-b border-[#F4F4F4]"
                      onClick={() => setSearchInput(search)}
                    >
                      <div className="flex items-center">
                        <img src={exploreNearbyIcon} width="28" height="28" alt="최근 검색어" className="mr-[4.5px]" />
                        <div>{search}</div>
                      </div>
                      <img src={closeIcon} width="20" height="20" alt="삭제" />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-4">
                <div className="space-y-2">
                  {currentResults.length > 0 ? (
                    currentResults.map((result) => (
                      <div
                        key={result.id}
                        className="px-[18px] mb-[0px] flex items-center justify-between cursor-pointer py-3.5 text-base font-medium border-b border-[#F4F4F4]"
                        onClick={() => setIsSheetOpen(true)}
                      >
                        <div className="flex items-center">
                          <img src={exploreNearbyIcon} width="28" height="28" alt="최근 검색어" className="mr-2" />
                          <div>
                            <div>
                              <div className="flex items-center space-x-[5px] mb-[5px]">
                                <div className="font-medium text-base leading-[19px]">{result.name}</div>
                                <div className="font-medium text-xs text-[#B2B2B2]">{result.category}</div>
                              </div>
                              <div className="font-medium text-[13px] text-[#6D727A] leading-4">{result.address}</div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[25px] px-[9px] rounded-full border border-[#EBEBEB] text-[#5A5B64] text-xs font-medium leading-[23px]">{result.distance}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-[#999]">검색 결과가 없습니다</div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Sheet */}
        <Sheet
          ref={ref}
          isOpen={isSheetOpen}
          onClose={() => setIsSheetOpen(false)}
          snapPoints={[0, 165, 448, 1]}
          initialSnap={2}
          className="bottomSheet"
          disableDismiss
          onSnap={(snapIndex) => setCurrentSnapPoint(snapIndex)}
        >
          <Sheet.Container
            style={{
              zIndex: 1000,
              boxShadow: currentSnapPoint === 3 ? '' : '0px 4px 10px 0px rgba(0, 0, 0, 0.12)',
              borderRadius: currentSnapPoint === 3 ? '' : '18px 18px 0px 0px',
              maxHeight: window.innerHeight - 60
            }}
            // className="max-h-[calc(100vh-26px)] overflow-y-auto"
          >
            {currentSnapPoint === 3 ? (
              // <Sheet.Header>
              //   <div className="h-5"></div>
              // </Sheet.Header>
              <></>
            ) : (
              <SheetHeader />
            )}
            <Sheet.Content>
              <div className="absolute top-0 bg-white w-full">
                {isDetailedResult ? (
                  // Detailed view for single result
                  <div className="pb-8">
                    {currentResults.map((result) => (
                      <div key={result.id}>
                        <div className={`px-[18px] leading-none pt-4 ${currentSnapPoint === 3 ? 'mb-5' : 'mb-3.5'}`}>
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-xl font-semibold">{result.name}</div>
                            {/* <div className="rounded-full bg-[#EEEEEE] p-1.5">
                              <img src={bookmarkIcon} width="20" height="20" alt="" />
                            </div> */}
                          </div>
                          <div className="flex items-center space-x-1 font-medium text-[13px] mb-3">
                            <div>{result.category}</div>
                            <img src={grayDotIcon} width="3" height="3" alt="" />
                            <div>{result.distance}</div>
                          </div>
                          {currentSnapPoint !== 3 && (
                            <>
                              <div className="text-sm text-[#6D727A] mb-px">{result.address}</div>
                              <div className="flex items-center space-x-1.5 text-sm font-medium">
                                <div>영업중</div>
                                <img src={grayDotIcon} width="3" height="3" alt="" />
                                <div className="text-[#6D727A]">00:00 - 24:00</div>
                              </div>
                            </>
                          )}
                        </div>

                        {currentSnapPoint !== 3 && (
                          <div className="px-[18px] flex items-center space-x-2.5 mb-4">
                            <button className="flex items-center justify-center space-x-1 w-[30px] h-[30px] bg-[#F4F4F4] rounded-full" onClick={() => setIsDirectionSheetOpen(true)}>
                              <img src={directionsIcon} width="20" height="20" alt="방향" />
                            </button>
                            <button className="flex items-center justify-center space-x-1 w-[30px] h-[30px] bg-[#F4F4F4] rounded-full">
                              <img src={callIcon} width="20" height="20" alt="전화" />
                            </button>
                            <button className="flex items-center justify-center space-x-1 w-[30px] h-[30px] bg-[#F4F4F4] rounded-full">
                              <img src={bookmarkIcon} width="20" height="20" alt="북마크" />
                            </button>
                          </div>
                        )}

                        <div className="px-[18px] flex items-center space-x-2 overflow-x-scroll mb-4">
                          {spotCards.map((card) => (
                            <div key={card.company} className="w-[200px] h-[90px] bg-[#F7F8F8] flex items-center p-[7px] rounded-[10px] shrink-0">
                              <img src={card.image} width="49" height="78" alt={card.name} className="grow-0" />
                              <div className="ml-3.5 font-medium">
                                <div className="text-xs text-[#B2B2B2] mb-[3px]">{card.company}</div>
                                <div className="text-[13px] text-[#6D727A] mb-2">{card.name}</div>
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

                        {currentSnapPoint === 3 && (
                          <div className="mb-4">
                            <div className="px-[18px] flex items-center pb-2.5 border-b border-[#F4F4F4] mb-2.5">
                              <img src={scheduleIcon} width="20" height="20" alt="운영시간" className="mr-2" />
                              <div className="text-sm font-semibold ">영업중</div>
                              <img src={grayDotIcon} width="3" height="3" alt="" className="mx-[7px]" />
                              <div className="text-sm text-[#6D727A]">24:00 까지</div>
                            </div>
                            <div className="px-[18px] flex items-center pb-2.5 border-b border-[#F4F4F4] mb-2.5">
                              <img src={locationOnIcon} width="20" height="20" alt="주소" className="mr-2" />
                              <div className="text-sm">{result.address}</div>
                            </div>
                            {result.phone && (
                              <div className="px-[18px] flex items-center pb-2.5 border-b border-[#F4F4F4] mb-2.5">
                                <img src={callGrayIcon} width="20" height="20" alt="전화번호" className="mr-2 inline-block" />
                                <div className="text-sm font-medium">{result.phone}</div>
                              </div>
                            )}
                            {result.website && (
                              <div className="px-[18px] flex items-center pb-2.5 mb-2.5">
                                <img src={languageIcon} width="20" height="20" alt="웹사이트" className="mr-2 inline-block" />
                                <div className="text-sm text-[#007BFE] break-all">{result.website}</div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  // Expanded view showing all details
                  <div className="pb-8 divide-y divide-[#F4F4F4]">
                    {currentResults.map((result) => (
                      <div key={result.id} className="py-2">
                        <div className="px-[18px] leading-none mb-4 pt-4">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-xl font-semibold">{result.name}</div>
                            <div className="rounded-full bg-[#EEEEEE] p-1.5">
                              <img src={bookmarkIcon} width="20" height="20" alt="" />
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 font-medium text-[13px] mb-3">
                            <div>{result.category}</div>
                            <img src={grayDotIcon} width="3" height="3" alt="" />
                            <div>{result.distance}</div>
                          </div>
                          <div className="text-sm text-[#6D727A] mb-px">{result.address}</div>
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
                                <div className="text-xs text-[#B2B2B2] mb-[3px]">{card.company}</div>
                                <div className="text-[13px] text-[#6D727A] mb-2">{card.name}</div>
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
                    ))}
                  </div>
                )}
              </div>
            </Sheet.Content>
          </Sheet.Container>
        </Sheet>

        <Sheet
          ref={ref}
          isOpen={isDirectionSheetOpen}
          onClose={() => setIsDirectionSheetOpen(false)}
          snapPoints={[0, 171, 1]}
          initialSnap={1}
          className="bottomSheet"
          disableDismiss
          // onSnap={(snapIndex) => setCurrentSnapPoint(snapIndex)}
        >
          <Sheet.Container
            style={{
              zIndex: 1001,
              boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)',
              borderRadius: '18px 18px 0px 0px'
            }}
            className="max-h-[171px]"
          >
            <SheetHeader />
            <Sheet.Content>
              <div className="px-5 pt-[5px] flex flex-col space-y-[22px]">
                <div className="flex items-center">
                  <img src={naverMapIcon} width="36" height="36" alt="네이버 지도" className="mr-[15px]" />
                  <div className="text-base font-medium">네이버 지도</div>
                </div>
                <div className="flex items-center">
                  <img src={kakaoMapIcon} width="36" height="36" alt="네이버 지도" className="mr-[15px]" />
                  <div className="text-base font-medium">카카오 맵</div>
                </div>
              </div>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop onClick={() => setIsDirectionSheetOpen(false)} />
        </Sheet>
      </div>
    </>
  )
}

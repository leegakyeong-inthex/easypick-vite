import { useState, useRef } from "react";
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
import { useNavigate } from "react-router";
import martIcon from '@/assets/images/icons/mart.png';
import cafeIcon from '@/assets/images/icons/cafe.png';
import beautyIcon from '@/assets/images/icons/beauty.png';
import sportIcon from '@/assets/images/icons/sport.png';
import movieIcon from '@/assets/images/icons/movie.png';
import restaurantIcon from '@/assets/images/icons/restaurant.png';
import closeIcon from '@/assets/images/icons/close.png';
import exploreNearbyIcon from '@/assets/images/icons/explore_nearby.png';

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
    { id: 1, name: "CGV 건대입구", address: "서울 광진구 아차산로30길 26", distance: "119m" },
    { id: 2, name: "CGV 건대입구", address: "서울 광진구 아차산로30길 26", distance: "119m" },
    { id: 3, name: "CGV 건대입구", address: "서울 광진구 아차산로30길 26", distance: "119m" },
  ]
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

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const ref = useRef<Sheet>(null);
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchInput.trim()) {
      setIsSheetOpen(true);
    }
  };

  const currentResults = searchResults[searchInput.toLowerCase() as keyof typeof searchResults] || [];
  const showRecentSearches = !searchInput.trim();

  return (
    <div className="flex flex-col min-h-full bg-white">
      <div className="w-full h-[60px] flex justify-between items-center px-[18px] z-50">
        <div className="flex items-center justify-center mr-2.5 min-w-6">
          <img
            src={arrowLeftIcon}
            width="24"
            height="24"
            alt="뒤로가기"
            onClick={() => {
              navigate(-1);
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
                    // <div
                    //   key={result.id}
                    //   className="p-3 border-b border-[#EEEEEE] cursor-pointer hover:bg-[#F7F8F8] rounded"
                    //   onClick={() => setIsSheetOpen(true)}
                    // >
                    //   <div className="font-medium text-sm mb-1">{result.name}</div>
                    //   <div className="flex items-center space-x-1 text-xs text-[#999]">
                    //     <span>{result.distance}</span>
                    //     <span>·</span>
                    //     <span>{result.address}</span>
                    //   </div>
                    // </div>
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
                              <div className="font-medium text-xs text-[#B2B2B2]">영화</div>
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
        snapPoints={[0, 150, 654, 1]}
        initialSnap={1}
        className="bottomSheet"
        disableDismiss
      >
        <Sheet.Container
          style={{
            zIndex: 1000,
            boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)',
            borderRadius: '18px 18px 0px 0px'
          }}
          className="max-h-[750px]"
        >
          <Sheet.Header />
          <Sheet.Content>
            <div className="absolute top-0 bg-white w-full">
              <div className="px-[18px] leading-none mb-4">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-xl font-semibold">CGV 건대입구역</div>
                  <div className="rounded-full bg-[#EEEEEE] p-1.5">
                    <img src={bookmarkIcon} width="20" height="20" alt="" />
                  </div>
                </div>
                <div className="flex items-center space-x-1 font-medium text-[13px] mb-3">
                  <div>영화</div>
                  <img src={grayDotIcon} width="3" height="3" alt="" />
                  <div>900m</div>
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

              <div className="px-[18px] leading-none mb-4">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-xl font-semibold">CGV 건대입구역</div>
                  <div className="rounded-full bg-[#EEEEEE] p-1.5">
                    <img src={bookmarkIcon} width="20" height="20" alt="" />
                  </div>
                </div>
                <div className="flex items-center space-x-1 font-medium text-[13px] mb-3">
                  <div>영화</div>
                  <img src={grayDotIcon} width="3" height="3" alt="" />
                  <div>900m</div>
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
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </div>
  )
}

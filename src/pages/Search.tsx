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

export default function Search() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedSpot, setSelectedSpot] = useState('');
  const ref = useRef<Sheet>(null);

  const snapTo = (index: number) => {
    if (ref.current) {
      ref.current.snapTo(index);
    }
  };

  return (
    <div className="flex flex-col min-h-full">
      <div className="absolute top-0 w-full h-[60px] flex justify-between px-[18px]" style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.08)' }}>
        <div className="flex items-center justify-center mr-2.5 min-w-6">
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
        </div>
        <Input
          placeholder="검색어를 입력하세요"
          className="w-full h-10 mt-2 mb-3"
          value="카페"
        />
      </div>

      <Sheet
        // unstyled
        ref={ref}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        snapPoints={[0, 494, 654, 1]}
        // detent="content"
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
          className="max-h-[520px]"
        >
          <Sheet.Header />
          <Sheet.Content>
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
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </div>
  )
}

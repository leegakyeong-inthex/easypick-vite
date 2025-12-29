import { useState } from 'react';
import { Button } from '@/components/ui/button';
import allIcon from '@/assets/images/icons/all.png';
import martIcon from '@/assets/images/icons/mart.png';
import cafeIcon from '@/assets/images/icons/cafe.png';
import beautyIcon from '@/assets/images/icons/beauty.png';
import sportIcon from '@/assets/images/icons/sport.png';
import movieIcon from '@/assets/images/icons/movie.png';
import restaurantIcon from '@/assets/images/icons/restaurant.png';
import allSelectedIcon from '@/assets/images/icons/all_selected.png';
import martSelectedIcon from '@/assets/images/icons/mart_selected.png';
import cafeSelectedIcon from '@/assets/images/icons/cafe_selected.png';
import beautySelectedIcon from '@/assets/images/icons/beauty_selected.png';
import sportSelectedIcon from '@/assets/images/icons/sport_selected.png';
import movieSelectedIcon from '@/assets/images/icons/movie_selected.png';
import restaurantSelectedIcon from '@/assets/images/icons/restaurant_selected.png';
import card1 from '@/assets/images/card-1.png';
import card2 from '@/assets/images/card-2.png';
import card3 from '@/assets/images/card-3.png';
import card4 from '@/assets/images/card-4.png';
import card5 from '@/assets/images/card-5.png';
import arrowLeftIcon from '@/assets/images/icons/arrow-left.png';
import eventBanner2 from '@/assets/images/event-banner_2.png';
import marketIcon from '@/assets/images/icons/market.png';
import cupIcon from '@/assets/images/icons/cup.png';
import selfCareIcon from '@/assets/images/icons/self_care.png';
import pickleballIcon from '@/assets/images/icons/pickleball.png';
import dictionaryIcon from '@/assets/images/icons/dictionary.png';
import petSuppliesIcon from '@/assets/images/icons/pet_supplies.png';
import poolIcon from '@/assets/images/icons/pool.png';
import slateIcon from '@/assets/images/icons/slate.png';
import theaterComedyIcon from '@/assets/images/icons/theater_comedy.png';

const places = [
  {
    name: "전체",
    iconUrl: allIcon,
    selectedIconUrl: allSelectedIcon,
  },
  {
    name: "마트",
    iconUrl: martIcon,
    selectedIconUrl: martSelectedIcon,
  },
  {
    name: "카페",
    iconUrl: cafeIcon,
    selectedIconUrl: cafeSelectedIcon,
  },
  {
    name: "뷰티",
    iconUrl: beautyIcon,
    selectedIconUrl: beautySelectedIcon,
  },
  {
    name: "스포츠",
    iconUrl: sportIcon,
    selectedIconUrl: sportSelectedIcon,
  },
  {
    name: "영화",
    iconUrl: movieIcon,
    selectedIconUrl: movieSelectedIcon,
  },
  {
    name: "레스토랑",
    iconUrl: restaurantIcon,
    selectedIconUrl: restaurantSelectedIcon,
  },
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
  {
    name: "신한카드 청춘대로 톡톡카드",
    benefit: "국내외 가맹점 1.2% M포인트 적립",
    image: card5,
  },
]

const spendingCategories = [

  {name: '마트', icon: marketIcon},
  {name: '카페', icon: cupIcon},
  {name: '뷰티', icon: selfCareIcon},
  {name: '스포츠', icon: pickleballIcon},
  {name: '교육', icon: dictionaryIcon},
  {name: '레저', icon: poolIcon},
  {name: '문화', icon: theaterComedyIcon},
  {name: '영화', icon: slateIcon},
  {name: '반려동물', icon: petSuppliesIcon},
]

export default function Recommendation() {
  const [selectedPlace, setSelectedPlace] = useState<string>('전체');
  const [step, setStep] = useState<number>(1);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryName: string) => {
    const newSelected = new Set(selectedCategories);
    if (newSelected.has(categoryName)) {
      newSelected.delete(categoryName);
    } else {
      newSelected.add(categoryName);
    }
    setSelectedCategories(newSelected);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="font-bold text-xl mb-6 ml-[18px]">카드 추천</div>
        <div className="font-semibold text-lg mb-4 ml-[18px]">내 소비성향 맞춤 카드</div>
        <div className="px-[18px] mb-3.5">
          <img src={eventBanner2} width="339" height="124" className="w-full" />
        </div>
        <div className="px-[18px] mb-[30px]">
          <Button className="font-medium text-sm" onClick={() => setStep(2)}>내 소비금액 입력하고 맞춤 카드 확인하기</Button>
        </div>
        <div className="font-semibold text-lg mb-[19px] ml-[18px]">혜택별 추천 카드</div>
        <div className="flex items-center space-x-4 overflow-x-scroll pb-[19px] px-[18px] border-b border-[#F4F4F4]">
          {places.map((place) => (
            <div
              key={place.name}
              className="flex flex-col items-center shrink-0"
              onClick={() => {
                setSelectedPlace(place.name);
              }}
            >
              <img src={selectedPlace === place.name ? place.selectedIconUrl : place.iconUrl} width="52" height="52" alt={place.name} className="block mb-[5px]" />
              <div className="font-medium text-sm">{place.name}</div>
            </div>
          ))}
        </div>
        <div className="divide-y divide-solid divide-[#F4F4F4]">
          {ownedCards.map((card, i) => (
            <div key={card.name+i}>
              <div key={card.name+i} className="flex items-center py-[8.5px] px-[10.5px]">
                <img src={card.image} width="54" height="86" alt={card.name} className="mr-[12.5px]" />
                <div className="flex-1">
                  <div className="font-medium text-[#6D727A] text-[13px] mb-1">{card.name}</div>
                  <div className="font-semibold text-base">{card.benefit}</div>
                </div>
              </div>
              {selectedPlace !== '전체' && (
                <div className="w-full px-[18px]">
                  <Button className="h-10 mb-6 bg-[#0B0D0F] font-medium text-sm pt-3 pb-[11px] leading-[17px] rounded[10px]">더 나은 혜택 카드 보기</Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {step == 2 && (
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-white flex flex-col">
          <div className="flex px-[18px] mt-4 mb-[29px]">
            <img
                src={arrowLeftIcon}
                width="24"
                height="24"
                alt="뒤로가기"
                onClick={() => {
                  setStep(1);
                }}
              />
          </div>
          <div className="font-bold text-[26px] leading-9 ml-[18px] mb-[30px]">매월 소비하는 항목을<br />선택해 주세요.</div>
          <div className="grid grid-cols-3 px-[18px] gap-y-5">
            {spendingCategories.map((category) => (
              <div key={category.name} className="flex flex-col items-center cursor-pointer" onClick={() => toggleCategory(category.name)}>
                <div className={`flex items-center justify-center w-[105px] h-[105px] rounded-[10px] mb-2.5 ${selectedCategories.has(category.name) ? 'border-2 border-[#0068FF] bg-[#E5F0FF]' : 'bg-[#F0F2F4]'}`}>
                  <img src={category.icon} width="42" height="42" alt={category.name} />
                </div>
                <div className="font-medium text-base">{category.name}</div>
              </div>
            ))}
          </div>
          <div className="px-[18px] pb-[30px] flex-1 flex flex-col justify-end">
            <Button
              className={`w-full font-medium text-base ${selectedCategories.size > 0 ? 'bg-[#0068FF]' : 'bg-[#C3C3C3]'}`}
              disabled={selectedCategories.size === 0}
              onClick={() => setStep(3)}
            >
              다음
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

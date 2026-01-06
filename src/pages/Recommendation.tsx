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
import card6 from '@/assets/images/card-6.png';
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
import deleteIcon from '@/assets/images/icons/delete.png';
import chevronRightIcon from '@/assets/images/icons/chevron_right.png';
import nearMeIcon from '@/assets/images/icons/near_me.png';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

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
    spot: "스타벅스 뚝섬역점",
    benefitDetail: "국내 1만원, 해외 5천원",
  },
  {
    name: "롯데카드 디지로카 Las Vegas",
    benefit: "국내외 모든 가맹점 최대 2%",
    image: card2,
    spot: "블루보틀 뚝섬역점",
    benefitDetail: "국내 1만원, 해외 5천원",
  },
  {
    name: "삼성카드 모니모니 카드",
    benefit: "포인트를 현금처럼 쓰는 카드",
    image: card3,
    spot: "컴포즈커피 서울숲역점",
    benefitDetail: "국내 1만원, 해외 5천원",
  },
  {
    name: "신한카드 청춘대로 톡톡카드",
    benefit: "국내외 모든 가맹점 최대 2%",
    image: card4,
    spot: "블루보틀 서울숲점",
    benefitDetail: "국내 1만원, 해외 5천원",
  },
  {
    name: "신한카드 청춘대로 톡톡카드",
    benefit: "국내외 가맹점 1.2% M포인트 적립",
    image: card5,
    spot: "메가커피 왕십리점",
    benefitDetail: "국내 1만원, 해외 5천원",
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

const recommendedCards = [
  {
    name: "디지로카 Las Vegas",
    benefit: "국내외 가맹점 최대 2% 할인!\n가맹점 2~3개얼 무이자 할부",
    estimatedBenefit: "월 예상 혜택 17,453원",
    image: card6,
  },
  {
    name: "디지로카 Las Vegas",
    benefit: "국내외 가맹점 최대 2% 할인!\n가맹점 2~3개얼 무이자 할부",
    estimatedBenefit: "월 예상 혜택 17,453원",
    image: card6,
  },
  {
    name: "디지로카 Las Vegas",
    benefit: "국내외 가맹점 최대 2% 할인!\n가맹점 2~3개얼 무이자 할부",
    estimatedBenefit: "월 예상 혜택 17,453원",
    image: card6,
  },
  {
    name: "디지로카 Las Vegas",
    benefit: "국내외 가맹점 최대 2% 할인!\n가맹점 2~3개얼 무이자 할부",
    estimatedBenefit: "월 예상 혜택 17,453원",
    image: card6,
  },
]

const recommendedCardsWithCategory = [
  {
    SSM: [
      {
        name: "디지로카 Las Vegas",
        benefit: "국내외 가맹점 최대 2% 할인!\n가맹점 2~3개얼 무이자 할부",
        estimatedBenefit: "월 예상 혜택 17,453원",
        image: card6,
      },
    ],
  },
  {
    대형마트: [
      {
        name: "디지로카 Las Vegas",
        benefit: "국내외 가맹점 최대 2% 할인!\n가맹점 2~3개얼 무이자 할부",
        estimatedBenefit: "월 예상 혜택 17,453원",
        image: card6,
      },
      {
        name: "디지로카 Las Vegas",
        benefit: "국내외 가맹점 최대 2% 할인!\n가맹점 2~3개얼 무이자 할부",
        estimatedBenefit: "월 예상 혜택 17,453원",
        image: card6,
      },
      {
        name: "디지로카 Las Vegas",
        benefit: "국내외 가맹점 최대 2% 할인!\n가맹점 2~3개얼 무이자 할부",
        estimatedBenefit: "월 예상 혜택 17,453원",
        image: card6,
      },
    ],
  },
]

const myCards = [
  {
    name: "신한카드 MR.Life",
    benefit: "공과금부터 쇼핑까지 생활혜택 10%,\n주요 생활영역 연 최대 60% 할인",
    estimatedBenefit: "월 예상 혜택 17,453원",
    image: card2,
  },
  {
    name: "디지로카 Las Vegas",
    benefit: "국내외 가맹점 최대 2% 할인!\n가맹점 2~3개얼 무이자 할부",
    estimatedBenefit: "월 예상 혜택 17,453원",
    image: card6,
  },
  {
    name: "신한카드 MR.Life",
    benefit: "공과금부터 쇼핑까지 생활혜택 10%,\n주요 생활영역 연 최대 60% 할인",
    estimatedBenefit: "월 예상 혜택 17,453원",
    image: card2,
  },
]

export default function Recommendation() {
  const [selectedPlace, setSelectedPlace] = useState<string>('전체');
  const [step, setStep] = useState<number>(1);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [spendingAmounts, setSpendingAmounts] = useState<Record<string, string>>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [doesSpendingExist, setDoesSpendingExist] = useState<boolean>(false); // 소비금액 입력 여부
  const navigate = useNavigate();
  const cards = doesSpendingExist ? myCards : recommendedCards;

  const toggleCategory = (categoryName: string) => {
    const newSelected = new Set(selectedCategories);
    if (newSelected.has(categoryName)) {
      newSelected.delete(categoryName);
    } else {
      newSelected.add(categoryName);
    }
    setSelectedCategories(newSelected);
  };

  const handleKeypadInput = (value: string) => {
    if (!activeCategory) return;

    if (value === '00') {
      setSpendingAmounts(prev => ({
        ...prev,
        [activeCategory]: (prev[activeCategory] || '') + '00'
      }));
    } else if (value === '삭제') {
      setSpendingAmounts(prev => ({
        ...prev,
        [activeCategory]: (prev[activeCategory] || '').slice(0, -1)
      }));
    } else {
      setSpendingAmounts(prev => ({
        ...prev,
        [activeCategory]: (prev[activeCategory] || '') + value
      }));
    }
  };

  const handleQuickAdd = (amount: number) => {
    if (!activeCategory) return;
    const currentAmount = parseInt(spendingAmounts[activeCategory] || '0') || 0;
    setSpendingAmounts(prev => ({
      ...prev,
      [activeCategory]: String(currentAmount + amount)
    }));
  };

  const areAllAmountsFilled = Array.from(selectedCategories).every(
    category => spendingAmounts[category] && parseInt(spendingAmounts[category]) > 0
  );

  return (
    <>
      {step === 1 && (
        <div className="flex flex-col pb-20">
          <div className="font-bold text-xl mb-6 ml-[18px]">카드 추천</div>
          <div className="font-semibold text-lg mb-2 ml-[18px]">내 소비성향 맞춤 카드</div>
          {doesSpendingExist ? (
            <>
              {!doesSpendingExist && (
                <div className="mx-[18px] mb-2 flex items-center justify-between">
                  <div className="font-semibold text-[15px] text-[#6D727A]">총 {cards.length}개</div>
                  <div className="border border-[#EBEBEB] rounded-full h-[30px] px-[11px] py-[7px] text-[#5A5B64] font-semibold text-[13px]">월 소비금액 입력</div>
                </div>
              )}
              <div className="divide-y divide-solid divide-[#F4F4F4] px-[18px]">
                {cards.map((card, i) => (
                  <div key={card.name+i} className="pt-[15px] pl-[12px] pb-[13px]">
                    <div className="flex">
                      <img src={card.image} width="67" height="102" alt={card.name} className="mr-4 object-contain" />
                      <div className="flex-1">
                        <div className="font-medium text-[#6D727A] text-xs mb-1.5">{card.name}</div>
                        <div className="font-semibold text-sm whitespace-pre-line mb-[11px]">{card.benefit}</div>
                        <div className="w-fit px-[9px] font-medium text-xs bg-[#D6E7FF] text-[#0068FF] rounded-full h-6 flex items-center justify-center">{card.estimatedBenefit}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="px-[18px] mb-3.5">
              <img src={eventBanner2} width="339" height="124" className="w-full" />
            </div>
          )}
          <div className="px-[18px] mb-[30px]">
            <Button className="font-medium text-sm" onClick={() => setStep(doesSpendingExist ? 4 : 2)}>{doesSpendingExist ? '맞춤 카드 더보기' : '내 소비금액 입력하고 맞춤 카드 확인하기'}</Button>
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
                    <div className="flex items-center mb-1" onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        navigate('/card-detail')
                      }}
                    >
                      <div className="font-medium text-[#6D727A] text-[13px]">{card.name}</div>
                      <img src={chevronRightIcon} width="20" height="20" alt="더보기" />
                    </div>
                    <div className="font-semibold text-base">{doesSpendingExist ? card.spot : card.benefit}</div>
                    {doesSpendingExist && <div className="text-[13px] text-[#6D727A] mt-[3px]">{card.benefitDetail}</div>}
                  </div>
                </div>
                {/* {selectedPlace !== '전체' && (
                  <div className="w-full px-[18px]">
                    <Button className="h-10 mb-6 bg-[#0B0D0F] font-medium text-sm pt-3 pb-[11px] leading-[17px] rounded[10px]">더 나은 혜택 카드 보기</Button>
                  </div>
                )} */}
              </div>
            ))}
          </div>
          <div className="px-[18px] mt-3 mb-14">
            <Button className="bg-[#F3F3F3] text-black leading-5" onClick={() => setStep(5)}>쇼핑 추천 카드 더보기</Button>
          </div>
        </div>
      )}

      {step === 2 && (
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

      {step === 3 && (
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-white flex flex-col">
          <div className="flex px-[18px] mt-4 mb-[29px]">
            <img
                src={arrowLeftIcon}
                width="24"
                height="24"
                alt="뒤로가기"
                onClick={() => {
                  setStep(2);
                  setActiveCategory(null);
                }}
              />
          </div>
          <div className="font-bold text-[26px] leading-9 ml-[18px] mb-[19px]">월 예상 사용금액을<br />알려주세요.</div>

          <div className="px-[18px] flex-1 overflow-y-auto flex flex-col space-y-[17px]">
            {Array.from(selectedCategories).map((category) => (
              <div
                key={category}
                className="cursor-pointer"
                onClick={() => setActiveCategory(category)}
              >
                <div className="font-medium text-sm text-[#6D727A] mb-2">{category}</div>
                <div className="flex items-center bg-[#F3F3F3] rounded-[10px] p-5">
                  <div className="flex-1">
                    <span className={`font-medium text-lg ${spendingAmounts[category] ? 'text-[#000000]' : 'text-[#B4B4B4]'}`}>{spendingAmounts[category] || '월 예상 사용금액'}</span>
                  </div>
                  <span className="ml-2 font-medium text-lg text-[#686B70]">원</span>
                </div>
              </div>
            ))}
          </div>

          <div className="px-[18px] pb-[30px] pt-[22px]">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => handleQuickAdd(10000)}
                className="flex-1 border border-[#EBEBEB] py-[11px] w-[39px] rounded-[9px] text-[#5A5B64] font-semibold text-sm"
              >
                +1만원
              </button>
              <button
                onClick={() => handleQuickAdd(50000)}
                className="flex-1 border border-[#EBEBEB] py-[11px] w-[39px] rounded-[9px] text-[#5A5B64] font-semibold text-sm"
              >
                +5만원
              </button>
              <button
                onClick={() => handleQuickAdd(100000)}
                className="flex-1 border border-[#EBEBEB] py-[11px] w-[39px] rounded-[9px] text-[#5A5B64] font-semibold text-sm"
              >
                +10만원
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-3">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
                <button
                  key={num}
                  onClick={() => handleKeypadInput(num)}
                  className="py-4 bg-white rounded-lg text-[23px] text-[#686B70]"
                >
                  {num}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleKeypadInput('00')}
                className="py-4 bg-white rounded-lg text-[23px] text-[#686B70]"
              >
                00
              </button>
              <button
                onClick={() => handleKeypadInput('0')}
                className="py-4 bg-white rounded-lg text-[23px] text-[#686B70]"
              >
                0
              </button>
              <button
                onClick={() => handleKeypadInput('삭제')}
                className="py-4 bg-white rounded-lg text-[23px] text-[#686B70]"
              >
                <img src={deleteIcon} width="23" height="17" alt="삭제" className="mx-auto" />
              </button>
            </div>
          </div>

          <div className="px-[18px] pb-[30px]">
            <Button
              className={`w-full font-medium text-base ${areAllAmountsFilled ? 'bg-[#0068FF]' : 'bg-[#C3C3C3]'}`}
              disabled={!areAllAmountsFilled}
              onClick={() => {
                setStep(4);
                setActiveCategory(null);
              }}
            >
              확인
            </Button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-white flex flex-col">
          <div className="flex px-[18px] mt-4 mb-[29px]">
            <img
              src={arrowLeftIcon}
              width="24"
              height="24"
              alt="뒤로가기"
              className="object-contain mr-3"
              onClick={() => {
                if (doesSpendingExist) {
                  setStep(1);
                } else {
                  setDoesSpendingExist(true)
                  setStep(1)
                }
              }}
            />
            <div className="font-bold text-xl">내 소비성향 맞춤 카드</div>
          </div>
          <div className="mx-[18px] mb-3.5 flex items-center justify-between">
            <div className="font-semibold text-[15px] text-[#6D727A]">총 {recommendedCards.length}개</div>
            <div className="border border-[#EBEBEB] rounded-full h-[30px] px-[11px] py-[7px] text-[#5A5B64] font-semibold text-[13px]">월 소비금액 입력</div>
          </div>
          <div className="px-[18px] flex flex-col space-y-3">
            {recommendedCards.map((card, i) => (
              <div key={card.name+i} className="rounded-[10px] bg-[#F7F8F8] pt-[15px]">
                <div className="flex">
                  <img src={card.image} width="67" height="102" alt={card.name} className="mr-4 object-contain ml-3" />
                  <div className="flex-1">
                    <div className="font-medium text-[#6D727A] text-xs mb-1.5">{card.name}</div>
                    <div className="font-semibold text-sm whitespace-pre-line mb-[11px]">{card.benefit}</div>
                    <div className="w-fit px-[9px] font-medium text-xs bg-[#D6E7FF] text-[#0068FF] rounded-full h-6 flex items-center justify-center">{card.estimatedBenefit}</div>
                  </div>
                </div>
                <div className="rounded-b-[10px] bg-[#F1F1F1] h-[42px] flex items-center justify-center font-semibold text-sm text-[#323232] mt-[15px]">
                  <div>카드 신청</div>
                  <img src={chevronRightIcon} width="20" height="20" alt="더보기" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-white flex flex-col overflow-y-auto">
          <div className="flex items-center px-[18px] mt-4 mb-5">
            <img
              src={arrowLeftIcon}
              width="24"
              height="24"
              alt="뒤로가기"
              className="object-contain"
              onClick={() => {
                setStep(1);
              }}
            />
            <div className="font-bold text-xl ml-[18px]">혜택별 추천 카드</div>
          </div>
          <div className="flex">
            <div className="flex-1 h-[49px] flex items-center justify-center border-b-[2px] border-black font-semibold">신용카드</div>
            <div className="flex-1 h-[49px] flex items-center justify-center border-b-[1px] border-[#F4F4F4] font-semibold text-[#75767A]">체크카드</div>
          </div>
          <div className="shrink-0 flex px-[18px] pt-4 overflow-x-scroll space-x-1.5">
            {spendingCategories.map((category) => (
              <div key={category.name} className={`shrink-0 rounded-full h-9 px-3.5 text-sm flex items-center justify-center ${category.name === '마트' ? 'bg-[#0B0D0F] text-white' : 'bg-[#F7F8F8] text-[#5A5B64]'}`}>{category.name}</div>
            ))}
          </div>
          <div className="flex flex-col space-y-3 divide-y-[1px] divide-solid divide-[#F4F4F4]">
            {recommendedCardsWithCategory.map((categoryGroup, i) => (
              Object.entries(categoryGroup).map(([categoryName, cards]) => (
                <div key={categoryName+i} className="mt-5 pb-6 px-[18px]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-semibold text-lg">{categoryName}</div>
                    <Link to="" className="flex items center space-x-[3px] px-2.5 py-[7px] rounded-full border border-[#EBEBEB]">
                      <img src={nearMeIcon} width="16" height="16" alt="주변 찾기" />
                      <div className="font-semibold text-[13px] text-[#5A5B64] leading-4">주변 찾기</div>
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-3">
                    {cards.map((card: { name: string; benefit: string; estimatedBenefit: string; image: string; }) => (
                      <div key={card.name+i} className="rounded-[10px] bg-[#F7F8F8] pt-[15px]">
                        <div className="flex">
                          <img src={card.image} width="55" height="84" alt={card.name} className="mr-4 object-contain ml-3" />
                          <div className="flex-1 flex flex-col justify-center">
                            <div className="font-medium text-[#6D727A] text-xs mb-1.5">{card.name}</div>
                            <div className="font-semibold text-sm whitespace-pre-line mb-[11px]">{card.benefit}</div>
                          </div>
                        </div>
                        <div className="rounded-b-[10px] bg-[#F1F1F1] h-[42px] flex items-center justify-center font-semibold text-sm text-[#323232] mt-[15px]">
                          <div>카드 신청</div>
                          <img src={chevronRightIcon} width="20" height="20" alt="더보기" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
      )}
    </>
  )
}

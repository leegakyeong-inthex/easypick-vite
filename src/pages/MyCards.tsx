import AddCircle from '@/assets/images/icons/add_circle.png';
import martIcon from '@/assets/images/icons/mart.png';
import cafeIcon from '@/assets/images/icons/cafe.png';
import beautyIcon from '@/assets/images/icons/beauty.png';
import sportIcon from '@/assets/images/icons/sport.png';
import movieIcon from '@/assets/images/icons/movie.png';
import restaurantIcon from '@/assets/images/icons/restaurant.png';
import card1 from '@/assets/images/card-1.png';
import card2 from '@/assets/images/card-2.png';
import card3 from '@/assets/images/card-3.png';
import card4 from '@/assets/images/card-4.png';
import card5 from '@/assets/images/card-5.png';
import NavigationBar from '@/components/NavigationBar';

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

export default function MyCards() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center px-[18px] pt-[11px] pb-[27px]">
          <div className="font-bold text-xl">내 카드</div>
          <div className="flex items center space-x-[3px] px-2.5 py-[7px] rounded-full border border-[#EBEBEB]">
            <img src={AddCircle} width="16" height="16" alt="카드 등록" />
            <div className="font-semibold text-[13px] text-[#5A5B64] leading-4">카드 등록</div>
          </div>
        </div>
        <div className="flex items-center space-x-4 overflow-x-scroll pb-[19px] px-[18px] border-b border-[#F4F4F4]">
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
        <div className="pt-[30px] px-[18px] pb-3.5">
          <div className="flex items-center">
            <div className="mr-1.5 font-semibold text-lg">보유 중인 카드</div>
            <div className="font-semibold text-large text-[#B4B4B4]">{ownedCards.length}</div>
          </div>
        </div>
        <div className="divide-y divide-solid divide-[#F4F4F4]">
          {ownedCards.map((card, i) => (
            <div key={card.name+i} className="flex items-center py-[8.5px] px-[10.5px]">
              <img src={card.image} width="54" height="86" alt={card.name} className="mr-[12.5px]" />
              <div className="flex-1">
                <div className="font-medium text-[#6D727A] text-[13px] mb-1">{card.name}</div>
                <div className="font-semibold text-base">{card.benefit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NavigationBar />
    </>
  )
}

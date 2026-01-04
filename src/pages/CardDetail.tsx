import { useState } from "react";
import { useNavigate } from "react-router";
import arrowLeftIcon from '@/assets/images/icons/arrow-left.png';
import card3 from '@/assets/images/card-3.png';
import chevronRightIcon from '@/assets/images/icons/chevron_right.png';
import foodIcon from '@/assets/images/icons/food.png';
import convenienceStoreIcon from '@/assets/images/icons/convenience_store.png';
import pharmacyIcon from '@/assets/images/icons/pharmacy.png';
import washerIcon from '@/assets/images/icons/washer.png';
import shoppingIcon from '@/assets/images/icons/shopping.png';
import checkoutIcon from '@/assets/images/icons/checkout.png';
import chevronRightBlackIcon from '@/assets/images/icons/chevron_right_black.png';
import closeRoundIcon from '@/assets/images/icons/close_round.png';
import { Button } from "../components/ui/button";
import { Sheet } from "react-modal-sheet";

const benefits = [
  {
    title: "푸드",
    description: "식음료 10% 할인",
    icon: foodIcon,
  },
  {
    title: "편의점",
    description: "편의점 10% 할인",
    icon: convenienceStoreIcon,
  },
  {
    title: "병원/약국",
    description: "병원/약국 업종 10% 할인",
    icon: pharmacyIcon,
  },
  {
    title: "생활",
    description: "세탁소 업종 10% 할인",
    icon: washerIcon,
  },
  {
    title: "온라인 쇼핑",
    description: "월납요금(공과금) 10% 할인",
    icon: shoppingIcon,
  },
  {
    title: "공과금",
    description: "월납요금(공과금) 10% 할인",
    icon: checkoutIcon,
  },
]

export default function CardDetail() {
  const navigate = useNavigate();
  const [isLateInterestExpanded, setIsLateInterestExpanded] = useState(false);
  const [isAnnualFeeOpen, setIsAnnualFeeOpen] = useState(false);
  const [isAnnualFeeDetailOpen, setIsAnnualFeeDetailOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-full bg-white">
      <div className="w-full h-[60px] flex items-center px-[18px] z-50 fixed top-0 bg-white">
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
        <h1 className="text-xl font-bold">카드 상세</h1>
      </div>
      <div className="flex-grow mt-[60px] mb-[92px]">
        <div className="flex justify-center items-center pt-2 pb-8">
          <img src={card3} alt="카드 이미지" className="h-full w-[140px]" />
        </div>
        <div className="px-[18px] border-b border-[#F4F4F4]">
          <div className="font-medium text-sm text-[#0068FF] mb-[9px]">신한카드</div>
          <div className="font-semibold text-[22px] mb-3.5">청춘대로 톡톡카드</div>
          <div className="font-medium text-sm text-[#6D727A] leading-[22px] mb-6">
            <div>• 공과금부터 쇼핑까지 생활혜택 10%</div>
            <div>• 주요 생활영역 연 최대 60만원 할인</div>
          </div>
        </div>
        <div className="px-[18px] py-5 flex flex-col space-y-3 border-b border-[#F4F4F4]">
          <div className="flex cursor-pointer" onClick={() => setIsAnnualFeeOpen(true)}>
            <div className="w-[83px] text-base font-semibold">연회비</div>
            <div className="text-base font-medium text-[#6D727A] leading-[26px] flex-grow">
              <div className="flex items-center">
                <span>국내 1만 5천원, 해외 1만 8천원</span>
                <img src={chevronRightIcon} width="20" height="20" alt="이동하기" />
              </div>
              <div>신규 회원 최대 100% 지급</div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[83px] text-base font-semibold">기준 실적</div>
            <div className="text-base font-medium text-[#6D727A] leading-[26px]">
              <div className="flex items-center">
                <span>직전 1개월 합계 30만원 이상</span>
                <img src={chevronRightIcon} width="20" height="20" alt="이동하기" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-[18px] py-7 border-b border-[#F4F4F4]">
          <div className="mb-5 font-semibold text-lg">주요 혜택</div>
          <div className="flex flex-col space-y-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-[18px] flex items-center bg-[#F8F8F8] border border-[#F4F4F4] rounded-[13px]" onClick={() => setIsAnnualFeeDetailOpen(true)}>
                  <div className="w-11 h-11 bg-white border border-[#EFEFEF] rounded-[7px] flex items-center justify-center mr-4">
                    <img src={benefit.icon} width="26" height="26" alt={benefit.title} />
                  </div>
                <div className="flex-grow">
                  <div className="font-medium text-base">{benefit.title}</div>
                  <div className="font-normal text-sm text-[#6D727A]">{benefit.description}</div>
                </div>
                <img src={chevronRightBlackIcon} width="24" height="24" alt="이동하기" />
              </div>
            ))}
          </div>
        </div>
        <div className="font-semibold text-lg px-[18px] pb-1 pt-7">이용 안내</div>
        <div className="py-5 px-[18px] flex items-center justify-between border-b border-[#F4F4F4] cursor-pointer">
          <div className="font-medium leading-6">유의사항</div>
          <img src={chevronRightBlackIcon} width="24" height="24" alt="이동하기" className="rotate-90" />
        </div>
        <div className="py-5 px-[18px] flex items-center justify-between border-b border-[#F4F4F4] cursor-pointer">
          <div className="font-medium leading-6">부가 서비스 변경 안내</div>
          <img src={chevronRightBlackIcon} width="24" height="24" alt="이동하기" className="rotate-90" />
        </div>
        <div className={`py-5 px-[18px] flex items-center justify-between border-b border-[#F4F4F4] cursor-pointer ${isLateInterestExpanded ? "bg-[#F8F8F8]" : ""}`} onClick={() => setIsLateInterestExpanded(!isLateInterestExpanded)}>
          <div className="font-medium leading-6">연체 이자 안내</div>
          <img src={chevronRightBlackIcon} width="24" height="24" alt="이동하기" className={isLateInterestExpanded ? "rotate-270" : "rotate-90"} />
        </div>
        {isLateInterestExpanded && (
          <div className="bg-[#F8F8F8] border-b border-[#F4F4F4] font-medium text-[13px] leading-[22px] text-[#6D727A] px-[18px] pb-[18px]">연체 이자 안내 내용입이다. 연체 이자 안내 내용입이다. 연체 이자 안내 내용입이다. 연체 이자 안내 내용입이다. 연체 이자 안내 내용입이다.연체 이자 안내 내용입이다.</div>
        )}
        <div className="py-5 px-[18px]">
          <div className="rounded-[13px] bg-[#F8F8F8] border border-[#F4F4F4] p-4">
            {/* <div className="mb-2.5 font-medium text-[#6D727A] text-[13px] leading-[22px]">• 계약을 체결하기 전에 자세한 내용은 해당 카드사의 상품설명서와 약관을 읽어보시기 바랍니다.</div> */}
            <ul className="list-disc font-medium text-[#6D727A] text-[13px] leading-[22px] pl-[18px]">
              <li className="mb-2.5">계약을 체결하기 전에 자세한 내용은 해당 카드사의 상품설명서와 약관을 읽어보시기 바랍니다.</li>
              <li className="mb-2.5">금융소비자는 해당상품에 대하여 설명을 받을 권리가 있으며, 그 설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.</li>
              <li className="mb-2.5">신용카드 발급이 부적정한 경우, 금융 회사의 심사기준(개인신용평점 기준 등)에 따라 카드발급이 제한될 수 있습니다.</li>
              <li className="mb-2.5">카드이용대금과 이에 수반되는 모든 수수료를 지정된 대금 결제일에 상환합니다.</li>
              <li className="mb-2.5">카드 이용대금 연체 시 연체이자가 부과될 수 있으며, 상세한 부과기준은 상품별 상세내용을 참조하여 주시기 바랍니다.</li>
              <li className="mb-2.5">상환능력에 비해 신용카드 사용액이 과도할 경우, 귀하의 개인신용평점이 하락할 수 있습니다.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full bg-white pt-2 pb-8 px-[18px]" style={{ boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.04)' }}>
        <Button>카드 신청하기</Button>
      </div>
      <Sheet isOpen={isAnnualFeeOpen} onClose={() => setIsAnnualFeeOpen(false)}>
        <Sheet.Container className="max-h-[191px]">
          <Sheet.Header>
            <div className="flex justify-between items-center pl-[25px] pr-[18px] pt-[23px] pb-[19px]">
              <h2 className="text-lg font-semibold">연회비</h2>
              <button onClick={() => setIsAnnualFeeOpen(false)} className="text-[#999] text-2xl font-light">
                <img src={closeRoundIcon} width="24" height="24" alt="닫기" />
              </button>
            </div>
          </Sheet.Header>
          <Sheet.Content>
            <div className="px-[25px]">
              <div>
                <div className="flex items-center space-x-2.5 mb-2.5">
                  <div className="text-base font-medium text-[#6D727A]">국내외겸용</div>
                  <div className="text-[13px] text-[#DEDEDE]">|</div>
                  <div className="text-base font-medium">12,000원 (Master)</div>
                </div>
                <div className="flex items-center space-x-2.5 mb-[13px]">
                  <div className="text-base font-medium text-[#6D727A]">국내전용</div>
                  <div className="text-[13px] text-[#DEDEDE]">|</div>
                  <div className="text-base font-medium">10,000원 (K-WORLD(JCB))</div>
                </div>
                <div className="bg-[#D6E7FF] rounded-full px-[9px] py-[5px] h-6 w-fit">
                  <div className="text-xs font-medium text-[#0068FF] leading-3.5">신규 회원 최대 100% 지급</div>
                </div>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={() => setIsAnnualFeeOpen(false)} />
      </Sheet>
      <Sheet isOpen={isAnnualFeeDetailOpen} onClose={() => setIsAnnualFeeDetailOpen(false)}>
        <Sheet.Container className="max-h-[294px]">
          <Sheet.Header>
            <div className="flex justify-between items-center pl-[25px] pr-[18px] pt-[23px] pb-[22px]">
              <h2 className="text-lg font-semibold">주요 혜택</h2>
              <button onClick={() => setIsAnnualFeeDetailOpen(false)} className="text-[#999] text-2xl font-light">
                <img src={closeRoundIcon} width="24" height="24" alt="닫기" />
              </button>
            </div>
          </Sheet.Header>
          <Sheet.Content>
            <div className="pl-[25px] pr-[22px] mb-[25px]">
              <div className="font-medium mb-2.5">공과금</div>
              <ul className="list-disc font-medium text-[#6D727A] text-sm leading-[22px] pl-[18px]">
                <li>전기요금 / 도시가스 요금 / SKT, LG U+, KT 통신요금 할인 인터넷 / 집전화/이동통신/결합상품 포함</li>
                <li>일 1회 할인 적용</li>
                <li>1회 이용 금액 5만원까지 할인 적용 (1회 최대 5천원 할인)</li>
              </ul>
            </div>
            <div className="px-[18px]">
              <Button className="leading-5">카드 신청하기</Button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={() => setIsAnnualFeeDetailOpen(false)} />
      </Sheet>
    </div>
  )
}

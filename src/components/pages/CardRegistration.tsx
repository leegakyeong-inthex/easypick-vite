import { useState } from "react"
import { Button } from "../ui/button"
import { Sheet } from "react-modal-sheet";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import arrowLeft from '@/assets/images/icons/arrow-left.png'
import x from '@/assets/images/icons/x.png'
import card2 from '@/assets/images/card-2.png'
import card3 from '@/assets/images/card-3.png'
import SheetHeader from "@/components/SheetHeader";

const initialCards = [
  {
    company: 'KB 국민카드',
    cards: [
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: true,
      },
      {
        image: card2,
        name: 'KB 국민 CLiP 카드',
        selected: true,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: '신한카드',
    cards: [
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: '삼성카드',
    cards: [
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: '헌대카드',
    cards: [
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: '롯데카드',
    cards: [
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: '하나카드',
    cards: [
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: '우리카드',
    cards: [
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: 'BC카드',
    cards: [
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: '카카오뱅크',
    cards: [
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: card2,
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
]

interface CardRegistrationProps {
  setIsVisible: (isVisible: boolean) => void
}

interface Card {
  image: string
  name: string
  selected: boolean
}

interface CardCompany {
  company: string
  cards: Card[]
}

interface SelectedCard {
  name: string
  company: string
}

interface CurrentRegistrationCard {
  company: string
  index: number
}

export default function CardRegistration({ setIsVisible }: CardRegistrationProps) {
  const [cards, setCards] = useState<CardCompany[]>(initialCards)
  const [selectedCard, setSelectedCard] = useState<string>('KB 국민카드')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isRegistrationOpen, setIsRegistrationOpen] = useState<boolean>(false)
  const [currentRegistrationCard, setCurrentRegistrationCard] = useState<CurrentRegistrationCard | null>(null)
  const [company, setCompany] = useState<string>('')
  const [cardName, setCardName] = useState<string>('')
  const [isInputsComplete, setIsInputsComplete] = useState<boolean>(false)

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setCompany(value)
    setIsInputsComplete(value.trim() !== '' && cardName.trim() !== '')
  }

  const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setCardName(value)
    setIsInputsComplete(company.trim() !== '' && value.trim() !== '')
  }

  const handleCardClick = (companyName: string, cardIndex: number): void => {
    setCurrentRegistrationCard({ company: companyName, index: cardIndex })
    setIsRegistrationOpen(true)
  }

  const handleRegistrationComplete = (): void => {
    if (currentRegistrationCard) {
      setCards((prevCards) =>
        prevCards.map((company) =>
          company.company === currentRegistrationCard.company
            ? {
                ...company,
                cards: company.cards.map((card, idx) =>
                  idx === currentRegistrationCard.index ? { ...card, selected: true } : card
                ),
              }
            : company
        )
      )
      setIsRegistrationOpen(false)
      setCurrentRegistrationCard(null)
    }
  }

  const getSelectedCards = (): SelectedCard[] => {
    const selected: SelectedCard[] = []
    cards.forEach((company) => {
      company.cards.forEach((card) => {
        if (card.selected) {
          selected.push({ name: card.name, company: company.company })
        }
      })
    })
    return selected
  }

  const handleRemoveCard = (cardName: string, companyName: string): void => {
    setCards((prevCards) =>
      prevCards.map((company) =>
        company.company === companyName
          ? {
              ...company,
              cards: company.cards.map((card) =>
                card.name === cardName ? { ...card, selected: false } : card
              ),
            }
          : company
      )
    )
  }

  return (
    <>
      <div style={{ zIndex: 2 }} className="bg-white absolute w-screen h-screen flex flex-col">
        <div className="flex items-center pt-3.5 pb-2.5 px-[17px] mb-[18px]">
          <img
            src={arrowLeft}
            width="24"
            height="24"
            alt="뒤로가기"
            className="mr-3"
            onClick={() => setIsVisible(false)}
          />
          <div className="text-xl font-bold">내 카드 등록</div>
        </div>
        <div className="flex-1 min-h-0 flex flex-col bg-white">
          <div className="flex items-center border-b border-[#F4F4F4] font-semibold text-xs text-[#6D727A]">
            <div className="w-[134px] pl-[18px] pb-3.5">카드사</div>
            <div className="pl-[18px] pb-3.5">카드</div>
          </div>
          <div className="flex flex-1 min-h-0">
            <div className="border-r border-[#F4F4F4] w-[134px] pt-1.5 pr-1.5 overflow-y-scroll">
              {cards.map((card) => (
                <div
                  key={card.company}
                  className={`h-[50px] flex items-center pl-5 font-medium text-sm rounded-tr-[10px] rounded-br-[10px] ${card.company === selectedCard ? 'bg-[#E2EEFF] text-[#0068FF]' : 'text-[#6D727A]'}`}
                  onClick={() => setSelectedCard(card.company)}
                >{card.company}</div>
              ))}
            </div>
            <div className="flex flex-col py-1.5 px-2.5 space-y-1.5 flex-1 overflow-y-scroll">
              {cards.find((card) => card.company === selectedCard)?.cards.map((card,i) => (
                <div
                  key={card.name+i}
                  className={`flex items-center w-full min-h-[60px] font-medium text-sm rounded-[10px] px-[13px] cursor-pointer ${card.selected ? 'bg-[#0B0D0F] text-white' : ''}`}
                  onClick={() => handleCardClick(selectedCard, i)}
                >
                  <img src={card.image} width="26" height="40" alt="" className="mr-1.5" />
                  <div>{card.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-[18px] py-3 flex flex-col" style={{ boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.04)' }}>
            {getSelectedCards().length > 0 && (
              <>
                <div className="font-semibold text-sm text-[#6D727A] mb-3">
                  선택한 카드 <span className="text-[#0B0D0F]">{getSelectedCards().length}</span>
                </div>
                <div className="max-h-[120px] overflow-y-auto mb-3">
                  <div className="flex flex-wrap gap-2">
                    {getSelectedCards().map((card, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between bg-[#F3F3F3] rounded-full px-3 py-2 text-sm font-medium text-[#0B0D0F]"
                      >
                        <span className="truncate tex-[#5A5B64]">{card.name}</span>
                        <img
                          src={x}
                          width="14"
                          height="14"
                          alt="제거"
                          className="ml-2 text-[#6D727A] font-bold text-lg shrink-0 cursor-pointer"
                          onClick={() => handleRemoveCard(card.name, card.company)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            <Button className="w-full mb-[19px]">확인</Button>
            <div
              className="underline font-semibold text-sm text-[#6D727A] text-center cursor-pointer"
              onClick={() => setIsOpen(true)}
            >찾는 카드가 없나요?</div>
          </div>
        </div>
      </div>

      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        snapPoints={[0, 360, 1]}
        // detent="content"
        initialSnap={1}
      >
        <Sheet.Container>
          <SheetHeader />
          <Sheet.Content>
            <div className="px-[18px] pb-6">
              <div className="font-bold text-lg mb-1.5">카드 추가 요청</div>
              <div className="text-sm text-[#6D727A] mb-6">카드 정보를 남겨주시면 빠르게 추가해드릴게요.</div>
              <div className="relative w-full">
                <Label htmlFor="company" className="font-semibold text-sm text-[#686B70] absolute left-[18px] top-3.5">카드사</Label>
                <Input id="company" value={company} onChange={handleCompanyChange} className="bg-[#F3F3F3] mb-[13px] text-right focus-visible:outline-none focus-visible:ring-0" placeholder="카드사" />
              </div>
              <div className="relative w-full">
                <Label htmlFor="cardName" className="font-semibold text-sm text-[#686B70] absolute left-[18px] top-3.5">카드 이름</Label>
                <Input id="cardName" value={cardName} onChange={handleCardNameChange} className="bg-[#F3F3F3] mb-[25px] text-right focus-visible:outline-none focus-visible:ring-0" placeholder="카드 이름" />
              </div>
              <Button className={`w-full ${isInputsComplete ? 'bg-[#0068FF]' : 'bg-[#C3C3C3]'}`}>요청하기</Button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={() => setIsOpen(false)} />
      </Sheet>

      <Sheet
        isOpen={isRegistrationOpen}
        onClose={() => setIsOpen(false)}
        snapPoints={[0, 420, 1]}
        // detent="content"
        initialSnap={1}
      >
        <Sheet.Container>
          <SheetHeader />
          <Sheet.Content>
            <div className="flex flex-col items-center mt-1.5 px-[18px]">
              {currentRegistrationCard && (
                <>
                  <div className="font-semibold text-[13px] text-[#0068FF] mb-1">
                    {currentRegistrationCard.company}
                  </div>
                  <div className="font-semibold text-xl mb-5">
                    {cards
                      .find((c) => c.company === currentRegistrationCard.company)
                      ?.cards[currentRegistrationCard.index]?.name || '카드'}
                  </div>
                </>
              )}
              <img src={card3} width="140" height="87" alt="" className="rotate-90 -mt-12 -mb-5" />
              <div className="relative w-full">
                <label className="font-semibold text-sm text-[#686B70] absolute left-[18px] top-5">유효기간</label>
                <Input className="bg-[#F3F3F3] text-right mb-6 h-[62px]" placeholder="00 / 00" />
              </div>
              <Button className="mb-6" onClick={handleRegistrationComplete}>완료</Button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={() => setIsRegistrationOpen(false)} />
      </Sheet>
    </>
  )
}

import arrowLeft from '@/assets/images/icons/arrow-left.png';

const notifications = [
  {
    title: '신한카드 이벤트 알림',
    description: '이벤트 설명 문구가 들어가는 영역입니다.',
    date: '10월 16일 19:22',
  },
  {
    title: '신한카드 이벤트 알림',
    description: '이벤트 설명 문구가 들어가는 영역입니다.',
    date: '10월 16일 19:22',
  },
  {
    title: '신한카드 이벤트 알림',
    description: '이벤트 설명 문구가 들어가는 영역입니다.',
    date: '10월 16일 19:22',
  },
  {
    title: '신한카드 이벤트 알림',
    description: '이벤트 설명 문구가 들어가는 영역입니다.',
    date: '10월 16일 19:22',
  },
]

interface NotificationsProps {
  setIsVisible: (visible: boolean) => void
}

export default function Notifications({ setIsVisible }: NotificationsProps) {
  return(
    <div className="w-full h-full">
      <div className="flex items-center pt-3.5 pb-2.5 px-[17px]">
        <img
          src={arrowLeft}
          width="24"
          height="24"
          alt="뒤로가기"
          className="mr-3"
          onClick={() => setIsVisible(false)}
        />
        <div className="text-xl font-bold">알림</div>
      </div>
      <div>
        {notifications.map((notification, index) => (
          <div key={index} className="flex flex-col border-b border-[#F4F4F4] p-5 leading-none">
            <div className="font-semibold text-[13px] text-[#6D727A] mb-[5px]">{notification.title}</div>
            <div className="text-base font-semibold mb-2.5">{notification.description}</div>
            <div className="text-[13px] text-[#878787]">{notification.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

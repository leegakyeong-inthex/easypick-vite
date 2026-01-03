import arrowLeftIcon from '@/assets/images/icons/arrow-left.png'
import chevronRightIcon from '@/assets/images/icons/chevron_right.png'
import movieThumbnail from '@/assets/images/movie_thumbnail.png'
import cafeThumbnail from '@/assets/images/cafe_thumbnail.png'
import martThumbnail from '@/assets/images/mart_thumbnail.png'
import { Sheet } from 'react-modal-sheet'
import { useState } from 'react'
import checkBlueIcon from '@/assets/images/icons/check_blue.png'

const bookmarks = [
  {
    thumbnail: movieThumbnail,
    title: "영화",
    count: 3,
  },
  {
    thumbnail: cafeThumbnail,
    title: "가고싶은 카페",
    count: 10,
  },
  {
    thumbnail: martThumbnail,
    title: "장보기",
    count: 8,
  },
  {
    thumbnail: movieThumbnail,
    title: "영화",
    count: 3,
  },
  {
    thumbnail: cafeThumbnail,
    title: "가고싶은 카페",
    count: 10,
  },
]

export default function Bookmarks() {
  const [isSortSheetOpen, setIsSortSheetOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-full bg-white">
      <div className="w-full h-[60px] flex items-center px-[18px] z-50e">
        <div className="flex items-center justify-center mr-2.5 min-w-6">
          <img
            src={arrowLeftIcon}
            width="24"
            height="24"
            alt="뒤로가기"
            onClick={() => {
              // navigate(-1);
            }}
          />
        </div>
        <h1 className="text-xl font-bold">카드 상세</h1>
          <div className="ml-auto rounded-full border border-[#EBEBEB] px-[11px] py-[7px] font-semibold text-[#5A5B64] text-[13px]">그룹 편집</div>
      </div>
      <div className="flex items-center justify-between px-[18px] mt-3.5 mb-4">
        <div className="text-[#6D727A] text-[15px] font-medium">총 {bookmarks.length}개</div>
        <div className="flex items-center" onClick={() => setIsSortSheetOpen(true)}>
          <div className="text-[#858A94] text-sm">등록순</div>
          <img src={chevronRightIcon} width="18" height="18" alt="정렬 아이콘" className="rotate-90" />
        </div>
      </div>
      {bookmarks.map((bookmark, index) => (
        <div key={index} className="flex items-center px-[18px] pb-[18px]">
          <img src={bookmark.thumbnail} width="50" height="50" alt={bookmark.title} className="mr-[13px]" />
          <div className="text-lg font-medium mr-[5px]">{bookmark.title}</div>
          <div className="text-[#B4B4B4] text-lg font-semibold">{bookmark.count}</div>
        </div>
      ))}
      <Sheet isOpen={isSortSheetOpen} onClose={() => setIsSortSheetOpen(false)}>
        <Sheet.Container className="max-h-[135px]">
          <Sheet.Header />
          <Sheet.Content>
            <div className="px-[25px] pb-[13px]">
              <div className="text-base font-medium py-3.5 flex items-center justify-between">
                <div>등록순</div>
                <img src={checkBlueIcon} width="20" height="20" alt="선택 아이콘" />
              </div>
              <div className="text-base font-medium py-3.5 flex items-center justify-between">
                <div>이름순</div>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={() => setIsSortSheetOpen(false)} />
      </Sheet>
    </div>
  )
}

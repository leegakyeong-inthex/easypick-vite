import arrowLeftIcon from '@/assets/images/icons/arrow-left.png'
import chevronRightIcon from '@/assets/images/icons/chevron_right.png'
import movieThumbnail from '@/assets/images/movie_thumbnail.png'
import cafeThumbnail from '@/assets/images/cafe_thumbnail.png'
import martThumbnail from '@/assets/images/mart_thumbnail.png'
import { Sheet } from 'react-modal-sheet'
import { useState } from 'react'
import checkBlueIcon from '@/assets/images/icons/check_blue.png'
import { Button } from '@/components/ui/Button'
import addCircleDarkIcon from '@/assets/images/icons/add_circle_dark.png'
import removeCircleDarkIcon from '@/assets/images/icons/remove_circle_dark.png'
import { Input } from '@/components/ui/Input'
import closeRoundDarkIcon from '@/assets/images/icons/close_round_dark.png'
import photo1 from '@/assets/images/photo-1.png'
import photo2 from '@/assets/images/photo-2.png'
import grayDotIcon from '@/assets/images/icons/gray-dot.png'
import kebabMenuIcon from '@/assets/images/icons/kebab_menu.png'
import editIcon from '@/assets/images/icons/edit.png'
import binIcon from '@/assets/images/icons/bin.png'
import closeRoundIcon from '@/assets/images/icons/close_round.png'
import checkDarkIcon from '@/assets/images/icons/check_dark.png'
import checkDarkCheckedIcon from '@/assets/images/icons/check_dark-checked.png'

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

const bookmarkDetail = [
  {
    name: "CGV 건대입구",
    category: "영화",
    distance: "90m",
    address: "서울 광진구 아차산로 30길 26",
    review: "서비스 친절함 / 팝콘이 맛있음",
    photos: [
      photo1,
      photo2,
      photo1,
    ],
  },
  {
    name: "CGV 건대입구",
    category: "영화",
    distance: "90m",
    address: "서울 광진구 아차산로 30길 26",
    review: "서비스 친절함 / 팝콘이 맛있음",
    photos: [
      photo1,
      photo2,
      photo1,
    ],
  },
  {
    name: "CGV 건대입구",
    category: "영화",
    distance: "90m",
    address: "서울 광진구 아차산로 30길 26",
    review: "서비스 친절함 / 팝콘이 맛있음",
    photos: [
      photo1,
      photo2,
      photo1,
    ],
  },
  {
    name: "CGV 건대입구",
    category: "영화",
    distance: "90m",
    address: "서울 광진구 아차산로 30길 26",
    review: "서비스 친절함 / 팝콘이 맛있음",
    photos: [
      photo1,
      photo2,
      photo1,
    ],
  },
]

export default function Bookmarks() {
  const [isSortSheetOpen, setIsSortSheetOpen] = useState(false);
  const [isGroupEditSheetOpen, setIsGroupEditSheetOpen] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  const [isBookmarkDetailVisible, setIsBookmarkDetailVisible] = useState(false);
  const [isBookmarkEditSheetOpen, setIsBookmarkEditSheetOpen] = useState(false);
  const [isBookmarkEditVisible, setIsBookmarkEditVisible] = useState(false);
  const [isBookmarkMemoVisible, setIsBookmarkMemoVisible] = useState(false);

  return (
    <>
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
          <h1 className="text-xl font-bold">즐겨찾기</h1>
          <div className="ml-auto rounded-full border border-[#EBEBEB] px-[11px] py-[7px] font-semibold text-[#5A5B64] text-[13px]" onClick={() => setIsGroupEditSheetOpen(true)}>그룹 편집</div>
        </div>
        <div className="flex items-center justify-between px-[18px] mt-3.5 mb-4">
          <div className="text-[#6D727A] text-[15px] font-medium">총 {bookmarks.length}개</div>
          <div className="flex items-center" onClick={() => setIsSortSheetOpen(true)}>
            <div className="text-[#858A94] text-sm">등록순</div>
            <img src={chevronRightIcon} width="18" height="18" alt="정렬 아이콘" className="rotate-90" />
          </div>
        </div>
        {bookmarks.map((bookmark, index) => (
          <div key={index} className="flex items-center px-[18px] pb-[18px]" onClick={() => setIsBookmarkDetailVisible(true)}>
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
        <Sheet
          isOpen={isGroupEditSheetOpen}
          onClose={() => {
            setIsEditVisible(false)
            setIsGroupEditSheetOpen(false)
          }}
          >
          <Sheet.Container className="max-h-[241px]">
            <Sheet.Header />
            <Sheet.Content>
              {isEditVisible ? (
                <div className="px-[18px] flex flex-col h-full">
                  <div className="w-full flex items-center mb-[17px]">
                    <div className="flex items-center justify-center mr-2.5 min-w-6">
                      <img
                        src={arrowLeftIcon}
                        width="24"
                        height="24"
                        alt="뒤로가기"
                        onClick={() => {
                          setIsEditVisible(false);
                        }}
                      />
                    </div>
                    <h1 className="text-lg font-semibold">그룹 이름 수정</h1>
                  </div>
                  <div className="mb-auto relative">
                    <Input placeholder="그룹 이름을 입력하세요" value="영화" className="border-none bg-[#F3F3F3] font-medium text-sm" />
                    <img src={closeRoundDarkIcon} width="18" height="18" alt="지우기" className="absolute top-[16px] right-[18px]" />
                  </div>
                  <Button className="mb-6">
                    확인
                  </Button>
                </div>
              ) : (
                <div className="px-[18px]">
                  <Button variant="secondary" className="h-10 flex items-center justify-center mb-[17px]">
                    <img src={addCircleDarkIcon} width="16" height="16" alt="새 그룹 추가 아이콘" />
                    <div className="font-medium text-sm">새 그룹 추가</div>
                  </Button>
                  <div className="flex flex-col space-y-3">
                    {bookmarks.map((bookmark, index) => (
                      <div key={index} className="flex items-center">
                        <img
                          src={removeCircleDarkIcon}
                          width="20"
                          height="20"
                          alt="그룹 삭제 아이콘"
                          className="mr-2.5"
                          onClick={() => {
                            setIsGroupEditSheetOpen(false);
                            setIsRemoveDialogOpen(true);
                          }}
                        />
                        <div className="flex-1 flex items-center space-x-1.5">
                          <div className="font-medium">{bookmark.title}</div>
                          <div className="font-semibold text-[#B4B4B4]">{bookmark.count}</div>
                        </div>
                        <div className="ml-auto rounded-full border border-[#EBEBEB] px-[11px] py-[7px] font-semibold text-[#5A5B64] text-[13px]" onClick={() => setIsEditVisible(true)}>수정</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop onClick={() => setIsGroupEditSheetOpen(false)} />
        </Sheet>
        {isRemoveDialogOpen && (
          <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg py-5 px-4 w-[310px]">
              <div className="text-lg font-semibold text-[#1C1C1C] mb-[7px]">영화 그룹을 삭제할까요?</div>
              <div className="text-[#6D727A] font-medium text-[13px] mb-[27px]">그룹 내 장소도 함께 삭제됩니다.</div>
              <div className="flex space-x-2.5 w-full">
                <Button variant="secondary" onClick={() => setIsRemoveDialogOpen(false)} className="flex-1">취소</Button>
                <Button onClick={() => setIsRemoveDialogOpen(false)} className="flex-1">삭제</Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {isBookmarkDetailVisible && (
        <div className="flex flex-col min-h-full bg-white absolute top-0 left-0 w-full h-full z-40">
          <div className="w-full min-h-[60px] flex items-center px-[18px]">
            <div className="flex items-center justify-center mr-2.5 min-w-6">
              <img
                src={arrowLeftIcon}
                width="24"
                height="24"
                alt="뒤로가기"
                onClick={() => {
                  setIsBookmarkDetailVisible(false);
                }}
              />
            </div>
            <h1 className="text-xl font-bold">영화</h1>
          </div>
          <div className="divide-y divide-[#F4F4F4]">
            {bookmarkDetail.map((detail, index) => (
              <div key={index} className="p-[18px]" onClick={() => setIsBookmarkEditSheetOpen(true)}>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold mb-1 leading-none">{detail.name}</div>
                  <img src={kebabMenuIcon} width="24" height="24" alt="더보기" />
                </div>
                <div className="text-[13px] font-medium mb-2.5 flex items-center leading-none">
                  {detail.category}
                  <img src={grayDotIcon} width="3" height="3" alt="구분점" className="mx-1" />
                  {detail.distance}
                </div>
                <div className="text-sm mb-1 leading-none">{detail.address}</div>
                <div className="text-sm text-[#6D727A] mb-[19px] leading-none">{detail.review}</div>
                <div className="flex space-x-1.5 overflow-x-auto">
                  {detail.photos.map((photo, photoIndex) => (
                    <img key={photoIndex} src={photo} alt={`사진 ${photoIndex + 1}`} width="132" height="auto" className="rounded-[5px] shrink-0" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Sheet
            isOpen={isBookmarkEditSheetOpen}
            onClose={() => {
              setIsBookmarkEditVisible(false)
              setIsBookmarkEditSheetOpen(false)
            }}
          >
            {!isBookmarkEditVisible ? (
              <Sheet.Container className="max-h-[163px]">
                <Sheet.Header>
                  <div className="flex justify-end items-center pl-[25px] pr-[18px] pt-[23px] pb-[9px]">
                    <button onClick={() => setIsBookmarkEditSheetOpen(false)} className="text-[#999] text-2xl font-light">
                      <img src={closeRoundIcon} width="24" height="24" alt="닫기" />
                    </button>
                  </div>
                </Sheet.Header>
                <Sheet.Content>
                  <div className="px-[25px] pb-[13px]">
                    <div className="text-base font-medium pb-3.5 flex items-center" onClick={() => setIsBookmarkEditVisible(true)}>
                      <img src={editIcon} width="18" height="18" alt="수정 아이콘" className="mr-2.5" />
                      <div>수정</div>
                    </div>
                    <div className="text-base font-medium py-3.5 flex items-center">
                      <img src={binIcon} width="18" height="18" alt="삭제 아이콘" className="mr-2.5" />
                      <div className="text-[#FF5D4A]">삭제</div>
                    </div>
                  </div>
                </Sheet.Content>
              </Sheet.Container>
            )
            : !isBookmarkMemoVisible ? (
              <Sheet.Container className="max-h-[369px]">
                <Sheet.Header />
                <Sheet.Content>
                  <div className="border-b border-[#F4F4F4] flex items-center pb-[18px] px-[18px] mb-3">
                    <img src={photo2} width="46" height="46" alt="장소 썸네일" className="mr-3.5 object-cover" />
                    <div>
                      <div className="text-lg font-semibold mb-[7px] leading-none">CGV 건대입구</div>
                      <div className="text-[13px] text-[#5A5B64] leading-none">영화</div>
                    </div>
                  </div>
                  <div className="px-[18px]">
                    <Button variant="secondary" className="h-10 flex items-center justify-center mb-[22px]">
                      <img src={addCircleDarkIcon} width="16" height="16" alt="새 그룹 추가 아이콘" />
                      <div className="font-medium text-sm">새 그룹 추가</div>
                    </Button>
                    <div className="mb-[23px] space-y-[19px]">
                      <div className="flex items-center">
                        <div className="font-medium mr-1.5">영화</div>
                        <div className="font-semibold text-[#B4B4B4]">0</div>
                        <img src={checkDarkCheckedIcon} width="20" height="20" alt="선택된 아이콘" className="ml-auto" />
                      </div>
                      <div className="flex items-center">
                        <div className="font-medium mr-1.5">가고싶은 카페</div>
                        <div className="font-semibold text-[#B4B4B4]">10</div>
                        <img src={checkDarkIcon} width="20" height="20" alt="선택된 아이콘" className="ml-auto" />
                      </div>
                      <div className="flex items-center">
                        <div className="font-medium mr-1.5">장보기</div>
                        <div className="font-semibold text-[#B4B4B4]">8</div>
                        <img src={checkDarkIcon} width="20" height="20" alt="선택된 아이콘" className="ml-auto" />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Button variant="secondary" onClick={() => setIsBookmarkMemoVisible(true)} className="flex-1">메모 추가</Button>
                      <Button className="ml-[13px] flex-1">확인</Button>
                    </div>
                  </div>
                </Sheet.Content>
              </Sheet.Container>
            )
            : (
              <Sheet.Container className="max-h-[241px]">
                <Sheet.Header />
                <Sheet.Content>
                  <div className="px-[18px] flex flex-col h-full">
                    <div className="w-full flex items-center mb-[17px]">
                      <div className="flex items-center justify-center mr-2.5 min-w-6">
                        <img
                          src={arrowLeftIcon}
                          width="24"
                          height="24"
                          alt="뒤로가기"
                          onClick={() => {
                            setIsBookmarkMemoVisible(false);
                          }}
                        />
                      </div>
                      <h1 className="text-lg font-semibold">CGV 건대입구</h1>
                    </div>
                    <div className="mb-auto relative">
                      <Input placeholder="메모를 입력하세요" value="서비스 친절함 / 팝콘이 맛있음" className="border-none bg-[#F3F3F3] font-medium text-sm" />
                      <img src={closeRoundDarkIcon} width="18" height="18" alt="지우기" className="absolute top-[16px] right-[18px]" />
                    </div>
                    <Button
                      className="mb-6"
                      onClick={() => {
                        setIsBookmarkMemoVisible(false);
                        setIsBookmarkEditVisible(false);
                        setIsBookmarkEditSheetOpen(false);
                      }}
                    >
                      확인
                    </Button>
                  </div>
                </Sheet.Content>
              </Sheet.Container>
            )}
            <Sheet.Backdrop onClick={() => setIsBookmarkEditSheetOpen(false)} />
          </Sheet>
        </div>
      )}
    </>
  )
}

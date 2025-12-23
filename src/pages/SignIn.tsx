import { useState } from "react";
import { Link } from "react-router";
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import visibility from '@/assets/images/icons/visibility.png'
import kakaotalk from '@/assets/images/icons/kakaotalk.png'
import naver from '@/assets/images/icons/naver.png'
import apple from '@/assets/images/icons/apple.png'
import arrowLeft from '@/assets/images/icons/arrow-left.png'
import passkey from '@/assets/images/icons/passkey.png'

export default function SignIn() {
  const [isFindIdSheetOpen, setIsFindIdSheetOpen] = useState(false)
  const [findIdStep, setFindIdStep] = useState(1)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [foundEmail, setFoundEmail] = useState("")

  const [isFindPasswordSheetOpen, setIsFindPasswordSheetOpen] = useState(false)
  const [findPasswordStep, setFindPasswordStep] = useState(1)
  const [passwordPhoneNumber, setPasswordPhoneNumber] = useState("")
  const [passwordVerificationCode, setPasswordVerificationCode] = useState("")
  const [_, setPasswordTimer] = useState(0)

  const handleFindIdClick = () => {
    setIsFindIdSheetOpen(true)
    setFindIdStep(1)
    setPhoneNumber("")
    setVerificationCode("")
    setFoundEmail("")
  }

  const handleFindPasswordClick = () => {
    setIsFindPasswordSheetOpen(true)
    setFindPasswordStep(1)
    setPasswordPhoneNumber("")
    setPasswordVerificationCode("")
    setPasswordTimer(0)
  }

  const handleCloseFindId = () => {
    setIsFindIdSheetOpen(false)
  }

  const handleCloseFindPassword = () => {
    setIsFindPasswordSheetOpen(false)
  }

  return (
    <>
      <div className="px-[18px] font-medium flex flex-col items-center h-screen">
        <div className="w-fit mt-[59px] mx-auto mb-7 font-bold text-[26px] leading-9 text-center">이지픽<br />카드 할인지도</div>
        <Input id="id" type="text" placeholder="아이디" className="mb-2.5" />
        <div className="relative w-full">
          <Input id="password" type="password" placeholder="비밀번호 입력" className="mb-3.5" />
          <img src={visibility} width="16" height="16" alt="비밀번호 숨기기" className="absolute right-[17px] top-[calc(50%-16px)] cursor-pointer" />
        </div>
        <div className="flex items-center space-x-2 mb-5 w-full">
          <Checkbox id="remenber-me" />
          <Label htmlFor="remember-me" className="text-[#6D727A]">로그인 상태 유지</Label>
        </div>
        <Button className="mb-6">로그인</Button>
        <div className="flex items-center space-x-3 mb-auto">
          <div>
            <span
              className="text-sm text-[#6D727A] cursor-pointer hover:underline"
              onClick={handleFindIdClick}
            >
              아이디 찾기
            </span>
          </div>
          <div className="text-xs text-[#eaeaea]">|</div>
          <div>
            <span
              className="text-sm text-[#6D727A] cursor-pointer hover:underline"
              onClick={handleFindPasswordClick}
            >
              비밀번호 찾기
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2.5 mb-[21px] w-full">
          <hr className="flex-1 border-[#EAEAEA]" />
          <div className="text-[#999999] text-sm">SNS로 간편하게 로그인하세요</div>
          <hr className="flex-1 border-[#EAEAEA]" />
        </div>
        <div className="flex items-center space-x-[17px] mb-5">
          <img src={kakaotalk} width="42" height="42" alt="카카오톡" />
          <img src={naver} width="42" height="42" alt="네이버" />
          <img src={apple} width="42" height="42" alt="애플" />
        </div>
        <Link to="/sign-up" className="w-full">
          <Button className="mb-6" variant="secondary">회원가입</Button>
        </Link>
        <Link to="/">
          <div className="text-[15px] text-[#6D727A] underline mb-[45px]">둘러보기</div>
        </Link>
      </div>

      {isFindIdSheetOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={handleCloseFindId}
          />
          <div
            className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out overflow-y-auto ${
              isFindIdSheetOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {findIdStep === 1 && (
              <div className="px-5 py-6 h-full flex flex-col">
                <div className="flex items-center mb-8">
                  <img
                    src={arrowLeft}
                    width="24"
                    height="24"
                    alt="닫기"
                    className="cursor-pointer mr-3"
                    onClick={handleCloseFindId}
                  />
                  <span className="text-xl font-bold">아이디 찾기</span>
                  <div className="w-6"></div>
                </div>
                <div className="flex-1">
                  <p className="text-[26px] font-bold leading-9 mb-[34px]">가입 시 등록한 휴대폰 번호로<br />아이디를 찾을 수 있어요.</p>
                  <div className="mb-6">
                    <label className="text-sm mb-3 block font-medium">휴대폰 번호</label>
                    <div className="flex">
                      <Input
                        placeholder="휴대폰 번호"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="h-12"
                      />
                      <Button
                        className={`flex items-center justify-center text-white w-[102px] ml-2 rounded-[10px] ${phoneNumber ? 'bg-black' : 'bg-[#C3C3C3]'}`}
                      >인증 받기</Button>
                    </div>
                  </div>
                  <div className="mb-8">
                    <label className="text-sm mb-3 block font-medium">인증번호</label>
                    <Input
                      placeholder="인증번호 6자리"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value.slice(0, 6))}
                      maxLength={6}
                      className="h-12"
                    />
                  </div>
                </div>
                <Button
                  className="w-full h-14 rounded-xl mb-6"
                  onClick={() => {
                    if (phoneNumber.trim() && verificationCode.trim()) {
                      setFindIdStep(2)
                    }
                  }}
                  disabled={!phoneNumber.trim() || !verificationCode.trim()}
                >
                  확인
                </Button>
              </div>
            )}

            {findIdStep === 2 && (
              <div className="px-5 py-6 h-full flex flex-col">
                <div className="flex items-center mb-8">
                  <img
                    src={arrowLeft}
                    width="24"
                    height="24"
                    alt="닫기"
                    className="cursor-pointer mr-3"
                    onClick={handleCloseFindId}
                  />
                  <span className="text-xl font-bold">아이디 찾기</span>
                  <div className="w-6"></div>
                </div>
                <div className="flex-1">
                  <p className="text-[26px] font-bold leading-9 mb-[34px]">가입 시 등록한 휴대폰 번호로<br />아이디를 찾을 수 있어요.</p>
                  <div className="mb-6">
                    <label className="text-sm mb-3 block font-medium">휴대폰 번호</label>
                    <div className="flex">
                      <Input
                        placeholder="휴대폰 번호"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="h-12"
                      />
                      <Button
                        className={`flex items-center justify-center text-white w-[102px] ml-2 rounded-[10px] ${phoneNumber ? 'bg-black' : 'bg-[#C3C3C3]'}`}
                      >재전송</Button>
                    </div>
                  </div>
                  <div className="mb-8">
                    <label className="text-sm mb-3 block font-medium">인증번호</label>
                    <div className="w-full relative">
                      <Input
                        placeholder="인증번호 6자리"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value.slice(0, 6))}
                        maxLength={6}
                        className="h-12"
                      />
                      <div className="absolute font-medium text-sm text-[#0068FF] right-4 top-3.5">04:40</div>
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full h-14 rounded-xl mb-6"
                  onClick={() => {
                    if (phoneNumber.trim() && verificationCode.trim()) {
                      setFindIdStep(3)
                    }
                  }}
                  disabled={!phoneNumber.trim() || !verificationCode.trim()}
                >
                  확인
                </Button>
              </div>
            )}

            {findIdStep === 3 && (
              <div className="px-5 py-6 h-full flex flex-col">
                <div className="flex items-center mb-8">
                  <img
                    src={arrowLeft}
                    width="24"
                    height="24"
                    alt="닫기"
                    className="cursor-pointer mr-3"
                    onClick={handleCloseFindId}
                  />
                  <span className="text-xl font-bold">아이디 찾기</span>
                  <div className="w-6"></div>
                </div>
                <div className="flex-1">
                  <p className="text-[26px] font-bold leading-9 mb-[34px]">휴대폰 번호 정보와<br />일치하는 아이디입니다.</p>
                  <div className="mb-8">
                    <div className="px-4 py-5 bg-[#F3F3F3] rounded-lg flex items-center justify-center h-[72px]">
                      <p className="text-lg font-semibold">{foundEmail}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mb-6">
                  <Button
                    variant="secondary"
                    className="flex-1 h-14 rounded-xl font-semibold"
                    onClick={handleCloseFindId}
                  >
                    로그인 하기
                  </Button>
                  <Button
                    className="flex-1 h-14 rounded-xl font-semibold"
                    // onClick={() => setFindIdStep(4)}
                    onClick={handleFindPasswordClick}
                  >
                    비밀번호 찾기
                  </Button>
                </div>
              </div>
            )}

            {findIdStep === 4 && (
              <div className="px-5 py-6 h-full flex flex-col">
                <div className="flex items-center mb-8">
                  <img
                    src={arrowLeft}
                    width="24"
                    height="24"
                    alt="닫기"
                    className="cursor-pointer mr-3"
                    onClick={handleCloseFindId}
                  />
                  <span className="text-xl font-bold">아이디 찾기</span>
                  <div className="w-6"></div>
                </div>
                <div className="flex-1">
                  <p className="text-[26px] font-bold leading-9 mb-[34px]">휴대폰 번호 정보와<br />일치하는 아이디입니다.</p>
                  <div className="mb-8">
                    <div className="px-4 py-5 bg-[#F3F3F3] rounded-lg">
                      <p className="text-[15px] text-[#6D727A] mb-2 font-medium">아이디</p>
                      <p className="text-lg font-semibold">{foundEmail}</p>
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full h-14 rounded-xl mb-6 font-semibold"
                  onClick={handleCloseFindId}
                >
                  로그인하기
                </Button>
                <p className="text-center text-[13px] text-[#9CA3AF] cursor-pointer hover:underline">비밀번호 찾기</p>
              </div>
            )}
          </div>
        </>
      )}

      {isFindPasswordSheetOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={handleCloseFindPassword}
          />
          <div
            className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out overflow-y-auto ${
              isFindPasswordSheetOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {findPasswordStep === 1 && (
              <div className="px-5 py-6 h-full flex flex-col">
                <div className="flex items-center mb-8">
                  <img
                    src={arrowLeft}
                    width="24"
                    height="24"
                    alt="닫기"
                    className="cursor-pointer"
                    onClick={handleCloseFindPassword}
                  />
                  <span className="text-xl font-bold ml-3">비밀번호 찾기</span>
                  <div className="w-6"></div>
                </div>
                <div className="flex-1">
                  <p className="text-[26px] font-bold leading-9 mb-8">가입 시 등록하신 아이디와<br />휴대폰 번호를 입력해주세요.</p>
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-3 block">아이디</label>
                    <Input
                      placeholder="아이디"
                      value={passwordPhoneNumber}
                      onChange={(e) => setPasswordPhoneNumber(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div className="flex">
                    <Input
                      placeholder="휴대폰 번호"
                      value={passwordVerificationCode}
                      onChange={(e) => setPasswordVerificationCode(e.target.value)}
                      className="h-12"
                    />
                    <Button
                      className={`flex items-center justify-center text-white w-[102px] ml-2 rounded-[10px] ${passwordVerificationCode ? 'bg-black' : 'bg-[#C3C3C3]'}`}
                    >인증 받기</Button>
                  </div>
                  <div className="mb-8">
                    <label className="text-sm font-medium mb-3 block">인증번호</label>
                    <Input
                      placeholder="인증번호 6자리"
                      // value={passwordVerificationCode}
                      // onChange={(e) => setPasswordVerificationCode(e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>
                <Button
                  className="w-full h-14 rounded-xl mb-6 font-semibold"
                  onClick={() => {
                    if (passwordPhoneNumber.trim() && passwordVerificationCode.trim()) {
                      setFindPasswordStep(2)
                    }
                  }}
                  disabled={!passwordPhoneNumber.trim() || !passwordVerificationCode.trim()}
                >
                  확인
                </Button>
              </div>
            )}

            {findPasswordStep === 2 && (
              <div className="px-5 py-6 h-full flex flex-col">
                <div className="flex items-center mb-8">
                  <img
                    src={arrowLeft}
                    width="24"
                    height="24"
                    alt="닫기"
                    className="cursor-pointer"
                    onClick={handleCloseFindPassword}
                  />
                  <span className="text-xl font-bold ml-3">비밀번호 찾기</span>
                  <div className="w-6"></div>
                </div>
                <div className="flex-1">
                  <p className="text-[26px] font-bold leading-9 mb-8">새로운 비밀번호를<br />입력해주세요</p>
                  <div className="mb-2">
                    <label className="text-sm font-medium mb-3 block">새 비밀번호</label>
                    <div className="relative">
                      <Input
                        placeholder="새 비밀번호"
                        type="password"
                        value={passwordPhoneNumber}
                        onChange={(e) => setPasswordPhoneNumber(e.target.value)}
                        className="h-12"
                      />
                      <img src={visibility} width="16" height="16" alt="보기" className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" />
                    </div>
                  </div>
                  <div className="mb-8">
                    <label className="text-[13px] text-[#6D727A] mb-3 font-semibold hidden">새 비밀번호 확인</label>
                    <div className="relative">
                      <Input
                        placeholder="새 비밀번호 확인"
                        type="password"
                        value={passwordVerificationCode}
                        onChange={(e) => setPasswordVerificationCode(e.target.value)}
                        className="h-12"
                      />
                      <img src={visibility} width="16" height="16" alt="보기" className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full h-14 rounded-xl mb-6 font-semibold"
                  onClick={() => setFindPasswordStep(3)}
                  disabled={!passwordPhoneNumber.trim() || !passwordVerificationCode.trim()}
                >
                  확인
                </Button>
              </div>
            )}

            {findPasswordStep === 3 && (
              <div className="px-5 py-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-6"></div>
                  <span className="text-lg font-bold"></span>
                  <div className="w-6"></div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="mb-5">
                    <img
                      src={passkey}
                      width="55"
                      height="55"
                      alt="완료"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-[26px] leading-9 font-bold mb-2.5">비밀번호가 변경되었습니다.</p>
                    <p className="font-medium text-sm text-[#6D727A] leading-none mb-10">새로운 비밀번호로 로그인 후 서비스를 이용해주세요.</p>
                  </div>
                  <Button
                    className="w-[153px] px-10 py-4 rounded-[10px] font-medium"
                    onClick={handleCloseFindPassword}
                  >
                    로그인 하기
                  </Button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}

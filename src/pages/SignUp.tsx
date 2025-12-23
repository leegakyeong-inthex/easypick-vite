import { useState } from "react";
import { useNavigate } from 'react-router'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import arrowLeft from '@/assets/images/icons/arrow-left.png'
import visibility from '@/assets/images/icons/visibility.png'
import checkPrimary from '@/assets/images/icons/check-primary.png'
import checkPrimaryChecked from '@/assets/images/icons/check-primary-checked.png'
import checkSecondary from '@/assets/images/icons/check-secondary.png'
import checkSecondaryChecked from '@/assets/images/icons/check-secondary-checked.png'

export default function SignUp() {
  const navigate = useNavigate()

  const [termsAgreedAll, setTermsAgreedAll] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState({
    service: false,
    privacy: false,
    marketing: false,
  });

  const handleAgreedAll = () => {
    const newState = !termsAgreedAll;
    setTermsAgreedAll(newState);
    setTermsAgreed({
      service: newState,
      privacy: newState,
      marketing: newState,
    });
  };

  const handleIndividualTerm = (key: keyof typeof termsAgreed) => {
    const newTerms = { ...termsAgreed, [key]: !termsAgreed[key] };
    setTermsAgreed(newTerms);
    setTermsAgreedAll(newTerms.service && newTerms.privacy && newTerms.marketing);
  };

  return (
    <div className="px-[18px] font-medium flex flex-col items-center min-h-screen pb-[30px]">
      <div className="mt-4 mb-[29px] w-full" onClick={() => navigate(-1)}>
        <img src={arrowLeft} width="24" height="24" alt="뒤로가기" />
      </div>
      <div className="w-full mb-[34px] font-bold text-[26px] leading-9">회원가입에 필요한<br />정보를 입력해 주세요</div>
      <div className="w-full flex flex-col space-y-3 mb-[30px]">
        <Label htmlFor="name" >이름</Label>
        <Input id="name" placeholder="이름" />
      </div>
      <div className="w-full flex flex-col space-y-3 mb-[30px]">
        <Label htmlFor="phone-number" >휴대폰 번호</Label>
        <Input id="phone-number" placeholder="휴대폰 번호" />
      </div>
      <div className="w-full flex flex-col space-y-3 mb-[30px]">
        <Label htmlFor="id" >아이디</Label>
        <Input id="id" placeholder="아이디" />
      </div>
      <div className="w-full flex flex-col space-y-3 mb-[30px]">
        <Label htmlFor="password" >비밀번호</Label>
        <div className="relative w-full">
          <Input id="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상" />
          <img src={visibility} width="16" height="16" alt="비밀번호 숨기기" className="absolute right-[17px] top-[calc(50%-8px)] cursor-pointer" />
        </div>
        <div className="relative w-full">
          <Input id="password-check" placeholder="비밀번호 확인" />
          <img src={visibility} width="16" height="16" alt="비밀번호 숨기기" className="absolute right-[17px] top-[calc(50%-8px)] cursor-pointer" />
        </div>
      </div>
      <div className="w-full flex flex-col space-y-3 mb-[30px]">
        <Label htmlFor="birth-date" >생년월일</Label>
        <div className="flex items-center space-x-2.5">
          <Input id="birth-date" placeholder="생년월일 8자리" />
          <Button className="w-[61px] rounded-[10px]">남자</Button>
          <Button variant="secondary" className="w-[61px] rounded-[10px]">여자</Button>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-3 mb-[30px]">
        <Label htmlFor="email-id" >이메일</Label>
        <div className="flex items-center space-x-[9px]">
          <Input id="email-id" placeholder="이메일" className="flex-1" />
          <span>@</span>
          <Select>
            <SelectTrigger className="flex-1" style={{ height: '50px' }}>
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gmail.com">gmail.com</SelectItem>
              <SelectItem value="naver.com">naver.com</SelectItem>
              <SelectItem value="nate.com">nate.com</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-full mb-[145px]">
        <div
          className={`w-full rounded-[12px] px-5 py-3.5 mb-2.5 flex items-center space-x-3 cursor-pointer ${
            termsAgreedAll ? 'bg-[#0068FF]' : 'bg-[#F5F5F5]'
          }`}
          onClick={handleAgreedAll}
        >
          <img src={termsAgreedAll ? checkPrimaryChecked : checkPrimary} width="20" height="20" alt="체크" />
          <span className={`font-semibold text-base ${termsAgreedAll ? 'text-white' : 'text-black'}`}>약관 전체 동의하기</span>
        </div>

        <div>
          {[
            { key: 'service', label: '(필수) 서비스 이용 약관' },
            { key: 'privacy', label: '(필수) 개인정보 수집 및 이용' },
            { key: 'marketing', label: '(선택) 마케팅 수신' },
          ].map((term) => (
            <div
              key={term.key}
              className="flex items-center justify-between px-2.5 py-2.5 h-10 rounded-[10px]"
            >
              <div className="flex items-center space-x-3 flex-1 cursor-pointer" onClick={() => handleIndividualTerm(term.key as keyof typeof termsAgreed)}>
                <img src={termsAgreedAll ? checkSecondaryChecked : checkSecondary} width="20" height="20" alt="체크" />
                <span className="text-[15px] text-[#6D727A]">{term.label}</span>
              </div>
              <button className="text-[#AAAAAA] text-sm underline">보기</button>
            </div>
          ))}
        </div>
      </div>

      <Button className="w-full h-[54px] rounded-[12px] mb-[30px]" disabled={!termsAgreedAll}>
        가입 완료
      </Button>
    </div>
  )
}

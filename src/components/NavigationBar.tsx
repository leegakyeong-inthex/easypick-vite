'use client'

import { useState, useEffect } from "react";
import { Link } from "react-router";
import pageview from '@/assets/images/icons/pageview.png'
import addCard from '@/assets/images/icons/add_card.png'
import pinDrop from '@/assets/images/icons/pin_drop.png'
import creditCard from '@/assets/images/icons/credit_card.png'
import menu from '@/assets/images/icons/menu.png'

const tabs = [
  {
    title: "검색",
    iconUrl: pageview,
    href: "/",
  },
  {
    title: "내 카드",
    iconUrl: addCard,
    href: "/my-cards",
  },
  {
    title: "혜택 지도",
    iconUrl: pinDrop,
    href: "/",
  },
  {
    title: "카드 추천",
    iconUrl: creditCard,
    href: "/",
  },
  {
    title: "더보기",
    iconUrl: menu,
    href: "/",
  },
]

export default function NavigationBar() {
  const [selectedTab, setSelectedTab] = useState('혜택 지도')

  useEffect(() => {
    // Set default selected tab based on current URL path
    const currentPath = window.location.pathname;
    const currentTab = tabs.find(tab => tab.href === currentPath);
    if (currentTab) {
      setSelectedTab(currentTab.title);
    }
  }, []);

  return (
    <div className="fixed z-2 bottom-0 w-full h-20 pt-2.5 px-[25px] bg-white" style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.08)' }}>
      <div className="flex items-center space-x-[30px]">
        {tabs.map((tab) => (
          <Link
            key={tab.title}
            to={tab.href}
            className="w-[41px] h-[41px] flex flex-col items-center space-y-0.5"
            onClick={() => setSelectedTab(tab.title)}
          >
            <img src={tab.iconUrl} width="24" height="24" alt={tab.title} />
            <div className={`text-[11px] ${selectedTab === tab.title ? 'text-[#2B2D34] font-bold' : 'text-[#6D727A]'}`}>{tab.title}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

import Link from "next/link";
import NavLink from "./NavLink";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function SideNav() {
  const navLinks = [
    {
      text: 'Quick Action',
      linkTarget: '#dashboard/quick-action',
      icon: 'octicon:apps-24'
    },
    {
      text: 'Customers',
      linkTarget: '/',
      icon: 'solar:users-group-rounded-outline'
    },
    {
      text: 'Teams',
      linkTarget: '#dashboard/teams',
      icon: 'ci:users-group'
    },
    {
      text: 'Settings',
      linkTarget: '#dashboard/settings',
      icon: 'ci:settings'
    }
  ]

  return (
    <div className="w-[14rem] h-screen fixed overflow-y-auto border-r-2 border-[#EDEDEF] bg-[#f5f8fb]">
      <div className="relative h-full">
        <div className="h-full space-y-5 w-full">
          <div className="border-b-2 border-[#EDEDEF] p-4 h-[64px]">
            <button className="h-full w-full flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="h-9 w-9 bg-[#2DC38C] rounded-full" />

                <p className="text-[#47484D] text-sm font-semibold">
                  My company
                </p>
              </div>

              <div>
                <Icon
                  width="17"
                  height="17"
                  color="#47484D"
                  icon="iconoir:arrow-separate-vertical"
                />
              </div>
            </button>
          </div>

          <div className="space-y-3 px-4">
            {navLinks.map((linkDatum, i) => (
              <NavLink
                key={i}
                icon={linkDatum.icon}
                text={linkDatum.text}
                linkTarget={linkDatum.linkTarget}
              />
            ))}
          </div>
        </div>

        <div className="w-full absolute bottom-[35%] px-4">
          <Link href='#docs'>
            <div className="px-2 py-4 bg-[#31343d] hover:rotate-[5deg] transition duration-75 ease-linear rounded-[6px] text-white space-y-4">
              <div className="flex items-start space-x-2">
                <div>
                  <Icon
                    width="16"
                    height="16"
                    color="white"
                    icon="ri:question-line"
                  />
                </div>

                <div className="space-y-1 mt-[-2px]">
                  <p className="font-semibold text-sm">
                    Have feedback?
                  </p>

                  <p className="text-xs">
                    Read our docs to resolve any bug or issues encountered.
                  </p>

                  <div className="flex justify-end px-3">
                    <Icon
                      width="16"
                      height="16"
                      color="white"
                      icon="mingcute:arrow-right-fill"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
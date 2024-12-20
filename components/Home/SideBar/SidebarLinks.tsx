import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import { RootState } from '@/utils/Redux/Store/Store'
import { getSidebarLinks } from '@/utils/LinksArray'
import Link from 'next/link'

const SideBarLinks = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const User = useSelector((state: RootState) => state.user) // Get the user from the state
  const pathname = usePathname()

  // Function to determine if a link is active
  const isActive = (path: string) => pathname === path

  // Get the sidebar links filtered based on the user's email
  const links = getSidebarLinks(User.Email)

  return (
    <>
      {links.map((link, index) =>
        !link.restricted ||
        link.restricted === undefined ||
        User.Email === 'octtoppus1@gmail.com' ? (
          <Link
            key={index}
            href={link.href}
            onClick={closeSidebar}
            className={`gap-3 w-full flex items-center ${
              isActive(link.href)
                ? 'bg-white text-[#5925da] rounded-lg px-2'
                : 'text-white'
            } hover:bg-white hover:text-[#5925da] hover:rounded-lg hover:px-2`}
          >
            <link.icon size={18} />
            <h5>{link.label}</h5>
          </Link>
        ) : null
      )}
    </>
  )
}

export default SideBarLinks

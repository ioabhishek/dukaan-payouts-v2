import { Icons } from "../Icons"

const SidebarMenu = () => {
  return (
    <ul className="sidebar_menu">
      <li>
        <Icons.home />
        Home
      </li>
      <li>
        <Icons.orders />
        Orders
      </li>
      <li>
        <Icons.products />
        Products
      </li>
      <li>
        <Icons.delivery />
        Delivery
      </li>
      <li>
        <Icons.marketing />
        Marketing
      </li>
      <li>
        <Icons.analytics />
        Analytics
      </li>
      <li className="active">
        <Icons.payments />
        Payments
      </li>
      <li>
        <Icons.tools />
        Tools
      </li>
      <li>
        <Icons.discounts />
        discounts
      </li>
      <li>
        <Icons.audience />
        Audience
      </li>
      <li>
        <Icons.appearance />
        Appearance
      </li>
      <li>
        <Icons.plugins />
        Plugins
      </li>
    </ul>
  )
}

export default SidebarMenu

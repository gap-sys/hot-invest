'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { IconMenu2, IconChevronDown } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';

import { NavMobile } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import { MENU } from 'src/data/ui'

import S from './navbar.module.scss'

interface MenuItem {
  label: string
  link: string
  new?: string
}

const Navbar = () => {
  const [isSideMenuOpen, setSideMenu] = useState(false)

  const pathname = usePathname();

  const handleSmoothScroll = (id: string) => (e: React.MouseEvent) => {
    const isHome = pathname === '/';
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(id.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={S.navbar}>
      <div className={S.container}>
        <section className={S['left-section']}>
          <Link href="/" legacyBehavior>
            <a>
              <Image src={IMAGE.LOGO_HOT_INVEST} alt="Logo América Financeira" className={S.logo} />
            </a>
          </Link>
          {isSideMenuOpen && <NavMobile closeMenu={() => setSideMenu(false)} />}
          <div className={S['nav-items']}>
            {MENU.map((item, key) => (
              <div key={key} className={S['nav-link']}>
                {item.link && item.link.startsWith('#') ? (
                  <a
                    href={pathname === '/' ? item.link : `/${item.link}`}
                    className={S['link-text']}
                    onClick={handleSmoothScroll(item.link)}
                  >
                    <span>{item.label}</span>
                    {item.children && <IconChevronDown className={`${S['arrow-icon']} ${S['rotate-180']}`} />}
                  </a>
                ) : (
                  <Link href={item.link ?? '#'} legacyBehavior>
                    <a className={S['link-text']}>
                      <span>{item.label}</span>
                      {item.children && <IconChevronDown className={`${S['arrow-icon']} ${S['rotate-180']}`} />}
                    </a>
                  </Link>
                )}
                {item.children && (
                  <div className={S.dropdown}>
                    {item.children.map((item: MenuItem, key: number) => (
                      <Link key={key} href={item.link} legacyBehavior>
                        <a
                          className={S['dropdown-link']}
                        >
                          <span className={S['link-label']}>{item.label}</span>
                          {item.new && <p className={S.new}>{item.new}</p>}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className={S['right-section-container']}>
          <aside className={S['right-section']}>
            <Link href="/abrir-conta" legacyBehavior>
              <a className={S.link}>
                <span>Quero ser HotInvest</span>
              </a>
            </Link>
          </aside>
          <aside className={S['right-section2']}>
            <a href="https://hotinvest.dbs.moneyp.com.br/login" target="_blank" rel="noopener noreferrer">
              <a className={S.link}>
                <span>Acesse sua conta</span>
              </a>
            </a>
          </aside>
        </div>
        <IconMenu2 onClick={() => setSideMenu(true)} className={S['menu-icon']} />
      </div>
    </nav>
  )
}

export default Navbar

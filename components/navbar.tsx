"use client";
import Link from "next/link";
import { categories } from "@/lib/data";
import { ShoppingBag, User } from "lucide-react";

export function Navbar() {
  return (
    <>
      <header className='ticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <nav className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8'>
          <Link
            href='/'
            className='text-2xl font-bold uppercase tracking-tighter'
          >
            KICKS
          </Link>
          <div className='hidden items-center gap-8 lg:flex'>
            <Link
              href='/'
              className='text-sm font-medium uppercase tracking-wide transition-colors hover:text-muted-foreground'
            >
              Главная
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className='text-sm font-medium uppercase tracking-wide transition-colors hover:text-muted-foreground'
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <div className='flex items-center gap-4'>
            <Link
              href='/login'
              className='hidden transition-colors hover:text-muted-foreground sm:block'
              aria-label='Войти'
            >
              <User className='h-5 w-5' />
            </Link>
            <button
              onClick={() => console.log(true)}
              className='relative transition-colors hover:text-muted-foreground'
              aria-label='Корзина'
            >
              <ShoppingBag className='h-5 w-5' />
              {0 > 0 && (
                <span className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background'>
                  {0}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

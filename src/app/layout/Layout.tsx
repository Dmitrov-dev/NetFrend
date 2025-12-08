import { useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";


export function Layout() {
    const {pathname} = useLocation()

const isHomePage = useMemo(() => pathname === '/' , [pathname])

    return (
    <div className="min-h-screen w-full bg-black dark:bg-black text-black dark:text-white px-6 py-5">
        {!isHomePage && (
            <header className="mb-10 flex items-centr justify-between">
                <Link to="/">
                <img 
                    src="/лого2.png"
                    alt="Gigacha"
                    className="h-30 w-auto"
                />
                </Link>
            </header>
        )}
        <Outlet/>
    </div>
    )
}

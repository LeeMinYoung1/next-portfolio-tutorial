import { useTheme } from 'next-themes'

export default function DarkModeToggleButton(){

    // theme : 현재 값 가져오기 getter
    // setTheme : 현재 값 바꾸기 setter
    const { theme, setTheme } = useTheme()

    return (
        <>
            <button
                className="
                    inline-flex items-center
               border-0 py-1 px-3 rounded text-base mt-4 md:mt-0
                focus:outline-none
                bg-gray-100
                hover:bg-gray-50
                hover:text-orange-500
                dark:bg-slate-600
                dark:text-slate-400
                dark:hover:bg-slate-700
                dark:hover:text-yellow-300
                "
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {/* 라이트 모드 */}
                <svg xmlns="http://www.w3.org/2000/svg"
                        className="visible dark:invisible dark:h-0 dark:w-0 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>

                {/* 다크모드 */}
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="visible dark:visible dark:h-5 dark:w-5 h-0 w-0"
                     viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>

            </button>
        </>
    );
}
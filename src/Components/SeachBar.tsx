import { SearchBarButton } from "./SearchBarButton"

export const SearchBar = () => {
  return (
    <>
    <div className="fixed top-0 left-0 bottom-0 right-0 z-20 flex justify-center items-center bg-backgroundDark p-3">
      <div className='ease-in-out duration-150 transition animate-in fade-in zoom-in-[0.98] w-full'>
        <div className="items-center grid grid-cols-3 w-full outline-none font-sans 
          focus:outline-none focus:ring-borderMain focus:ring-
          dark:bg-offsetDark dark:text-textMainDark dark:border-borderMainDark dark:focus:ring-borderMainDark 
          selection:bg-superDuper selection:text-textMain 
          duration-200 transition-all
          bg-background border text-textMain border-borderMain shadow-sm rounded-md px-4 pt-4 pb-2">
          <textarea className="col-start-1 col-end-4 pb-2 overflow-auto max-h-[45vh] outline-none w-full font-sans caret-superDuper resize-none 
          selection:bg-superDuper selection:text-textMain 
          dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark 
          bg-background text-textMain placeholder-textOff" placeholder="Ask anything..."></textarea>
          
          <div className="flex bg-background dark:bg-offsetDark rounded-l-lg col-start-1 row-start-2 -ml-2">
            <SearchBarButton name="Focus" />
            <SearchBarButton name="Attach" />
          </div>
          <div>Copilot</div>
        </div>
      </div>
    </div>
    </>
  );
}
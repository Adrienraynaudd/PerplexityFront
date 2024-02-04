import { BarsFilter } from '../assets/svg/BarsFilter';
import { CirclePlus } from '../assets/svg/CirclePlus';

interface IconProps {
    icon: string;
}

const Icon = ({ icon }: IconProps) => {
    if (icon === "Focus")
        return <BarsFilter />;
    if (icon === "Attach")
        return <CirclePlus />;
    else {
        return <></>
    }
};

export const SearchBarButton = ({ name }: { name: string }) => {
    return (
        <button className="md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark dark:md:hover:text-textMainDark focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none relative group justify-center text-center items-center rounded-full cursor-pointer active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-2 font-medium h-8">
            <div className="flex items-center leading-none justify-center gap-xs" style={{ maxWidth: "120px" }}>
                <Icon icon={name} />
                <div className='text-align-center relative truncate'>{name}</div>
            </div>
        </button>
    );
};

/*
<Icon icon={name} />
*/
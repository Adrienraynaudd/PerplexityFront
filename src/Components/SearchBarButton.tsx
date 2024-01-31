import FocusSVG from '../assets/focus.svg';
import AttachSVG from '../assets/attach.svg';

interface IconProps {
    icon: string;
}

export const Icon = ({ icon }: IconProps) => {
    if (icon === "Focus")
        return <FocusSVG />;
    if (icon === "Attach")
        return <AttachSVG />;
    else {
        return <></>
    }
};

export const SearchBarButton = ({ name }: { name: string }) => {
    return (
        <button className="md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark dark:md:hover:text-textMainDark focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none relative group justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8">
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
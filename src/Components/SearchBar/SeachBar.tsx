import '../../output.css';

export const SearchBar = () => {
    return (
    <div className="relative mx-auto grid w-2/4 max-w-screen-md grid-cols-4 rounded bg-zinc-800 p-4 ring-1 ring-stone-500">
      <textarea className="col-span-4 bg-transparent resize-none border-2" placeholder="Ask anything..."></textarea>
      <button>Focus</button>
      <button>Attach</button>
      <div>Copilot</div>
    </div>
  );
}


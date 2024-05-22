export default function Header() {
  return (
    <div className="w-full flex items-center justify-center">
      <nav className="bg-background p-2 w-full md:w-[1120px] md:px-0 flex items-center justify-between h-20 gap-x-2 ">
        <div className="flex items-center gap-x-2">
          <img src="/logo-shortinho-48.png" width="32" alt="Shortinho" />
          <span className="font-bold">Shortinho</span>
        </div>
        <ul className="flex w-full justify-end">
          <li className="py-2 px-4 rounded-lg hover:bg-neutral-100 hover:cursor-pointer">
            <a className="text-base" href="/">
              Início
            </a>
          </li>
          <li className="py-2 px-4 rounded-lg hover:bg-neutral-100 hover:cursor-pointer">
            <a className="text-base" href="/sobre">
              Sobre
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

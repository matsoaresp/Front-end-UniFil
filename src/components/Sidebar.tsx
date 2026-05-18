import { Input } from "./Input";

export function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-950 border-r border-white/10 text-white p-6 flex flex-col">
            
            <h2 className="text-2xl font-bold mb-10 tracking-wide">
                StoreLab
            </h2>
            <Input/>
        
            <ul className="flex flex-col gap-4">
                
                <li className="hover:bg-gray-800 transition-all duration-300 px-4 py-3 rounded-xl cursor-pointer font-medium">
                    Home
                </li>

                <li className="hover:bg-gray-800 transition-all duration-300 px-4 py-3 rounded-xl cursor-pointer font-medium">
                    Projetos
                </li>

                <li className="hover:bg-gray-800 transition-all duration-300 px-4 py-3 rounded-xl cursor-pointer font-medium">
                    Contato
                </li>

            </ul>
        </aside>
    )
}
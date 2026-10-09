// components/ClientBadge.tsx
import React from 'react';

const clients = [
  { name: 'Stan Browney', href: 'https://www.youtube.com/Browney' },
  { name: 'Cody Hamilton', href: 'https://x.com/CodyHamiltonyt' },
  { name: 'Ayush Garg', href: 'https://x.com/_ayushgarg_' },
];

export default function Reviews() {
  return (
    <div className="flex items-center justify-center gap-3 xs:scale-80 md:scale-90">
        

      {/* Client List */}
      <div className="flex flex-col">

        <span className=" text-[8px] sm:text-[10px] text-center  font-mono tracking-widest text-zinc-500 uppercase">
          Trusted By
        </span>
        
          
        <div className=' h-[1px] scale-y-30 rounded-full animate-pulse bg-cyan-400/80 blur2px] w-full my-1 transition-all duration-1000'/>
        <div className="flex whitespace-nowrap items-center gap-1.5 text-xs font-medium text-zinc-300">
          {clients.map((client, i) => (
            <React.Fragment key={client.name}>
              <a
                href={client.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors duration-200 text-[10px] sm:text-[12px] md:text-[14px]"
              >
                {client.name}
              </a>
              {i < clients.length - 1 && (
                <span className="text-zinc-700">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

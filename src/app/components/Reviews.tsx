// components/ClientBadge.tsx
import React from 'react';

const clients = ['Stan Browney Team', 'Cody Hamilton', 'Ayush Garg'];

export default function Reviews() {
  return (
    <div className="flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75 transition-all duration-1000"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500/50 transition-all duration-1000"></span>
        </span>
      {/* </div> */}

      {/* Client List */}
      <div className="flex flex-col">
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
          Trusted By
        </span>
        <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-300">
          {clients.map((client, i) => (
            <React.Fragment key={client}>
              <span className="hover:text-white transition-colors duration-200">
                {client}
              </span>
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
// src/components/layout/MicroMesh.tsx
export function MicroMesh() {
  return (
    // Outer container stays fixed to screen, hides anything outside it
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* Inner container is scaled to 200% size, shifted back to center, and animated */}
      <div 
        className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-matrix-jitter"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, transparent, transparent 0px, rgba(255,255,255,0.2) 1px, rgba(255,255,255,0.2) 2px),
            repeating-linear-gradient(to bottom, transparent, transparent 0px, rgba(255,255,255,0.2) 0.1px, rgba(255,255,255,0.15) 2px)
          `        
        }}
      />
    </div>
  );
}
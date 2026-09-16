import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  isSimulated: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, isSimulated }) => {
  if (!isSimulated) {
    return (
      <div className="w-full min-h-screen bg-[#F9F6F0] flex justify-center">
        {children}
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-center py-6 px-4">
      {/* Mobile Device Mockup */}
      <div 
        id="device-frame"
        className="relative w-full max-w-[400px] h-[844px] max-h-[90vh] bg-[#F9F6F0] rounded-[48px] shadow-[0_25px_60px_-15px_rgba(30,57,42,0.35),0_0_0_12px_#1E392A,0_0_0_15px_#2E5A3F] border-4 border-[#12241A] flex flex-col overflow-hidden transition-all duration-300"
      >
        {/* Dynamic Island / Speaker notch */}
        <div className="w-full pt-3 px-7 pb-2 flex items-center justify-between z-20 select-none bg-[#F9F6F0] shrink-0">
          <span className="text-xs font-semibold text-[#1E392A] tracking-tight">9:41</span>
          
          <div className="w-24 h-4 bg-[#12241A] rounded-full mx-auto flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1e392a] mr-2"></div>
            <div className="w-2 h-2 rounded-full bg-[#2e5a3f]/50"></div>
          </div>

          <div className="flex items-center gap-1.5 text-[#1E392A]">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* Scrollable Screen Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative scrollbar-none">
          {children}
        </div>

        {/* Home Indicator bar */}
        <div className="w-full pb-2 pt-1 flex justify-center bg-[#F9F6F0] shrink-0 z-20 select-none">
          <div className="w-32 h-1 bg-[#1E392A]/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

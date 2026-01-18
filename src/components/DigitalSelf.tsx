import React, { useEffect, useState } from 'react';
import './DigitalSelf.css';

// Define the valid states for our character
type CharacterState = 'sleeping' | 'walking' | 'coding';

interface DigitalSelfProps {
  workStartHour?: number; // e.g., 9 for 9 AM
  workEndHour?: number;   // e.g., 17 for 5 PM
}

const DigitalSelf: React.FC<DigitalSelfProps> = ({ 
  workStartHour = 9, 
  workEndHour = 17 
}) => {
  // --- Configuration ---
  const BED_POS = 20;   // Pixels from the left wall
  const DESK_POS = 220; // Pixels from the left wall

  // --- State ---
  const [characterState, setCharacterState] = useState<CharacterState>('sleeping');
  const [position, setPosition] = useState<number>(BED_POS);
  const [isFacingLeft, setIsFacingLeft] = useState<boolean>(false);

  // 1. The Decision Logic
  const checkRoutine = () => {
    const currentHour = new Date().getHours();
    
    // Are we in working hours?
    const isWorkTime = currentHour >= workStartHour && currentHour < workEndHour;

    // Decide where we SHOULD be
    const targetPos = isWorkTime ? DESK_POS : BED_POS;
    const targetAction = isWorkTime ? 'coding' : 'sleeping';

    // If we are not at the target position, start walking
    if (position !== targetPos) {
      setCharacterState('walking');
      setIsFacingLeft(targetPos < position); // Face left if going back to bed
      setPosition(targetPos); // This triggers the CSS 'transition' to slide the div
    } else {
      // If we are already there, ensure we are doing the right action
      // (This handles page reloads so he doesn't walk if he's already there)
      if (characterState !== targetAction) {
         setCharacterState(targetAction);
      }
    }
  };

  // 2. Initial Check & Timer
  useEffect(() => {
    checkRoutine(); // Run immediately when component loads

    // Re-check every 60 seconds
    const interval = setInterval(checkRoutine, 60000);
    return () => clearInterval(interval);
  }, [position, workStartHour, workEndHour]); 

  // 3. Handle Arrival
  // This event fires automatically when the CSS slide movement finishes
  const handleTransitionEnd = () => {
    if (characterState === 'walking') {
      const currentHour = new Date().getHours();
      const isWorkTime = currentHour >= workStartHour && currentHour < workEndHour;
      
      // Stop walking and switch to the correct action
      setCharacterState(isWorkTime ? 'coding' : 'sleeping');
      setIsFacingLeft(false); // Reset direction (optional)
    }
  };

  return (
    <div className="room-container">
      {/* Furniture Images */}
      <img 
        src="/bed.png" 
        alt="Bed" 
        className="furniture" 
        style={{ left: '10px' }} 
      />
      <img 
        src="/desk.png" 
        alt="Desk" 
        className="furniture" 
        style={{ right: '10px' }} 
      />

      {/* The Character */}
      <div
        className={`character state-${characterState} ${isFacingLeft ? 'face-left' : ''}`}
        style={{ left: `${position}px` }}
        onTransitionEnd={handleTransitionEnd}
      />
    </div>
  );
};

export default DigitalSelf;
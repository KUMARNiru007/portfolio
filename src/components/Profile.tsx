import { annotate } from 'rough-notation';
import creator1 from '../assets/creator1.webp'
import { useRef, useState } from 'react';

const ProfileCard = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const annotationRef = useRef<any>(null);
  const [isAnnotated, setIsAnnotated] = useState(false);

  const handleHover = () => {
    if (imgRef.current && !isAnnotated) {
      const annotation = annotate(imgRef.current, { type: 'circle', color: 'lightblue', strokeWidth: 1 ,padding: 20, });
      annotation.show();
      annotationRef.current = annotation;
      setIsAnnotated(true);
    } else if (annotationRef.current) {
      // If already annotated, just show it again
      annotationRef.current.show();
    }
  };


  const handleMouseLeave = () => {
    if (annotationRef.current) {
      annotationRef.current.hide();
    }
  };

  return (
    <div className=" bg-gray-300 flex items-center justify-center">
      {/* Added onMouseLeave here */}
      <div className="w-40 h-40" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <img
          ref={imgRef}
          src={creator1}
          className="profile"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
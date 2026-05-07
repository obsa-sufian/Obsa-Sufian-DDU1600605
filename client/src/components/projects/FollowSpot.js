import { useEffect } from 'react';
import $ from 'jquery';

const FollowSpot = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      $('.spotlight').css({
        left: e.pageX - 50,
        top: e.pageY - 50
      });
    };
    $(document).on('mousemove', handleMouseMove);
    return () => $(document).off('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: 'relative', height: '400px', overflow: 'hidden', background: '#111' }}>
      <div className="spotlight"
        style={{
          width: '100px', height: '100px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
          position: 'absolute', borderRadius: '50%', pointerEvents: 'none'
        }}
      />
      <p className="text-white text-center pt-5">Move mouse to see the follow spot effect (jQuery powered)</p>
    </div>
  );
};
export default FollowSpot;


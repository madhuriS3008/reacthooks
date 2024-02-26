import { useEffect, useState } from "react";
import "./Mouse.css";

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMousePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", handleMousePosition);
      return () => {
        window.removeEventListener("mousemove", handleMousePosition);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) return null;
  return (
    <div className="basicTracker">
      <p>Mouse Position: </p>
      <span>x: {mousePosition.x}</span>
      <span>y: {mousePosition.y}</span>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) return null;
  return (
    <p>
      ( {mousePosition.x} , {mousePosition.y} ){" "}
    </p>
  );
};

export const PanelMouseTracker = withMousePosition(PanelMouseLogger);
export const PointMouseTracker = withMousePosition(PointMouseLogger);

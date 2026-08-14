import { useState } from "react";

interface CollapsibleProps {
  title: string;
  children: any;
}

/**
 * Makes a collapsible component that goes up and down with a click.
 *
 * @param param0 Title string, and all the children inside the collapsible.
 * @returns A collapsible component that can go up and down.
 */
export default function Collapsible({ title, children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      style={{
        marginBottom: "10px",
        minWidth: "100%",
      }}
    >
      <button
        className="display-6"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "10px",
          textAlign: "left",
          background: "rgb(248 249 250 / 50%)",
          border: "none",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {title}
          <h2
            style={{
              color: "light-grey",
            }}
          >
            {isOpen ? "▲" : "▼"}
          </h2>
        </div>
      </button>

      <div
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
          padding: isOpen ? "10px" : "0 10px",
          background: "rgb(248 249 250 / 25%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

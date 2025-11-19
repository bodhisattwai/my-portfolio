import React from "react";
import "./LoaderLogo.css";

function LoaderLogo(props) {
  const theme = props.theme;
  return (
    <div>
      <svg
        id="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 441 305"
        width="80px"
        height="80px"
      >
        <path
          className="myHexagon"
          d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
          stroke={theme.body}
          strokeWidth="4"
        />
        <path
          className="letter"
          d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
          stroke={theme.text}
          strokeWidth="3"
        />
        <path
          className="letter"
          d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
          stroke={theme.text}
          strokeWidth="3"
        />
        <path
          className="signature1"
          d="M162.25 127.902L160.984 122.85L162.25 127.902Z"
          stroke={theme.text}
          strokeWidth="6"
        />
        <path
          className="signature2"
          d="M184.062 117.302L177.758 115.29L184.062 117.302Z"
          stroke={theme.text}
          strokeWidth="6"
        />
        <path
          className="signature3"
          d="M200.016 111.199L197.227 107.516L200.016 111.199Z"
          stroke={theme.text}
          strokeWidth="6"
        />
        <path
          className="signature4"
          d="M211.111 108.594L209.365 105.856L211.111 108.594Z"
          stroke={theme.text}
          strokeWidth="6"
        />
        <path
          className="signature5"
          d="M225.205 108.594L221.667 105.856L225.205 108.594Z"
          stroke={theme.text}
          strokeWidth="6"
        />
        <path
          className="signature6"
          d="M238.299 111.199L234.144 107.516L238.299 111.199Z"
          stroke={theme.text}
          strokeWidth="6"
        />
        <path
          className="signature7"
          d="M247.494 115.29L242.721 111.763L247.494 115.29Z"
          stroke={theme.text}
          strokeWidth="6"
        />
        <path
          className="signature8"
          d="M254.284 122.85L249.105 117.302L254.284 122.85Z"
          stroke={theme.text}
          strokeWidth="6"
        />
        <path
          className="signature9"
          d="M258.075 128.958L252.896 123.41L258.075 128.958Z"
          stroke={theme.text}
          strokeWidth="6"
        />
        <path
          className="signature10"
          d="M261.865 137.012L256.686 131.464L261.865 137.012Z"
          stroke={theme.text}
          strokeWidth="6"
        />
        <path
          className="signature11"
          d="M264.655 144.572L259.476 139.024L264.655 144.572Z"
          stroke={theme.text}
          strokeWidth="6"
        />
        <path
          className="signature12"
          d="M267.444 153.672L262.265 148.124L267.444 153.672Z"
          stroke={theme.text}
          strokeWidth="6"
        />
        <path
          className="signature13"
          d="M268.71 160.232L263.531 154.684L268.71 160.232Z"
          stroke={theme.text}
          strokeWidth="6"
        />
        <path
          className="signature14"
          d="M268.71 167.792L263.531 162.244L268.71 167.792Z"
          stroke={theme.text}
          strokeWidth="6"
        />
        <path
          className="signature15"
          d="M267.444 172.844L262.265 167.296L267.444 172.844Z"
          stroke={theme.text}
          strokeWidth="6"
        />
      </svg>
    </div>
  );
}

export default LoaderLogo;

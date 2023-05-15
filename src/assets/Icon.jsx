export const IconMap = {
  home: Home,
  home2: Home2,
};

function Icon(props) {
  const { name, color = "black", ...rest } = props;
  const Vector = IconMap[name] ? IconMap[name] : null;
  const size = name.includes("Small") ? "16" : "24";
  const viewBox = name.includes("Small") ? "0 0 16 16" : "0 0 24 24";

  return (
    <svg width={size} height={size} {...rest} viewBox={viewBox}>
      <Vector color={color} />
    </svg>
  );
}

function Home(props) {
  return (
    <path
      fill={props.color}
      d="M12.3235 3.50806C12.1369 3.34973 11.8631 3.34973 11.6765 3.50806L4.67651 9.44745C4.56455 9.54245 4.5 9.68187 4.5 9.82871V19C4.5 19.2761 4.72386 19.5 5 19.5H8.5V14.5C8.5 13.3954 9.39543 12.5 10.5 12.5H13.5C14.6046 12.5 15.5 13.3954 15.5 14.5V19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V9.82871C19.5 9.68187 19.4355 9.54245 19.3235 9.44745L12.3235 3.50806ZM10.706 2.36429C11.4524 1.73098 12.5476 1.73099 13.294 2.36429L20.294 8.30369C20.7418 8.68369 21 9.24135 21 9.82871V19C21 20.1046 20.1046 21 19 21H14.75C14.3358 21 14 20.6642 14 20.25V14.5C14 14.2238 13.7761 14 13.5 14H10.5C10.2239 14 10 14.2238 10 14.5V20.25C10 20.6642 9.66421 21 9.25 21H5C3.89543 21 3 20.1046 3 19V9.82871C3 9.24135 3.25818 8.68369 3.70605 8.30369L10.706 2.36429Z"
    ></path>
  );
}

function Home2(props) {
  return (
    <path
      fill={props.color}
      d="M12.3235 3.50806C12.1369 3.34973 11.8631 3.34973 11.6765 3.50806L4.67651 9.44745C4.56455 9.54245 4.5 9.68187 4.5 9.82871V19C4.5 19.2761 4.72386 19.5 5 19.5H8.5V14.5C8.5 13.3954 9.39543 12.5 10.5 12.5H13.5C14.6046 12.5 15.5 13.3954 15.5 14.5V19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V9.82871C19.5 9.68187 19.4355 9.54245 19.3235 9.44745L12.3235 3.50806ZM10.706 2.36429C11.4524 1.73098 12.5476 1.73099 13.294 2.36429L20.294 8.30369C20.7418 8.68369 21 9.24135 21 9.82871V19C21 20.1046 20.1046 21 19 21H14.75C14.3358 21 14 20.6642 14 20.25V14.5C14 14.2238 13.7761 14 13.5 14H10.5C10.2239 14 10 14.2238 10 14.5V20.25C10 20.6642 9.66421 21 9.25 21H5C3.89543 21 3 20.1046 3 19V9.82871C3 9.24135 3.25818 8.68369 3.70605 8.30369L10.706 2.36429Z"
    ></path>
  );
}

export default Icon;
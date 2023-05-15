import Icon, { IconMap } from "../assets/Icon";

let iconArray = Object.entries(IconMap);

const IconList = (props) => {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {iconArray.map((a, i) => {
        let [x, y] = a;
        return (
          <div
            key={i}
            className="flex items-center gap-2 text-body2 text-gray-700"
          >
            <div>
              <Icon name={x} color="currentColor" />
            </div>
            <span>{y.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default IconList;

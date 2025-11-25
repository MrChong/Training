import { PlayerInfoType } from "../utils/type";
import { COLOR } from "../utils/const";

export default function PlayerInfo(props: { playerInfo: PlayerInfoType }) {
  const colorCode: string =
    COLOR[props.playerInfo.color as keyof typeof COLOR] || "#000000";
  console.log("colorCode", colorCode);
  return (
    <div className={`h-auto w-full rounded-xl`}>
      <h2 className="text-xl font-bold mb-4" style={{ color: colorCode }}>
        {props.playerInfo.name}
      </h2>
    </div>
  );
}

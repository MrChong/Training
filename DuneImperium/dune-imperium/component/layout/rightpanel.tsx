import GameInfo from "../gameinfo";
import PlayerInfo from "../playerinfo";
import { PlayerInfoType } from "../../utils/type";

export default function RightPanel() {
    const playerInfo:PlayerInfoType = { name: "Mr Chong", color: "green" };
  return (
    <div className="relative h-full w-auto">
<GameInfo />
<PlayerInfo playerInfo={playerInfo}/>
    </div>
  );
}
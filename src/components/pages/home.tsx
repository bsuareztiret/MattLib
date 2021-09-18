import { useState } from "react";
import PlayerCollapsable from "../player";

const Home: React.FC = () => {
  const [open, setOpen] = useState(-1);

  const toggleOpen = (index: number) => {
    if (open === index) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  }
  return (
    <main >
      <PlayerCollapsable open={open} index={1} toggleOpen={toggleOpen} url={"https://www.youtube.com/watch?v=1QxtWu-pJw0"} />
      <PlayerCollapsable open={open} index={2} toggleOpen={toggleOpen} url={"https://www.youtube.com/watch?v=Q35RwobJqEw"} />
      <PlayerCollapsable open={open} index={3} toggleOpen={toggleOpen} url={"https://www.youtube.com/watch?v=HeLQLXdM3Qc"} />
      <PlayerCollapsable open={open} index={4} toggleOpen={toggleOpen} url={"https://www.youtube.com/watch?v=-uOJI5tp2Mw"} />
      <PlayerCollapsable open={open} index={5} toggleOpen={toggleOpen} url={"https://www.youtube.com/watch?v=MA4sqrtF4Zw"} />
    </main>
  )
}

export default Home;
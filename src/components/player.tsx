import ReactPlayer from "react-player";
import test from "../assets/test.png";

type Props = {
  open: number,
  index: number,
  toggleOpen: (index: number) => void,
  url: string,
}

const PlayerCollapsable = ({ open, index, toggleOpen, url }: Props) => {
  return (
    <div style={{
      marginLeft: "20%",
      marginRight: "20%",
      marginTop: "2%",
      marginBottom: "2%",
      padding: "1%",
      width: "60%",
      border: "1px solid red"
    }} onClick={() => toggleOpen(index)}>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center"
      }}>
        <img style={{ width: "20%" }} alt="art" src={test} />
        <h1 style={{
          alignSelf: "center"
        }}>JE SUIS UNE VIDEO</h1>
      </div>
      {open === index && (
        <div style={{ border: "1px solid red" }}><ReactPlayer url={url} width={"100%"} /></div>
      )}
    </div>
  )
}

export default PlayerCollapsable;
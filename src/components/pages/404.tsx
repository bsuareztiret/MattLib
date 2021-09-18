const NotFound: React.FC = () => {
  return (
    <div style={{
      textAlign: "left",
      marginLeft: "20%",
      marginRight: "20%",
      marginTop: "5%",
      marginBottom: "5%",
      width: "60%",
    }}>
      <h1>404</h1>
      <p>A problem has been detected and the navigator has been shit down to pvent damage to your computer.</p>
      <p>The problem seems to be caused by the following file: PAGENOTEFOUND.SYS</p>
      <p>PAGE_FAULT_IN_NONPAGED_AREA</p>
      <p>If this is the first time you’ve seen this stop error screen, restart your computer. If this screen appears again, follow these steps:</p>
      <p>Check to make sure any new hardware or software is properly installed. If this is a new installation, ask your hardware of software manufacturer for any navigator updates you might need.</p>
      <p>If problems continue, disable or remove any newly installed hardware of software. Disable BIOS memory option such as caching or shadowing. If you need to use safe Mode to remove or disable components, restart your computer, pss f8 to select Advanced startup Options, and the select Safe Mode.</p>
      <p>Technical information:</p>
      <p>*** STOP: 0X00000050 (0xFD3094C2, 0x00000001, 0xFBFE7617, 0x00000000)</p>
      <p>*** PAGENOTFOUND.SYS - Address FBFE7617 base at FBFE5000, DateStamp 3d6dd67c</p>
    </div>
  )
}

export default NotFound;
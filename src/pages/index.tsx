const Top = () => {
  const tempStyle = {
    color: "#313131",
    textDecoration: "none",
  };
  return (
    <div>
      <h1>ここはTOPページ</h1>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          gap: 8,
          backgroundColor: "#FFE600",
          border: "1px solid #313131",
          padding: "8px 12px",
        }}
      >
        <a href="/about" style={tempStyle}>
          <div style={{ fontSize: 20, fontWeight: "bold" }}>
            このサイトは何？
          </div>
          <div style={{ fontSize: 14 }}>What is this?</div>
        </a>
        <a href="/characters" style={tempStyle}>
          <div style={{ fontSize: 20, fontWeight: "bold" }}>キャラクター</div>
          <div style={{ fontSize: 14 }}>Characters</div>
        </a>
        <a href="https://x.com/Suzuki_sepa" style={tempStyle}>
          <div style={{ fontSize: 20, fontWeight: "bold" }}>X</div>
          <div style={{ fontSize: 14 }}>Twitter</div>
        </a>
        <a href="https://skeb.jp/@Suzuki_sepa" style={tempStyle}>
          <div style={{ fontSize: 20, fontWeight: "bold" }}>Skeb</div>
          <div style={{ fontSize: 14 }}>Skeb</div>
        </a>
      </div>
    </div>
  );
};

export default Top;

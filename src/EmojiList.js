import React from "react";
import "./App.css";

class EmojiList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="main">
        <div>
          {data.map((emoji) => (
            <div key={emoji.keywords}>
              <div
                className="card"
                onClick={() => {
                  navigator.clipboard.writeText(emoji.symbol);
                  alert("Emoji copied to clipboard");
                }}
              >
                <div className="card-body result">
                  {emoji.symbol} {emoji.title}
        <span className="copy">Click to copy emoji</span>
      
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default EmojiList;

import React from "react";
import "../cssall/Header.css";

const Header = () => {
  return (
    <header>
      <a href="#" className="home-button">
        홈
      </a>
      <div className="logo">GDH 통신사</div>
      <div className="menu">
        <button>메뉴1</button>
        <button>메뉴2</button>
        <button>메뉴3</button>
        <button>메뉴4</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="검색어 입력" />
        <button>검색</button>
      </div>
    </header>
  );
};

export default Header;

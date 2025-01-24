import React, { useState, useRef, useEffect } from "react";
import "../cssall/PhoneList.css";

function PhoneList({ phoneData }) {
  const [selectedCategory, setSelectedCategory] = useState("모두");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // 드롭다운 메뉴 참조

  const phones = phoneData[selectedCategory] || [];
  const categories = Object.keys(phoneData);

  // 드롭다운 상태 토글
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // 드롭다운 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // 외부 클릭 시 드롭다운 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const handleCategoryClick = (category) => {
  //   setSelectedCategory(category);
  //   setIsDropdownOpen(false); // 선택 후 드롭다운 닫기
  // };

  const handleCategoryClick = (category, event) => {
    // event 인자 추가
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    event.stopPropagation(); // 이벤트 전파 방지
  };

  return (
    <div>
      <div className="top-phones-section">
        <h2>나이대별 추천 핸드폰</h2>

        <div className="dropdown" ref={dropdownRef}>
          <button
            className="dropdown-button"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
          >
            {selectedCategory}
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              {categories.map((category) => (
                <li
                  key={category}
                  className="dropdown-item"
                  onClick={(event) => handleCategoryClick(category, event)} // event 전달
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="phone-list">
        {phones.map((phone, index) => (
          <div className="phone-item" key={index}>
            <div className="phone-rank">{phone.rank}</div>
            <img src={phone.img} alt={phone.name} className="phone-image" />
            <div className="phone-info">
              <h3>{phone.name}</h3>
              <p className="capacity">{phone.capacity}</p>
              <p className="price">{phone.price}</p>
              <p className="provider">{phone.provider}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhoneList;

// function PhoneList({ phones }) {
//   return (
//     <div className="phone-list">
//       {phones.map((phone) => (
//         <div className="phone-item" key={phone.rank}>
//           <div className="phone-rank">{phone.rank}</div>
//           <img src={phone.img} alt={phone.name} className="phone-image" />
//           <div className="phone-info">
//             <h3>{phone.name}</h3>
//             <p className="capacity">{phone.capacity}</p>
//             <p className="price">{phone.price}</p>
//             <p className="provider">{phone.provider}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PhoneList;

// const PhoneList = () => {
//   const [phones, setPhones] = useState(phoneData["모두"]);
//   const [selectedAge, setSelectedAge] = useState("모두");

//   const filterPhones = (ageGroup) => {
//     setPhones(phoneData[ageGroup]);
//     setSelectedAge(ageGroup);
//   };

//   useEffect(() => {
//     setPhones(phoneData["모두"]);
//   }, []);

//   return (
//     <div className="top-phones-section">
//       <h2>나이대별 추천 핸드폰</h2>
//       <div className="dropdown">
//         <button onClick={() => filterPhones("모두")}>모두</button>
//         <button onClick={() => filterPhones("10대")}>10대</button>
//         <button onClick={() => filterPhones("20대")}>20대</button>
//         <button onClick={() => filterPhones("30대")}>30대</button>
//         {/* 추가 버튼은 필요에 따라 추가 */}
//       </div>
//       <div id="phone-list">
//         {phones.map((phone) => (
//           <div className="phone-item" key={phone.rank}>
//             <div className="phone-rank">{phone.rank}</div>
//             <img src={phone.img} alt={phone.name} />
//             <div className="phone-info">
//               <h3>{phone.name}</h3>
//               <p className="capacity">{phone.capacity}</p>
//               <p className="price">{phone.price}</p>
//               <p className="provider">{phone.provider}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div id="selected-age">선택된 나이대: {selectedAge}</div>
//     </div>
//   );
// };

// export default PhoneList;

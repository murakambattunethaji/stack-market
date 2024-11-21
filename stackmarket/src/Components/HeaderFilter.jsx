import React from "react";

const HeaderFilter = () => {
  const filters = [
    { label: "Business unit", options: ["All business units", "Unit 1", "Unit 2"] },
    { label: "Area", options: ["All areas", "Area 1", "Area 2"] },
    { label: "Field", options: ["All fields", "Field 1", "Field 2"] },
    { label: "Manufacturer", options: ["All manufacturers", "Manufacturer 1", "Manufacturer 2"] },
    { label: "Well", options: ["All wells", "Well 1", "Well 2"] },
    { label: "Well group", options: ["All well groups", "Group 1", "Group 2"] },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#121212",
        padding: "1rem",
        borderBottom: "1px solid #2A2A2A",
        color: "#fff",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "flex-start" }}>
        {filters.map((filter, index) => (
          <div
            key={index}
            style={{
              flex: "0 1 auto",
              width: "130px",
            }}
          >
            <label
              style={{
                display: "block",
                fontSize: "12px",
                color: "#9E9E9E",
                marginBottom: "5px",
              }}
            >
              {filter.label}
            </label>
            <select
              style={{
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#212121",
                color: "#fff",
                fontSize: "14px",
                width: "100%",
              }}
            >
              {filter.options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <div
          style={{
            flex: "0 1 auto",
            width: "150px",
          }}
        >
          <label
            style={{
              display: "block",
              fontSize: "12px",
              color: "#9E9E9E",
              marginBottom: "5px",
            }}
          >
            Method of production
          </label>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.5rem",
              borderRadius: "4px",
              backgroundColor: "#212121",
              color: "#fff",
              border: "1px solid #64B5F6",
              whiteSpace: "nowrap",
            }}
          >
            ESP <span style={{ cursor: "pointer", marginLeft: "8px", color: "#64B5F6" }}>×</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <button
          style={{
            color: "#64B5F6",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            padding: "0",
          }}
        >
          Clear filters
        </button>

        <div
          style={{
            display: "flex",
            border: "1px solid #64B5F6",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <button
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#64B5F6",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              flex: 1,
            }}
          >
            My wells
          </button>
          <button
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#212121",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              flex: 1,
            }}
          >
            All wells
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderFilter;

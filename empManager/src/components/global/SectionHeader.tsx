import React from "react";

const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
  return <h2 className="mb-4">{title}</h2>;
};

export default SectionHeader;

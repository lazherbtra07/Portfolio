import React, { FC, useState } from "react";

type SkillListProps = {
  skills: string[];
};

export const TapButton: React.FC<SkillListProps> = ({ skills }) => {
  const [activeSkill, setActiveSkill] = useState(0);
  return (
    <div>
      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li
            key={index}
            className={`  ${index === activeSkill ? "" : ""}`}
            onClick={() => setActiveSkill(index)}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

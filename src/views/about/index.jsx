import React from "react";
import TypingCard from "@/components/TypingCard";
const About = () => {
  const cardContent = `
    <p>如果你觉得这个项目对你有些许帮助的话，欢迎赞赏哈。</p>
    <p>您的赞赏，是我不断前进的动力！</p>
  `;
  return (
    <div className="app-container">
      <TypingCard title="关于作者" source={cardContent} />
    </div>
  );
};

export default About;

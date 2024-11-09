import React from "react";
import "education-page.css"; //CSS file

// Sample Data
const articles = [
  {
    id: 1,
    title: "Benefits of a Balanced Diet",
    imageUrl:
      "https://betterme.world/articles/wp-content/uploads/2020/03/The-Fundamentals-of-a-Balanced-Diet.jpg",
    description:
      "A balanced diet is key to maintaining optimal health. It includes a variety of foods...",
    link: "https://www.healthline.com/health/balanced-diet",
  },
  {
    id: 2,
    title: "Exercise and Mental Health",
    imageUrl:
      "https://prod-ne-cdn-media.puregym.com/media/805727/sc0011_improve-your-mental-health-2x.jpg?quality=80",
    description:
      "Exercise is not only beneficial for physical health but also improves mental well-being...",
    link: "https://www.healthline.com/health/depression/exercise",
  },
  {
    id: 3,
    title: "Understanding Sleep Disorders",
    imageUrl:
      "https://th.bing.com/th/id/OIP.du_YfJZqxywg2_eGdzFj0gHaE8?rs=1&pid=ImgDetMain",
    description:
      "Sleep disorders can have a significant impact on quality of life. Learn more about common disorders...",
    link: "https://www.sleepfoundation.org/sleep-disorders",
  },
  {
    id: 4,
    title: "Heart Attack and Stroke Symptoms",
    imageUrl:
      "https://www.healthywomen.org/media-library/stroke-vs-heart-attack-know-the-signs-symptoms.png?id=32931472&width=1200&height=800&quality=85&coordinates=0%2C0%2C0%2C1",
    description:
      "Sleep disorders can have a significant impact on quality of life. Learn more about common disorders...",
    link: "https://www.heart.org/en/about-us/heart-attack-and-stroke-symptoms",
  },
  {
    id: 5,
    title: "Poisoning",
    imageUrl:
      "https://th.bing.com/th/id/OIP.Mr9TqogHXPQ6-D7di1sRUwHaE7?rs=1&pid=ImgDetMain",
    description:
      "Sleep disorders can have a significant impact on quality of life. Learn more about common disorders...",
    link: "https://www.verywellhealth.com/poisoning-5217912",
  },
  {
    id: 6,
    title: "Skin Cancer Prevention",
    imageUrl:
      "https://th.bing.com/th/id/OIP.n3tFo_mHFscz3yYOHSEqPwHaE8?rs=1&pid=ImgDetMain",
    description:
      "Sleep disorders can have a significant impact on quality of life. Learn more about common disorders...",
    link: "https://www.skincancer.org/skin-cancer-prevention/",
  },
];

const HealthEducation = () => {
  return (
    <div className="education-page">
      <h1 className="heading_main">Health News and Articles</h1>
      <div className="articles">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="article-image"
            />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.link} className="read-more">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthEducation;

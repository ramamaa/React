import { Nav, Card } from "@/components";

const data = [
  {
    image:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/11/Arcane-Jinx-Laughing.jpg",
    date: "2025, June 14",
    desc: "Jinx in another timeline, torn between chaos and family.",
    title: "Jinx",
  },
  {
    image:
      "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3e3d1d630f3e511f/617d1f927d40a740d94d7f91/arcane-vi-1920x1080.jpg",
    date: "2025, June 16",
    desc: "Vi fights to protect Piltover and find her sister.",
    title: "Vi",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/Arcane-Caitlyn.jpg",
    date: "2025, June 18",
    desc: "Caitlyn, the sharpshooter of Piltover, seeking justice.",
    title: "Caitlyn",
  },
  {
    image:
      "https://cdn.oneesports.gg/cdn-data/2021/11/ArcaneNetflix_Jayce-1024x576.jpg",
    date: "2025, June 20",
    desc: "Jayce, the defender of Piltover, torn by politics and power.",
    title: "Jayce",
  },
  {
    image:
      "https://cdn.oneesports.gg/cdn-data/2021/11/ArcaneNetflix_Silco-1024x576.jpg",
    date: "2025, June 22",
    desc: "Silco dreams of a free Zaun but rules with fear.",
    title: "Silco",
  },
  {
    image:
      "https://cdn.oneesports.gg/cdn-data/2021/11/ArcaneNetflix_Ekko-1024x576.jpg",
    date: "2025, June 24",
    desc: "Ekko, the leader of the Firelights, fights for Zaun’s future.",
    title: "Ekko",
  },
];

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="bg-gray-50 h-full p-6">
        <h1 className="font-extrabold text-4xl text-center">
          Welcome to Simple Blog
        </h1>
        <p className="text-center max-w-xl mx-auto mt-2 text-gray-600">
          Discover insightful articles about web development, programming, and
          technology. Clean design meets quality content.
        </p>
      </div>

      <h2 className="font-extrabold text-center text-2xl my-6">Latest Posts</h2>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {data.map((post, index) => (
          <Card key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Home;

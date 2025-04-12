const captions = [
  `🔥 {name} is trending right now! Don't miss out.`,
  `🚀 Our top-selling product today: {name}!`,
  `✨ {name} is making waves! Grab yours before it's gone.`,
  `💥 {name} is flying off the shelves!`,
  `🛍️ Everyone’s talking about {name}!`,
  `🌟 {name} = pure perfection. Get yours now!`,
  `👀 Seen {name} yet? It's a must-have!`,
  `💫 You deserve {name}. Go get it.`,
  `🎯 This is your sign to buy {name}.`,
  `🔥 Hot pick of the day: {name}!`,
  `🎉 Make room in your wardrobe for {name}.`,
  `🌈 Add a pop of style with {name}!`,
  `🧡 People are loving {name} and so will you.`,
  `😎 Stay on trend with {name}.`,
  `🛒 Just one click away: {name}.`,
  `📦 {name} is ready to ship today!`,
  `👟 Your outfit isn't complete without {name}.`,
  `💃 Rock your look with {name}.`,
  `✨ Style upgrade? Start with {name}.`,
  `📢 Shoutout to our best-seller: {name}!`,
  `🚨 Limited stock alert: {name} won't last long.`,
  `🧥 {name} is your new favorite thing. Trust us.`,
  `☁️ Comfort + style = {name}`,
  `💎 The ultimate find: {name}`,
  `📸 Instagram’s favorite: {name}`,
  `🔥 Why is everyone obsessed with {name}? Find out.`,
  `🎁 Treat yourself to {name}. You’ve earned it.`,
  `🤩 One word: {name}.`,
  `✨ Transform your look with {name}.`,
  `🧲 Can’t stop staring at {name}? Same here.`
];

const hashtags = "#Trending #BestSeller #ShopNow";

module.exports = function generateCaption(product) {
  const raw = captions[Math.floor(Math.random() * captions.length)];
  const finalCaption = raw.replace("{name}", product.name);
  return `${finalCaption}\n\n${hashtags}`;
};

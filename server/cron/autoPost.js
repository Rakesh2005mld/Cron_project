const cron = require("node-cron");
const db = require("../utils/firebase");
const generateCaption = require("../utils/generateCaption");
const postToInstagram = require("../utils/instagram");

function getPublicImageUrl(localPath) {
    const relativePath = localPath.replace("./", "");
    return `https://cron-project-2df3e.web.app/${relativePath}`;
}
  

module.exports = function startCron() {
  // Runs every Tuesday at 6:30 PM
  cron.schedule('0 13 * * 2', async () => { 
    console.log("Running Auto Post Job...");

    //Getting all purchases
    const snapshot = await db.collection("purchases").get();
    const productCount = {};

    //Tally purchases by product name
    snapshot.forEach(doc => {
      const data = doc.data();
      const name = data.name;
      const image = data.images?.[0]; // get first image if available

      if (!name || !image) return; // skip invalid data

      if (!productCount[name]) {
        productCount[name] = {
          count: 1,
          image,
          fullProduct: data, //include full data
        };
      } else {
        productCount[name].count += 1;
      }
      
    });

    //Find top product
    const topProductEntry = Object.entries(productCount).sort((a, b) => b[1].count - a[1].count)[0];
    if (!topProductEntry) return console.log("No products found");

    const [topProductName, topProductData] = topProductEntry;

    //Generate caption & post
    const fullProduct = topProductData.fullProduct;
    const imageUrl = getPublicImageUrl(topProductData.image);
    const caption = generateCaption(fullProduct);

    await postToInstagram(fullProduct, caption, imageUrl);    //includes image
  });
};
const axios = require("axios");
const FormData = require("form-data");

module.exports = async function postToInstagram(product, caption, imageUrl) {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const igUserId = process.env.IG_USER_ID;

    if (!accessToken || !igUserId) {
      throw new Error("Missing Instagram access token or IG user ID");
    }

    const productName = product?.name || "Unnamed Product";

    console.log("🔍 Posting to Instagram:", {
      productName,
      caption,
      imageUrl,
    });

    // Create media container
    const form1 = new FormData();
    form1.append("image_url", imageUrl);
    form1.append("caption", caption);
    form1.append("access_token", accessToken);

    const mediaRes = await axios.post(
      `https://graph.facebook.com/v22.0/${igUserId}/media`,
      form1,
      { headers: form1.getHeaders() }
    );

    const creationId = mediaRes?.data?.id;
    if (!creationId) {
      throw new Error("Failed to create media container: No creation ID returned");
    }

    // Optional delay to avoid premature publishing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Publish the container
    const form2 = new FormData();
    form2.append("creation_id", creationId);
    form2.append("access_token", accessToken);

    const publishRes = await axios.post(
      `https://graph.facebook.com/v22.0/${igUserId}/media_publish`,
      form2,
      { headers: form2.getHeaders() }
    );

    if (publishRes?.data?.id) {
      console.log(`✅ Posted "${productName}" to Instagram with Post ID: ${publishRes.data.id}`);
    } else {
      console.error("⚠️ Media was created but failed to publish.");
      console.error("Publish Response:", publishRes?.data || publishRes);
    }
  } catch (error) {
    console.error("❌ Error posting to Instagram:");
    console.error("Product:", product?.name || "Unknown");
    if (error.response?.data) {
      console.error("🔍 Error Response:", error.response.data);
    } else {
      console.error("❗ Error Message:", error.message);
    }
  }
};
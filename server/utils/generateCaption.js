const captions = [
  `🔥 {name} is trending like wildfire right now, and it’s not hard to see why. With its bold design and standout quality, this piece is flying off the shelves faster than ever. If you’ve been thinking about upgrading your look, now’s the time to do it — don’t let this must-have slip through your fingers.`,
  
  `🚀 Meet our top-selling product today: {name}. It’s everything you could ask for — stylish, versatile, and built to impress. Whether you're dressing up for an event or going for an everyday vibe, {name} fits right in. Join the thousands who’ve already made it a part of their daily rotation.`,
  
  `✨ There’s something special about {name}. Maybe it’s the flawless craftsmanship, or maybe it’s the way it instantly elevates your entire outfit. Whatever the magic is, people are taking notice — and trust us, once you try it, you’ll be hooked. Grab yours now before it’s gone!`,
  
  `💥 {name} isn’t just popular — it’s iconic. Customers can’t stop talking about how effortlessly cool and comfortable it is. From early morning errands to late-night hangs, {name} is the go-to choice. And with new stock selling out daily, you’ll want to act fast.`,
  
  `🛍️ Ever feel like everyone knows something you don’t? That’s {name} right now. From influencers to everyday style-lovers, everyone’s raving about it. Whether it’s the fit, the fabric, or the overall vibe, this is one of those rare finds you don’t want to miss out on.`,
  
  `🌟 {name} is the definition of modern luxury — a perfect mix of form and function that adds an instant upgrade to your look. Whether you’re headed to brunch or hopping on a video call, this piece ensures you look effortlessly pulled together. Go ahead, treat yourself.`,
  
  `👀 Still thinking about {name}? So are we. It’s the one product that seems to stop everyone in their tracks, and it’s easy to see why. Minimalist yet bold, comfy yet polished — {name} really is in a league of its own.`,
  
  `💫 Let’s be honest, you deserve a little something just for you — and {name} is it. Crafted with attention to detail and made to fit your lifestyle, this piece is more than just a product; it’s an experience. Make it yours and see how it transforms your everyday.`,
  
  `🎯 Searching for a sign to upgrade your style? This is it. {name} is that rare find that checks all the boxes: comfort, aesthetics, and performance. It’s quickly becoming a favorite among our most stylish customers, and for good reason. Don’t wait too long — stock is limited.`,
  
  `🔥 We can’t keep {name} on the shelves, and once you see it, you’ll understand why. It’s bold, it’s practical, and it somehow manages to look amazing on everyone. If you’re ready to turn heads and step into something that feels as good as it looks, this is your moment.`,
  
  `🎉 Say goodbye to boring and hello to your new favorite piece: {name}. It brings that perfect pop of personality to any outfit, whether you’re going for chill vibes or full glam. Every wardrobe deserves a standout piece like this one.`,
  
  `🌈 Looking to brighten up your day and your outfit? {name} adds a splash of style that turns any basic look into something totally elevated. It’s colorful, fresh, and ready to help you step into the spotlight. Get yours now and see how it transforms your fit.`,
  
  `🧡 Customers can’t get enough of {name}, and neither can we. It’s soft, stylish, and made to move with you through your busiest days and chillest weekends. Once you try it, you’ll wonder how you ever lived without it.`,
  
  `😎 {name} is the upgrade your wardrobe’s been waiting for. It’s sleek, on-trend, and versatile enough to work with almost anything you already own. If staying ahead of the style curve matters to you, this is one item you won’t want to skip.`,
  
  `🛒 What are you waiting for? {name} is right here, just one click away. It’s never been easier to refresh your style with something so effortlessly cool. Add it to your cart now and thank yourself later.`,
  
  `📦 No waiting, no nonsense — {name} is ready to ship and start turning heads ASAP. We’ve packed it with love and quality, so all you need to do is unwrap and enjoy. Your new favorite item is just days away from being in your hands.`,
  
  `👟 Whether you’re hitting the streets or heading to a casual meet-up, {name} completes your look like nothing else. It’s stylish, durable, and designed for real-life wear. Trust us, your outfit isn’t done until this is on.`,
  
  `💃 Ready to take your style up a notch? {name} helps you express yourself with confidence and comfort. With its flattering fit and on-point design, it’s the kind of item you reach for over and over — because it just works.`,
  
  `✨ If you’ve been feeling like your wardrobe needs a little spark, look no further than {name}. It brings the energy, the edge, and the excellence. Style starts here — and it only gets better from this point on.`,
  
  `📢 Big news: {name} just became our official best-seller! Customers are raving about its comfort, design, and premium feel. If you want to know what all the fuss is about, this is your chance to experience it for yourself.`,
  
  `🚨 PSA: {name} is almost out of stock — and once it’s gone, it might not be back for a while. If you’ve had your eye on it, this is your moment to act. Don't say we didn't warn you.`,
  
  `🧥 Looking for that perfect piece that feels like a hug and looks like a statement? That’s {name}. It’s cozy without compromising on style, and it's quickly becoming everyone’s go-to layer. Try it and feel the difference.`,
  
  `☁️ Imagine your favorite blanket turned into a stylish outfit — that’s the vibe of {name}. It’s soft, breathable, and surprisingly chic. Whether you’re working, lounging, or brunching, it’s got you covered in comfort.`,
  
  `💎 Some products shine a little brighter than others — and {name} is one of them. It’s the kind of find you brag about discovering first. Add it to your collection and prepare for compliments.`,
  
  `📸 Want to know what’s dominating the Instagram scene right now? It’s {name}. Styled by influencers, loved by customers, and perfect for your next selfie. Get camera-ready with this fan favorite.`,
  
  `🔥 There’s a reason everyone’s obsessed with {name}. It’s not just a trend — it’s a movement. Feel the quality, see the style, and join the wave that’s taking over timelines and shopping carts.`,
  
  `🎁 You work hard, and you deserve to reward yourself — enter {name}. It’s luxurious, useful, and all yours with just a few clicks. Make your day a little brighter with something you’ll love wearing again and again.`,
  
  `🤩 One word: {name}. That’s all it takes to turn heads and start conversations. This piece is making waves for a reason — get yours and experience the wow factor firsthand.`,
  
  `✨ Ready for a transformation? {name} is here to upgrade your look and boost your confidence. It’s more than just fashion — it’s a vibe. Step into your best self with this show-stopping piece.`,
  
  `🧲 There’s something magnetic about {name}. It draws attention in the best way — whether you’re walking into a room or scrolling on your feed. Don’t be surprised if people start asking, “Where’d you get that?”`
];
// update this caption array in github

const hashtags = "#Trending #BestSeller #ShopNow";

module.exports = function generateCaption(product) {
  const raw = captions[Math.floor(Math.random() * captions.length)];
  const finalCaption = raw.replace("{name}", product.name);
  return `${finalCaption}\n\n${hashtags}`;
};

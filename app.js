const pronouns = ['the', 'our'];
const adjectives = ['great', 'big', 'small', 'awesome', 'cool', 'hot', 'new', 'old', 'fresh', 'best'];
const nouns = ['jogger', 'racoon', 'website', 'blog', 'startup', 'company', 'business', 'app', 'product', 'service'];
const extensions = ['.com', '.net', '.us', '.io', '.org', '.co', '.biz', '.info', '.online', '.tech'];

for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      for (let l = 0; l < extensions.length; l++) {
        let domain = pronouns[i] + adjectives[j] + nouns[k] + extensions[l];
        console.log(domain);
      }
    }
  }
}

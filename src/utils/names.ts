export function generateName(): string {
  const words = [
    "alpha", "beta", "delta", "echo", "falcon", "gale", "harbor", "ion", "jungle",
    "krypton", "lunar", "mystic", "nova", "orbit", "plasma", "quantum", "ripple", "solar",
    "terra", "ultra", "vortex", "wave", "xenon", "zenith"
  ];

  const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

  const wordCount = Math.random() < 0.5 ? 2 : 3;
  const phrase = Array.from({ length: wordCount }, getRandomWord).join(" ");
  
  return phrase;
}

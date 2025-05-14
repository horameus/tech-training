import { test, expect } from 'vitest';
import { counterEasy, counterMedium } from './counter.js';

test('should return the number of words in a string', () => {
    expect(counterEasy('Hello world its a me, Mario!')).toBe(6);
});

const text =
    'In today’s fast-paced digital world, effective communication is more important than ever. Whether you are writing an email, crafting a social media post, or developing content for a website, the way you express your ideas can significantly influence how your message is received. Clarity, tone, and structure all play crucial roles in ensuring your audience understands your intent. Furthermore, in professional contexts, well-written content reflects positively on your credibility and attention to detail. It’s not just about what you say, but how you say it. Using concise language, avoiding jargon, and tailoring your message to your specific audience can improve engagement and comprehension. Writing also involves understanding the platform you’re using — the expectations for a formal report differ greatly from those of an informal blog post. Practice, feedback, and careful editing are key to improving your writing skills. Tools like grammar checkers, style guides, and even peer reviews can be invaluable in this process. As digital communication continues to dominate both our personal and professional lives, mastering the art of clear, effective writing is an essential skill that opens doors, builds relationships, and enhances your ability to connect with others.';

test('should return occurence of each words in a text', () => {
    // expect(counterEasy('Hello world its a me, Mario!')).toBe(6);
    console.log(counterMedium(text));
});

import { expect, test } from 'vitest';
import { personalInfo, experiences, techStack, projects } from '../src/data/portfolio';

test('verify static portfolio data structure', () => {
  expect(personalInfo.name).toBe("Muhammad Alief Albayu");
  expect(experiences.length).toBeGreaterThan(0);
  expect(techStack.length).toBe(6);
  expect(projects.length).toBe(2);
});

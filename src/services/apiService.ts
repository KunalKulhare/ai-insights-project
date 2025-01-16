import data from '../data/ai-data.json';

export const fetchAIInsights = async (): Promise<typeof data> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

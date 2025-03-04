const getDomain = (): string => {
  const element = document.getElementById('root');

  return element?.dataset.workDomain ?? '';
};

export default getDomain;

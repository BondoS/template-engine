const render = (text: string, data: { [key: string]: string }) => {
  return text.replace(/{{.*?}}/g, (match) => {
    return data[match.slice(2, match.length - 2).trim()];
  });
};
// test
(() => {
  const test = (desc: string, result: string, expectedRes: string) => {
    console.log(`Test: ${desc}`);
    if (result === expectedRes) {
      console.log('%c Test successful', 'color: green');
    } else {
      console.log('%c Test fail', 'color: green');
    }
  };
  test(
    'Template engine test with 1 variable',
    render('Hi, my name is {{name}}', { name: 'John doe' }),
    'Hi, my name is John doe'
  );
  test(
    'Template engine test with multiple variable',
    render('Hi, my name is {{name}}, and I work as {{work}}', {
      name: 'John doe',
      work: 'Software Engineer',
    }),
    'Hi, my name is John doe, and I work as Software Engineer'
  );
})();

export {};

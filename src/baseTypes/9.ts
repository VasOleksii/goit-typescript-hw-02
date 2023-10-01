/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/
type acount = [...string[]];

type detail = {
  createAt: Date;
  updateAt: Date;
};

type pages = {
  title: string;
  likes: number;
  accounts: acount;
  status: 'open' | 'close';
  details?: detail;
};

const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

export {};

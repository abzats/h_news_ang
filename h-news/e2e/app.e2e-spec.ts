import { HNewsPage } from './app.po';

describe('h-news App', () => {
  let page: HNewsPage;

  beforeEach(() => {
    page = new HNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

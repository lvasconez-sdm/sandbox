import { SimpleProductsPage } from './app.po';

describe('simple-products App', () => {
  let page: SimpleProductsPage;

  beforeEach(() => {
    page = new SimpleProductsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

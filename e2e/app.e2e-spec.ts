import { TurbowebPage } from './app.po';

describe('turboweb App', () => {
  let page: TurbowebPage;

  beforeEach(() => {
    page = new TurbowebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

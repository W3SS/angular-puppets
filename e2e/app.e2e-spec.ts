import { PuppetsAppPage } from './app.po';

describe('puppets-app App', () => {
  let page: PuppetsAppPage;

  beforeEach(() => {
    page = new PuppetsAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

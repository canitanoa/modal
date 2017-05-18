import { ProyectoModalPage } from './app.po';

describe('proyecto-modal App', () => {
  let page: ProyectoModalPage;

  beforeEach(() => {
    page = new ProyectoModalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

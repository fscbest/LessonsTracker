import { LessonsTrackerPage } from './app.po';

describe('lessons-tracker App', function() {
  let page: LessonsTrackerPage;

  beforeEach(() => {
    page = new LessonsTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { TestBed } from '@angular/core/testing';
import { FindAndReplaceComponent } from './find-and-replace.component';

describe('FindAndReplaceComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [FindAndReplaceComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FindAndReplaceComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FindAndReplace'`, () => {
    const fixture = TestBed.createComponent(FindAndReplaceComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FindAndReplace');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FindAndReplaceComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('FindAndReplace app is running!');
  });
});

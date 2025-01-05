import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: any;
  let app: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    // Create the component instance once for all tests
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges(); // Detect changes to trigger component lifecycle
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-ecommerce' title`, () => {
    expect(app.title).toEqual('angular-ecommerce');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-ecommerce');
  });
});
